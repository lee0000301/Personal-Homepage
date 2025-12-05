export function renderContact() {
    return `
        <section id="contact" class="py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <header class="text-center mb-12">
                        <span class="badge badge-secondary mb-4">Contact</span>
                        <h2 class="text-3xl font-bold mb-4">연락하기</h2>
                        <p class="text-muted-foreground">함께 성장하고 싶은 분들의 연락을 기다립니다</p>
                    </header>

                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="space-y-6">
                            <div class="card p-6">
                                <h3 class="text-xl font-semibold mb-4">연락 방법</h3>
                                <div class="space-y-4">
                                    <a href="mailto:lshsys123@gmail.com" class="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                                        <div class="p-2 bg-primary/10 rounded-lg">
                                            <i data-lucide="mail" class="h-5 w-5 text-primary"></i>
                                        </div>
                                        <div>
                                            <div class="text-sm text-muted-foreground">Email</div>
                                            <div>lshsys123@gmail.com</div>
                                        </div>
                                    </a>
                                    <!-- Other contacts -->
                                </div>
                            </div>
                        </div>

                        <div class="card p-6">
                            <h3 class="text-xl font-semibold mb-4">메시지 보내기</h3>
                            <form id="contact-form" class="space-y-4">
                                <div class="space-y-2">
                                    <label for="name" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">이름</label>
                                    <input id="name" class="input" placeholder="이름을 입력하세요" required>
                                </div>
                                <div class="space-y-2">
                                    <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">이메일</label>
                                    <input id="email" type="email" class="input" placeholder="email@example.com" required>
                                </div>
                                <div class="space-y-2">
                                    <label for="subject" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">제목</label>
                                    <input id="subject" class="input" placeholder="메시지 제목" required>
                                </div>
                                <div class="space-y-2">
                                    <label for="message" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">메시지</label>
                                    <textarea id="message" class="textarea" placeholder="메시지 내용을 입력하세요" rows="5" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-default w-full">
                                    <i data-lucide="send" class="mr-2 h-4 w-4"></i> 메시지 보내기
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initContact() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoLink = `mailto:lshsys123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;

            form.reset();
        });
    }
}
