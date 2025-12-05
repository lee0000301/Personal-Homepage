export function renderTimeline() {
    return `
        <section id="timeline" class="py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <header class="text-center mb-12">
                        <span class="badge badge-secondary mb-4">Timeline</span>
                        <h2 class="text-3xl font-bold mb-4">타임라인</h2>
                        <p class="text-muted-foreground">지금까지의 성장과 앞으로의 계획</p>
                    </header>

                    <div class="relative">
                        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
                        <div class="space-y-12">
                            <!-- Timeline Item 1 -->
                            <div class="relative">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="relative z-10 hidden md:block">
                                        <i data-lucide="check-circle-2" class="h-6 w-6 text-green-500"></i>
                                    </div>
                                    <div class="card flex-1 p-4">
                                        <div class="flex items-center justify-between flex-wrap gap-2">
                                            <div>
                                                <h3 class="font-semibold">2022</h3>
                                                <p class="text-sm text-muted-foreground">1학년</p>
                                            </div>
                                            <span class="badge badge-default bg-green-500 hover:bg-green-600">완료</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-0 md:ml-16 space-y-4">
                                    <div class="card p-4 hover:shadow-md transition-shadow">
                                        <div class="flex items-start gap-4">
                                            <div class="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-purple-500"></div>
                                            <div class="flex-1">
                                                <div class="flex items-start justify-between gap-4 mb-2">
                                                    <h4 class="font-medium">대학 입학</h4>
                                                    <span class="badge badge-outline text-xs whitespace-nowrap">3월</span>
                                                </div>
                                                <p class="text-sm text-muted-foreground">컴퓨터소프트웨어 공학과 입학</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card p-4 hover:shadow-md transition-shadow">
                                        <div class="flex items-start gap-4">
                                            <div class="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-blue-500"></div>
                                            <div class="flex-1">
                                                <div class="flex items-start justify-between gap-4 mb-2">
                                                    <h4 class="font-medium">첫 프로그래밍 수업</h4>
                                                    <span class="badge badge-outline text-xs whitespace-nowrap">4월</span>
                                                </div>
                                                <p class="text-sm text-muted-foreground">C언어 기초 학습 및 과제 수행</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Timeline Item 2 -->
                            <div class="relative">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="relative z-10 hidden md:block">
                                        <i data-lucide="circle" class="h-6 w-6 text-primary"></i>
                                    </div>
                                    <div class="card flex-1 p-4">
                                        <div class="flex items-center justify-between flex-wrap gap-2">
                                            <div>
                                                <h3 class="font-semibold">2025</h3>
                                                <p class="text-sm text-muted-foreground">2학년 (현재)</p>
                                            </div>
                                            <span class="badge badge-default">진행 중</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-0 md:ml-16 space-y-4">
                                    <div class="card p-4 hover:shadow-md transition-shadow border-primary/50">
                                        <div class="flex items-start gap-4">
                                            <div class="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-yellow-500"></div>
                                            <div class="flex-1">
                                                <div class="flex items-start justify-between gap-4 mb-2">
                                                    <h4 class="font-medium">프로젝트 및 공부</h4>
                                                    <span class="badge badge-outline text-xs whitespace-nowrap">현재</span>
                                                </div>
                                                <p class="text-sm text-muted-foreground">React, TypeScript 및 spring boot 활용한 클라우드 웹 프로젝트</p>
                                                <p class="text-sm text-muted-foreground">java swing, socket 통신 활용한 GUI 프로그래밍 프로젝트</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Timeline Item 3 -->
                            <div class="relative">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="relative z-10 hidden md:block">
                                        <i data-lucide="clock" class="h-6 w-6 text-muted-foreground"></i>
                                    </div>
                                    <div class="card flex-1 p-4">
                                        <div class="flex items-center justify-between flex-wrap gap-2">
                                            <div>
                                                <h3 class="font-semibold">2026 ~</h3>
                                                <p class="text-sm text-muted-foreground">미래</p>
                                            </div>
                                            <span class="badge badge-outline">예정</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-0 md:ml-16 space-y-4">
                                    <div class="card p-4 hover:shadow-md transition-shadow opacity-70">
                                        <div class="flex items-start gap-4">
                                            <div class="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gray-400"></div>
                                            <div class="flex-1">
                                                <div class="flex items-start justify-between gap-4 mb-2">
                                                    <h4 class="font-medium">인턴십 도전</h4>
                                                    <span class="badge badge-outline text-xs whitespace-nowrap">2026년 여름</span>
                                                </div>
                                                <p class="text-sm text-muted-foreground">현업 개발 문화 경험 및 실무 능력 배양</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
