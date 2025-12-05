import { scrollToSection } from '../utils.js';

export function renderHero() {
    return `
        <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10"></div>
             <div class="container mx-auto px-4 py-20 relative z-10">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <div>
                            <p class="text-muted-foreground mb-2">안녕하세요, 저는</p>
                            <h1 class="text-4xl font-bold mb-4">컴퓨터소프트웨어 공학과</h1>
                            <h2 class="text-2xl text-muted-foreground">2학년 재학 중</h2>
                        </div>
                        <p class="text-lg text-muted-foreground">
                            개발자를 지망하는 학생입니다.                        </p>
                        <div class="flex flex-wrap gap-4">
                            <button id="hero-contact-btn" class="btn btn-default btn-lg">
                                <i data-lucide="mail" class="w-4 h-4 mr-2"></i> 연락하기
                            </button>
                            <a href="https://github.com/lee0000301" target="_blank" class="btn btn-outline btn-lg">
                                <i data-lucide="github" class="w-4 h-4 mr-2"></i> GitHub
                            </a>
                        </div>
                        <div class="flex gap-6 pt-4">
                            <div>
                                <div class="text-primary font-bold text-xl mb-1">2년차</div>
                                <p class="text-sm text-muted-foreground">Years of Study</p>
                            </div>
                            <div class="border-l pl-6 border-border">
                                <div class="text-primary font-bold text-xl mb-1">3+</div>
                                <p class="text-sm text-muted-foreground">Projects</p>
                            </div>
                            <div class="border-l pl-6 border-border">
                                <div class="text-primary font-bold text-xl mb-1">5+</div>
                                <p class="text-sm text-muted-foreground">Technologies</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                            <img src="https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5NTkwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Coding workspace" class="w-full h-full object-cover rounded-xl">
                        </div>
                    </div>
                </div>
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <i data-lucide="arrow-down" class="text-muted-foreground"></i>
                </div>
             </div>
        </section>
    `;
}

export function initHero() {
    const btn = document.getElementById('hero-contact-btn');
    if (btn) {
        btn.addEventListener('click', () => scrollToSection('contact'));
    }
}
