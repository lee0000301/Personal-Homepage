import { API_BASE_URL } from '../config.js';
import { loadPosts } from './blog.js';

let isDialogOpen = false;
let isViewDialogOpen = false;
let selectedPost = null;
let postToDelete = null;

export function renderDialogs() {
    return `
    <div id="post-dialog-overlay" class="dialog-overlay"></div>
    <div id="post-dialog-content" class="dialog-content">
        <div class="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2 id="dialog-title" class="text-lg font-semibold leading-none tracking-tight">새 글 작성</h2>
            <p class="text-sm text-muted-foreground">블로그 글을 작성하거나 수정합니다.</p>
        </div>
        <form id="post-form">
            <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                    <label for="post-title" class="text-right text-sm font-medium">제목</label>
                    <input id="post-title" class="input col-span-3" required>
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <label for="post-category" class="text-right text-sm font-medium">카테고리</label>
                    <select id="post-category" class="input col-span-3">
                        <option value="Web Development">Web Development</option>
                        <option value="Algorithm">Algorithm</option>
                        <option value="Database">Database</option>
                        <option value="Personal">Personal</option>
                    </select>
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <label for="post-excerpt" class="text-right text-sm font-medium">요약</label>
                    <textarea id="post-excerpt" class="textarea col-span-3" rows="2" required></textarea>
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <label for="post-content" class="text-right text-sm font-medium">내용</label>
                    <textarea id="post-content" class="textarea col-span-3" rows="10" required></textarea>
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <label for="post-tags" class="text-right text-sm font-medium">태그</label>
                    <input id="post-tags" class="input col-span-3" placeholder="쉼표로 구분 (예: React, JS)">
                </div>
            </div>
            <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                <button type="button" class="btn btn-outline" id="close-post-dialog-btn">취소</button>
                <button type="submit" class="btn btn-default">저장</button>
            </div>
        </form>
    </div>

    <div id="view-dialog-overlay" class="dialog-overlay"></div>
    <div id="view-dialog-content" class="dialog-content max-w-3xl max-h-[90vh] overflow-y-auto">
        <div class="flex flex-col space-y-1.5">
            <div class="flex items-center gap-2 mb-2">
                <span id="view-category" class="badge badge-default"></span>
                <span id="view-date" class="text-sm text-muted-foreground"></span>
                <span id="view-readtime" class="text-sm text-muted-foreground"></span>
            </div>
            <h2 id="view-title" class="text-2xl font-semibold leading-none tracking-tight"></h2>
        </div>
        <div class="py-4">
            <div id="view-content" class="whitespace-pre-wrap text-sm leading-relaxed"></div>
            <div id="view-tags" class="mt-6 flex flex-wrap gap-2"></div>
        </div>
        <div class="flex justify-end">
            <button class="btn btn-outline" id="close-view-dialog-btn">닫기</button>
        </div>
    </div>

    <div id="delete-dialog-overlay" class="dialog-overlay"></div>
    <div id="delete-dialog-content" class="dialog-content max-w-md">
        <div class="flex flex-col space-y-1.5 text-center sm:text-left">
            <h2 class="text-lg font-semibold leading-none tracking-tight">정말 삭제하시겠습니까?</h2>
            <p class="text-sm text-muted-foreground">이 작업은 되돌릴 수 없습니다. 블로그 글이 영구적으로 삭제됩니다.</p>
        </div>
        <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4">
            <button class="btn btn-outline" id="close-delete-dialog-btn">취소</button>
            <button class="btn btn-destructive" id="confirm-delete-btn">삭제</button>
        </div>
    </div>
    `;
}

export function initDialogs() {
    // Attach event listeners for closing dialogs
    document.getElementById('close-post-dialog-btn')?.addEventListener('click', () => closeDialog('post-dialog'));
    document.getElementById('close-view-dialog-btn')?.addEventListener('click', () => closeDialog('view-dialog'));
    document.getElementById('close-delete-dialog-btn')?.addEventListener('click', () => closeDialog('delete-dialog'));

    // Form submit
    document.getElementById('post-form')?.addEventListener('submit', savePost);

    // Delete confirm
    document.getElementById('confirm-delete-btn')?.addEventListener('click', deletePost);

    // Overlay clicks to close
    document.querySelectorAll('.dialog-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                const id = overlay.id.replace('-overlay', '');
                closeDialog(id);
            }
        });
    });

    // Expose functions to window
    window.viewPost = viewPost;
    window.editPost = editPost;
    window.confirmDeletePost = confirmDeletePost;
}

