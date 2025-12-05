import { API_BASE_URL } from '../config.js';
import { createElement } from '../utils.js';
import { openDialog, closeDialog, openNewPostDialog, editPost, savePost, viewPost, confirmDeletePost, deletePost } from './dialogs.js';

export function renderBlog() {
    return `
        <section id="blog" class="py-20 bg-secondary/30">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <header class="text-center mb-12">
                        <span class="badge badge-secondary mb-4">Blog</span>
                        <h2 class="text-3xl font-bold mb-4">블로그</h2>
                        <p class="text-muted-foreground mb-6">학습한 내용과 경험을 기록합니다</p>
                        <button id="new-post-btn" class="btn btn-default btn-lg">
                            <i data-lucide="plus" class="mr-2 h-5 w-5"></i> 새 글 작성
                        </button>
                    </header>

                    <div id="blog-posts-container" class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="col-span-2 text-center py-12">Loading posts...</div>
                    </div>

                    <div class="card p-6">
                        <h3 class="text-xl font-semibold mb-4">블로그 주제별 분류</h3>
                        <div id="blog-categories-container" class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <!-- Categories rendered by JS -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initBlog() {
    loadPosts();
    // renderCategories called within loadPosts after data fetch

    const newPostBtn = document.getElementById('new-post-btn');
    if (newPostBtn) {
        newPostBtn.addEventListener('click', openNewPostDialog);
    }
}

export async function loadPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;

    try {
        const response = await fetch(`${API_BASE_URL}/posts`);
        if (!response.ok) throw new Error('Failed to fetch posts');
        const posts = await response.json();

        renderPostsList(posts, container);
        renderCategories(posts);
    } catch (error) {
        console.error('Error loading posts:', error);
        container.innerHTML = `<div class="col-span-2 text-center py-12 text-destructive">Failed to load posts. Please try again later.</div>`;
    }
}

function renderPostsList(posts, container) {
    container.innerHTML = '';

    if (posts.length === 0) {
        container.innerHTML = `<div class="col-span-2 text-center py-12 text-muted-foreground">No posts yet. Be the first to write one!</div>`;
        return;
    }

    posts.forEach(post => {
        // Handle potentially missing fields if backend returns partial data
        const tags = post.tags ? post.tags.split(',').map(t => t.trim()) : [];
        const likesCount = post.likes ? post.likes.length : 0; // Assuming likes is a list based on entity
        const commentsCount = post.comments ? post.comments.length : 0;

        const postElement = document.createElement('div');
        postElement.className = 'card flex flex-col h-full hover:shadow-lg transition-shadow';
        postElement.innerHTML = `
            <div class="p-6 flex-1">
                <div class="flex items-center justify-between mb-4">
                    <span class="badge badge-secondary">${post.category || 'Uncategorized'}</span>
                    <span class="text-sm text-muted-foreground">${new Date(post.createdDate).toLocaleDateString()}</span>
                </div>
                <h3 class="text-xl font-bold mb-2 line-clamp-1">${post.title}</h3>
                <p class="text-muted-foreground mb-4 line-clamp-3">${post.excerpt || ''}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${tags.map(tag => `<span class="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">#${tag}</span>`).join('')}
                </div>
            </div>
            <div class="p-6 pt-0 mt-auto border-t border-border flex items-center justify-between">
                <div class="flex items-center gap-4 text-sm text-muted-foreground">
                    <span class="flex items-center gap-1"><i data-lucide="heart" class="w-4 h-4"></i> ${post.viewCount || 0}</span> <!-- Using viewCount as placeholder or need like count logic -->
                    <span class="flex items-center gap-1"><i data-lucide="message-square" class="w-4 h-4"></i> ${commentsCount}</span>
                </div>
                <div class="flex gap-2">
                    <button class="btn btn-ghost btn-icon" onclick="window.viewPost(${post.id})">
                        <i data-lucide="eye" class="w-4 h-4"></i>
                    </button>
                    <!-- Edit/Delete buttons logic might change if we don't have auth on frontend yet. Leaving them for now. -->
                </div>
            </div>
        `;
        container.appendChild(postElement);
    });

    // Re-initialize icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function renderCategories(posts) {
    const container = document.getElementById('blog-categories-container');
    if (!container) return;

    const categories = {};
    posts.forEach(post => {
        const cat = post.category || 'Uncategorized';
        categories[cat] = (categories[cat] || 0) + 1;
    });

    container.innerHTML = '';

    Object.entries(categories).forEach(([category, count]) => {
        const div = document.createElement('div');
        div.className = 'p-4 bg-secondary/50 rounded-lg text-center hover:bg-secondary/80 transition-colors cursor-pointer';
        div.innerHTML = `
            <div class="font-semibold mb-1">${category}</div>
            <div class="text-sm text-muted-foreground">${count} posts</div>
        `;
        container.appendChild(div);
    });
}
