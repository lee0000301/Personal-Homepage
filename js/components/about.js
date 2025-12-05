export function renderAbout() {
    return `
        <section id="about" class="py-20 bg-secondary/30">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <header class="text-center mb-12">
                        <span class="badge badge-secondary mb-4">About Me</span>
                        <h2 class="text-3xl font-bold mb-4">자기소개</h2>
                        <p class="text-muted-foreground">열정적인 컴퓨터 공학 학생으로서의 여정</p>
                    </header>

                    <article class="space-y-8">
                        <div class="card p-6">
                            <h3 class="text-xl font-semibold mb-4">학업 배경</h3>
                            <div class="space-y-4">
                                <div>
                                    <p class="mb-2">저는 현재 컴퓨터소프트웨어 공학과 2학년에 재학 중이며, 소프트웨어 개발과 AI에 관심을 가지고 있습니다.</p>
                                    <blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground mt-4">
                                        "소프트웨어 개발은 문제 해결의 예술이다."
                                    </blockquote>
                                </div>
                                <details class="bg-muted/50 p-4 rounded-lg">
                                    <summary class="cursor-pointer list-none font-medium select-none">📚 주요 이수 과목 (클릭하여 펼치기)</summary>
                                    <ul class="mt-4 space-y-2 ml-4 list-none">
                                        <li>• 프로그래밍 입문</li>
                                        <li>• 자료구조</li>
                                        <li>• 객체지향 프로그래밍</li>
                                        <li>• 컴퓨터 네트워크</li>
                                    </ul>
                                </details>
                            </div>
                        </div>

                        <div class="card p-6">
                            <h3 class="text-xl font-semibold mb-6">기술 스택</h3>
                            <div class="space-y-6">
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <i data-lucide="code" class="h-5 w-5 text-primary"></i>
                                            <label>JavaScript/TypeScript</label>
                                        </div>
                                        <span class="text-sm text-muted-foreground">35%</span>
                                    </div>
                                    <div class="h-2 w-full overflow-hidden rounded-full bg-secondary">
                                        <div class="h-full bg-primary flex-1 transition-all" style="width: 35%"></div>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <i data-lucide="globe" class="h-5 w-5 text-primary"></i>
                                            <label>React</label>
                                        </div>
                                        <span class="text-sm text-muted-foreground">20%</span>
                                    </div>
                                    <div class="h-2 w-full overflow-hidden rounded-full bg-secondary">
                                        <div class="h-full bg-primary flex-1 transition-all" style="width: 20%"></div>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <i data-lucide="laptop" class="h-5 w-5 text-primary"></i>
                                            <label>Python</label>
                                        </div>
                                        <span class="text-sm text-muted-foreground">50%</span>
                                    </div>
                                    <div class="h-2 w-full overflow-hidden rounded-full bg-secondary">
                                        <div class="h-full bg-primary flex-1 transition-all" style="width: 50%"></div>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-2">
                                            <i data-lucide="database" class="h-5 w-5 text-primary"></i>
                                            <label>Database</label>
                                        </div>
                                        <span class="text-sm text-muted-foreground">15%</span>
                                    </div>
                                    <div class="h-2 w-full overflow-hidden rounded-full bg-secondary">
                                        <div class="h-full bg-primary flex-1 transition-all" style="width: 15%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 pt-6 border-t border-border">
                                <h4 class="mb-3 font-medium">관심 분야</h4>
                                <div class="flex flex-wrap gap-2">
                                    <span class="badge badge-default">Web Development</span>
                                    <span class="badge badge-default">Machine Learning</span>
                                    <span class="badge badge-default">Algorithm</span>
                                    <span class="badge badge-default">Cloud Computing</span>
                                    <span class="badge badge-default">Mobile App</span>
                                    <span class="badge badge-default">Open Source</span>
                                </div>
                            </div>
                        </div>

                        <div class="card p-6">
                            <h3 class="text-xl font-semibold mb-4">동기와 목표</h3>
                            <div class="space-y-4">
                                <section>
                                    <h4 class="mb-2 font-medium">프로그래밍을 시작한 계기</h4>
                                    <p class="text-muted-foreground">고등학교 때 우연히 처음으로 Python 프로그래밍을 접하면서, 내가 만든 코드가 실제로 동작하는 것을 보고 큰 감동을 받았습니다. 그 순간부터 프로그래밍은 단순한 취미를 넘어 제 꿈이 되었습니다.</p>
                                </section>
                                <section>
                                    <h4 class="mb-2 font-medium">현재의 목표</h4>
                                    <ol class="list-decimal list-inside space-y-2 text-muted-foreground">
                                        <li>탄탄한 컴퓨터 공학 기초 다지기</li>
                                        <li>실무 프로젝트 경험 쌓기</li>
                                        <li>오픈소스 프로젝트 기여하기</li>
                                        <li>알고리즘 문제 해결 능력 향상</li>
                                    </ol>
                                </section>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    `;
}