export function openDialog(id) {
    const overlay = document.getElementById(`${id}-overlay`);
    const content = document.getElementById(`${id}-content`);
    if (overlay && content) {
        overlay.classList.add('open');
        content.classList.add('open');
    }
}

export function closeDialog(id) {
    const overlay = document.getElementById(`${id}-overlay`);
    const content = document.getElementById(`${id}-content`);
    if (overlay && content) {
        overlay.classList.remove('open');
        content.classList.remove('open');
    }
    if (id === 'post-dialog') {
        selectedPost = null;
        document.getElementById('post-form').reset();
    }
    if (id === 'delete-dialog') {
        postToDelete = null;
    }
}

export function openNewPostDialog() {
    selectedPost = null;
    document.getElementById('dialog-title').textContent = '새 글 작성';
    document.getElementById('post-form').reset();
    openDialog('post-dialog');
}

export async function editPost(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/${id}`);
        if (!response.ok) throw new Error('Failed to fetch post');
        selectedPost = await response.json();

        if (selectedPost) {
            document.getElementById('dialog-title').textContent = '글 수정';
            document.getElementById('post-title').value = selectedPost.title;
            document.getElementById('post-category').value = selectedPost.category || 'Web Development';
            document.getElementById('post-excerpt').value = selectedPost.excerpt || '';
            document.getElementById('post-content').value = selectedPost.content;
            document.getElementById('post-tags').value = selectedPost.tags || '';
            openDialog('post-dialog');
        }
    } catch (error) {
        console.error("Error fetching post details:", error);
        alert("Failed to load post details for editing.");
    }
}

export async function savePost(event) {
    event.preventDefault();
    const title = document.getElementById('post-title').value;
    const category = document.getElementById('post-category').value;
    const excerpt = document.getElementById('post-excerpt').value;
    const content = document.getElementById('post-content').value;
    const tags = document.getElementById('post-tags').value; // Keep as string for backend

    const postData = {
        userId: 1, // Hardcoded for now
        title,
        content,
        category,
        tags,
        excerpt
    };

    try {
        let response;
        if (selectedPost) {
            // Update
            response = await fetch(`${API_BASE_URL}/posts/${selectedPost.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });
        } else {
            // Create
            response = await fetch(`${API_BASE_URL}/posts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });
        }

        if (!response.ok) throw new Error('Failed to save post');

        loadPosts(); // Reload posts
        closeDialog('post-dialog');
    } catch (error) {
        console.error("Error saving post:", error);
        alert("Failed to save post. Please try again.");
    }
}

export async function viewPost(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/${id}`);
        if (!response.ok) throw new Error('Failed to fetch post');
        const post = await response.json();

        if (post) {
            document.getElementById('view-title').textContent = post.title;
            document.getElementById('view-category').textContent = post.category || 'Uncategorized';
            document.getElementById('view-date').textContent = new Date(post.createdDate).toLocaleDateString();
            document.getElementById('view-readtime').textContent = '5분'; // Placeholder or calc
            document.getElementById('view-content').textContent = post.content;

            const tagsList = post.tags ? post.tags.split(',').map(t => t.trim()) : [];
            document.getElementById('view-tags').innerHTML = tagsList.map(tag => `<span class="badge badge-outline">#${tag}</span>`).join('');

            openDialog('view-dialog');
        }
    } catch (error) {
        console.error("Error viewing post:", error);
    }
}

export function confirmDeletePost(id) {
    postToDelete = id;
    openDialog('delete-dialog');
}

export async function deletePost() {
    if (postToDelete) {
        try {
            const response = await fetch(`${API_BASE_URL}/posts/${postToDelete}`, {
                method: 'DELETE'
            });

            if (!response.ok) throw new Error('Failed to delete post');

            loadPosts();
            closeDialog('delete-dialog');
            postToDelete = null;
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Failed to delete post.");
        }
    }
}
