export function renderBooks() {
    return `
        <section id="books" class="py-20 bg-secondary/30">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <header class="text-center mb-12">
                        <span class="badge badge-secondary mb-4">Books</span>
                        <h2 class="text-3xl font-bold mb-4">좋아하는 책</h2>
                        <p class="text-muted-foreground">감명깊게 읽은 책들</p>
                    </header>

                    <div class="mb-8">
                        <div class="card p-6">
                            <div class="flex items-start gap-4">
                                <i data-lucide="book-marked" class="h-8 w-8 text-primary flex-shrink-0 mt-1"></i>
                                <div>
                                    <h3 class="text-xl font-semibold mb-2">독서 철학</h3>
                                    <p class="text-muted-foreground">책은 여러 시대에 걸친 사람들이 남긴 흔적이라고 생각합니다. 간접 경험을 통해 다른 사람들과의 연결을 구축하고, 세상을 더 잘 이해할 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <!-- Book 1 -->
                        <div class="border rounded-lg px-6 bg-card">
                            <button class="accordion-trigger flex items-center justify-between w-full py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
                                <div class="flex items-start gap-4 text-left flex-1">
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2 mb-1">
                                            <h3 class="font-semibold">클린 코드</h3>
                                            <span class="badge badge-outline">기술</span>
                                        </div>
                                        <p class="text-sm text-muted-foreground">로버트 C. 마틴</p>
                                        <div class="flex gap-1 mt-2">
                                            <i data-lucide="star" class="h-4 w-4 fill-yellow-400 text-yellow-400"></i>
                                            <i data-lucide="star" class="h-4 w-4 fill-yellow-400 text-yellow-400"></i>
                                            <i data-lucide="star" class="h-4 w-4 fill-yellow-400 text-yellow-400"></i>
                                            <i data-lucide="star" class="h-4 w-4 fill-yellow-400 text-yellow-400"></i>
                                            <i data-lucide="star" class="h-4 w-4 fill-yellow-400 text-yellow-400"></i>
                                        </div>
                                    </div>
                                </div>
                                <i data-lucide="chevron-down" class="h-4 w-4 shrink-0 transition-transform duration-200 accordion-icon"></i>
                            </button>
                            <div class="accordion-content overflow-hidden text-sm transition-all max-h-0">
                                <div class="pt-4 pb-6 space-y-4">
                                    <div>
                                        <h4 class="font-medium mb-2">서평</h4>
                                        <p class="text-muted-foreground">코드의 품질을 높이는 방법에 대해 배울 수 있는 필독서입니다. 변수명 짓기부터 함수 작성까지 실용적인 조언이 가득합니다.</p>
                                    </div>
                                    <div>
                                        <h4 class="font-medium mb-2">주요 배움</h4>
                                        <ul class="space-y-2">
                                            <li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span><span class="text-muted-foreground">의미 있는 이름 짓기</span></li>
                                            <li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span><span class="text-muted-foreground">함수는 한 가지 일만 해야 한다</span></li>
                                            <li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span><span class="text-muted-foreground">주석보다는 코드로 의도를 표현하기</span></li>
                                        </ul>
                                    </div>
                                    <blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground bg-muted/50 p-4 rounded-r">"나쁜 코드는 나쁜 코드를 낳는다."</blockquote>
                                </div>
                            </div>
                        </div>
                         <!-- Book 2 -->
                        <div class="border rounded-lg px-6 bg-card">
                            <button class="accordion-trigger flex items-center justify-between w-full py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
                                <div class="flex items-start gap-4 text-left flex-1">
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2 mb-1">
                                            <h3 class="font-semibold">해리포터와 마법사의 돌</h3>
                                            <span class="badge badge-outline">소설</span>
                                        </div>
                                        <p class="text-sm text-muted-foreground">J.K. 롤링</p>
                                        <div class="flex gap-1 mt-2">
                                            <i data-lucide="star" class="h-4 w-4 fill-yellow-400 text-yellow-400"></i>
                                            <i data-lucide="star" class="h-4 w-4 fill-yellow-400 text-yellow-400"></i>
                                            <i data-lucide="star" class="h-4 w-4 fill-yellow-400 text-yellow-400"></i>
                                            <i data-lucide="star" class="h-4 w-4 fill-yellow-400 text-yellow-400"></i>
                                            <i data-lucide="star" class="h-4 w-4 fill-yellow-400 text-yellow-400"></i>
                                        </div>
                                    </div>
                                </div>
                                <i data-lucide="chevron-down" class="h-4 w-4 shrink-0 transition-transform duration-200 accordion-icon"></i>
                            </button>
                            <div class="accordion-content overflow-hidden text-sm transition-all max-h-0">
                                <div class="pt-4 pb-6 space-y-4">
                                    <div>
                                        <h4 class="font-medium mb-2">서평</h4>
                                        <p class="text-muted-foreground">상상력의 세계로 빠져들게 하는 마법 같은 이야기입니다. 우정, 용기, 사랑의 중요성을 일깨워줍니다.</p>
                                    </div>
                                    <div>
                                        <h4 class="font-medium mb-2">주요 배움</h4>
                                        <ul class="space-y-2">
                                            <li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span><span class="text-muted-foreground">용기는 두려움이 없는 것이 아니라 두려움을 이겨내는 것이다</span></li>
                                            <li class="flex items-start gap-2"><span class="text-primary mt-1">✓</span><span class="text-muted-foreground">진정한 친구는 가장 어두운 순간에 빛이 된다</span></li>
                                        </ul>
                                    </div>
                                    <blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground bg-muted/50 p-4 rounded-r">"우리가 진정 누구인지 보여주는 것은 우리의 능력이 아니라 우리의 선택이다."</blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initBooks() {
    const triggers = document.querySelectorAll('.accordion-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.nextElementSibling;
            const icon = trigger.querySelector('.accordion-icon');
            const isOpen = content.style.maxHeight;

            // Close other open accordions (optional, but good UX)
            // triggers.forEach(otherTrigger => {
            //     if (otherTrigger !== trigger) {
            //         otherTrigger.nextElementSibling.style.maxHeight = null;
            //         otherTrigger.setAttribute('data-state', 'closed');
            //         otherTrigger.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
            //     }
            // });

            if (isOpen) {
                content.style.maxHeight = null;
                trigger.setAttribute('data-state', 'closed');
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                trigger.setAttribute('data-state', 'open');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}
