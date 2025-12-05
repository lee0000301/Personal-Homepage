export function renderFooter() {
    return `
        <footer class="bg-secondary/30 border-t border-border">
            <div class="container mx-auto px-4 py-12">
                <div class="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 class="font-semibold mb-4">About</h3>
                        <p class="text-sm text-muted-foreground">컴퓨터 공학을 전공하며 개발자의 꿈을 키워가는 학생입니다.</p>
                    </div>
                    <div>
                        <h3 class="font-semibold mb-4">Quick Links</h3>
                        <ul class="space-y-2 text-sm">
                            <li><button data-scroll-to="about" class="text-muted-foreground hover:text-primary transition-colors">About Me</button></li>
                            <li><button data-scroll-to="hobbies" class="text-muted-foreground hover:text-primary transition-colors">Hobbies</button></li>
                            <li><button data-scroll-to="blog" class="text-muted-foreground hover:text-primary transition-colors">Blog</button></li>
                            <li><button data-scroll-to="contact" class="text-muted-foreground hover:text-primary transition-colors">Contact</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold mb-4">Connect</h3>
                        <div class="flex gap-4">
                            <a href="https://github.com/lee0000301" target="_blank" class="p-2 bg-secondary hover:bg-secondary/70 rounded-lg transition-colors"><i data-lucide="github" class="h-5 w-5"></i></a>
                            <a href="#" class="p-2 bg-secondary hover:bg-secondary/70 rounded-lg transition-colors"><i data-lucide="mail" class="h-5 w-5"></i></a>
                        </div>
                    </div>
                </div>
                <div class="h-px bg-border mb-8"></div>
                <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© 2025 Computer Science Student. All rights reserved.</p>
                    <p class="flex items-center gap-2">Made with HTML/CSS/JS</p>
                </div>
            </div>
        </footer>
    `;
}
