import { scrollToSection, toggleMenu } from '../utils.js';

export function renderHeader() {
    return `
    <header class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <a href="#" class="flex items-center gap-2">
                    <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                        <span class="font-bold">CS</span>
                    </div>
                    <span class="font-semibold">Computer Science Student</span>
                </a>

                <!-- Desktop Menu -->
                <ul class="flex items-center gap-2 list-none">
                    <li><button data-scroll-to="about" class="btn btn-ghost">About</button></li>
                    <li><button data-scroll-to="hobbies" class="btn btn-ghost">Hobbies</button></li>
                    <li><button data-scroll-to="books" class="btn btn-ghost">Books</button></li>
                    <li><button data-scroll-to="dreams" class="btn btn-ghost">Dreams</button></li>
                    <li><button data-scroll-to="blog" class="btn btn-ghost">Blog</button></li>
                    <li><button data-scroll-to="timeline" class="btn btn-ghost">Timeline</button></li>
                    <li><button data-scroll-to="contact" class="btn btn-ghost">Contact</button></li>
                </ul>
            </div>
        </nav>
    </header>
    `;
}

export function initHeader() {
    // Attach event listeners
    document.querySelectorAll('[data-scroll-to]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('data-scroll-to');
            scrollToSection(targetId);
        });
    });
}
