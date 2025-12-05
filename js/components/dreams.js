export function renderDreams() {
    return `
        <section id="dreams" class="py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <header class="text-center mb-12">
                        <span class="badge badge-secondary mb-4">Dreams & Goals</span>
                        <h2 class="text-3xl font-bold mb-4">나의 꿈과 목표</h2>
                        <p class="text-muted-foreground">미래를 향한 나의 여정</p>
                    </header>
                    
                    <div class="grid lg:grid-cols-2 gap-8 mb-12">
                        <div class="card p-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="p-3 bg-primary/10 rounded-lg">
                                    <i data-lucide="target" class="h-6 w-6 text-primary"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold">단기 목표</h3>
                                    <p class="text-sm text-muted-foreground">2025년 목표</p>
                                </div>
                            </div>
                            <div class="space-y-6">
                                <div class="space-y-3">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h4 class="font-medium">알고리즘 마스터</h4>
                                            <p class="text-sm text-muted-foreground">코딩 테스트 골드 티어 달성</p>
                                        </div>
                                        <span class="badge badge-outline whitespace-nowrap ml-2">2025년 12월</span>
                                    </div>
                                    <div class="space-y-1">
                                        <div class="flex justify-between text-sm">
                                            <span class="text-muted-foreground">진행률</span>
                                            <span class="text-primary">100%</span>
                                        </div>
                                        <div class="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div class="h-full bg-primary transition-all duration-500" style="width: 100%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h4 class="font-medium">Github 주요 프로젝트 정리</h4>
                                            <p class="text-sm text-muted-foreground">주요 프로젝트 및 활동 정리</p>
                                        </div>
                                        <span class="badge badge-outline whitespace-nowrap ml-2">2025년 12월</span>
                                    </div>
                                    <div class="space-y-1">
                                        <div class="flex justify-between text-sm">
                                            <span class="text-muted-foreground">진행률</span>
                                            <span class="text-primary">30%</span>
                                        </div>
                                        <div class="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div class="h-full bg-primary transition-all duration-500" style="width: 30%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card p-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="p-3 bg-primary/10 rounded-lg">
                                    <i data-lucide="trending-up" class="h-6 w-6 text-primary"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold">장기 비전</h3>
                                    <p class="text-sm text-muted-foreground">미래의 모습</p>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                                    <div class="flex items-start gap-3">
                                        <i data-lucide="rocket" class="h-5 w-5 text-primary flex-shrink-0 mt-1"></i>
                                        <div>
                                            <h4 class="mb-1 font-medium">글로벌 IT 기업 개발자</h4>
                                            <p class="text-sm text-muted-foreground">세계적인 기술 기업에서 혁신적인 제품을 개발하는 개발자가 되고 싶습니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                                    <div class="flex items-start gap-3">
                                        <i data-lucide="lightbulb" class="h-5 w-5 text-primary flex-shrink-0 mt-1"></i>
                                        <div>
                                            <h4 class="mb-1 font-medium">기술 블로거 / 멘토</h4>
                                            <p class="text-sm text-muted-foreground">내가 가진 지식을 나누고 후배 개발자들의 성장을 돕는 멘토가 되고 싶습니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                                    <div class="flex items-start gap-3">
                                        <i data-lucide="award" class="h-5 w-5 text-primary flex-shrink-0 mt-1"></i>
                                        <div>
                                            <h4 class="mb-1 font-medium">오픈소스 메인테이너</h4>
                                            <p class="text-sm text-muted-foreground">전 세계 개발자들이 사용하는 오픈소스 프로젝트를 주도적으로 관리하고 싶습니다.</p>
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
