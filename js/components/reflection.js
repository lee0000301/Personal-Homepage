export function renderReflection() {
    return `
        <section id="reflection" class="py-20 bg-secondary/30">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <header class="text-center mb-12">
                        <span class="badge badge-secondary mb-4">Reflection</span>
                        <h2 class="text-3xl font-bold mb-4">성찰 노트</h2>
                        <p class="text-muted-foreground">경험을 통해 배우고 성장하기</p>
                    </header>

                    <div class="space-y-8">
                        <!-- Reflection 1 -->
                        <div class="card p-6">
                            <div class="mb-6">
                                <div class="flex items-center justify-between mb-2">
                                    <h3 class="text-xl font-semibold">첫 해커톤 참가 후기</h3>
                                    <span class="badge badge-outline">2025년 7월</span>
                                </div>
                                <span class="badge badge-default">경험</span>
                            </div>

                            <div data-tab-group>
                                <div class="grid w-full grid-cols-3 bg-muted p-1 rounded-lg mb-6">
                                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground shadow-sm" data-tab-target="insights-1">깨달음</button>
                                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-muted-foreground" data-tab-target="challenges-1">도전</button>
                                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-muted-foreground" data-tab-target="lessons-1">교훈</button>
                                </div>

                                <div data-tab-content="insights-1" class="mt-6">
                                    <div class="space-y-4">
                                        <div class="flex items-start gap-3">
                                            <i data-lucide="lightbulb" class="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1"></i>
                                            <div>
                                                <h4 class="font-medium mb-3">주요 깨달음</h4>
                                                <ul class="space-y-3">
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">2학년 여름방학때 참가한 교내 AI 해커톤과 소방경진대회에서</span></li>
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">AI 기술의 중요성과 활용법을 깨닫게 되었습니다. </span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab-content="challenges-1" class="mt-6 hidden">
                                    <div class="space-y-4">
                                        <div class="flex items-start gap-3">
                                            <i data-lucide="alert-circle" class="h-5 w-5 text-red-500 flex-shrink-0 mt-1"></i>
                                            <div>
                                                <h4 class="font-medium mb-3">직면한 도전</h4>
                                                <ul class="space-y-3">
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">짧은 시간 내에 아이디어를 구현하는 것이 어려웠습니다.</span></li>
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">팀원들과의 의사소통에서 오해가 발생했습니다.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab-content="lessons-1" class="mt-6 hidden">
                                    <div class="space-y-4">
                                        <div class="flex items-start gap-3">
                                            <i data-lucide="trending-up" class="h-5 w-5 text-green-500 flex-shrink-0 mt-1"></i>
                                            <div>
                                                <h4 class="font-medium mb-3">배운 교훈</h4>
                                                <ul class="space-y-3">
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">다음에는 사전 계획을 더 철저히 하겠습니다.</span></li>
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">정기적인 체크포인트를 설정하여 진행 상황을 공유하겠습니다.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Reflection 2 -->
                        <div class="card p-6">
                            <div class="mb-6">
                                <div class="flex items-center justify-between mb-2">
                                    <h3 class="text-xl font-semibold">알고리즘 슬럼프 극복기</h3>
                                    <span class="badge badge-outline">2025년 7월</span>
                                </div>
                                <span class="badge badge-default">성장</span>
                            </div>

                            <div data-tab-group>
                                <div class="grid w-full grid-cols-3 bg-muted p-1 rounded-lg mb-6">
                                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground shadow-sm" data-tab-target="insights-2">깨달음</button>
                                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-muted-foreground" data-tab-target="challenges-2">도전</button>
                                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-muted-foreground" data-tab-target="lessons-2">교훈</button>
                                </div>

                                <div data-tab-content="insights-2" class="mt-6">
                                    <div class="space-y-4">
                                        <div class="flex items-start gap-3">
                                            <i data-lucide="lightbulb" class="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1"></i>
                                            <div>
                                                <h4 class="font-medium mb-3">주요 깨달음</h4>
                                                <ul class="space-y-3">
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">어려운 문제 앞에서 포기하지 않는 끈기가 중요합니다.</span></li>
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">매일 조금씩이라도 꾸준히 하는 것이 큰 발전을 만듭니다.</span></li>
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">다른 사람의 코드를 보고 배우는 것도 중요한 학습 방법입니다.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab-content="challenges-2" class="mt-6 hidden">
                                    <div class="space-y-4">
                                        <div class="flex items-start gap-3">
                                            <i data-lucide="alert-circle" class="h-5 w-5 text-red-500 flex-shrink-0 mt-1"></i>
                                            <div>
                                                <h4 class="font-medium mb-3">직면한 도전</h4>
                                                <ul class="space-y-3">
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">비슷한 유형의 문제를 반복적으로 틀렸습니다.</span></li>
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">동기부여를 유지하기 어려웠습니다.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-tab-content="lessons-2" class="mt-6 hidden">
                                    <div class="space-y-4">
                                        <div class="flex items-start gap-3">
                                            <i data-lucide="trending-up" class="h-5 w-5 text-green-500 flex-shrink-0 mt-1"></i>
                                            <div>
                                                <h4 class="font-medium mb-3">배운 교훈</h4>
                                                <ul class="space-y-3">
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">문제를 풀기 전에 충분히 고민하는 시간을 갖겠습니다.</span></li>
                                                    <li class="flex items-start gap-2"><span class="text-primary mt-1">•</span><span class="text-muted-foreground">스터디 그룹을 통해 동기부여를 유지하겠습니다.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/10">
                        <div class="flex items-start gap-4">
                            <i data-lucide="heart" class="h-6 w-6 text-red-500 flex-shrink-0 mt-1"></i>
                            <div>
                                <h3 class="font-semibold mb-3">나의 성찰 원칙</h3>
                                <div class="space-y-2 text-muted-foreground">
                                    <p><strong class="text-foreground">1. 정직하게</strong> - 실패와 약점을 솔직히 인정합니다.</p>
                                    <p><strong class="text-foreground">2. 구체적으로</strong> - 추상적이지 않고 구체적인 경험을 기록합니다.</p>
                                    <p><strong class="text-foreground">3. 실천적으로</strong> - 배운 것을 실제 행동으로 옮깁니다.</p>
                                    <p><strong class="text-foreground">4. 지속적으로</strong> - 정기적으로 돌아보고 기록합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initReflection() {
    // Re-use tab logic if needed, or just rely on the same class names as Hobbies
    // Since we use [data-tab-group] selector in initHobbies, we can just call that or duplicate the logic here if we want isolation.
    // Let's reuse the logic by making a shared initTabs function or just calling initHobbies logic again (it selects all groups).
    // Actually, initHobbies handles all [data-tab-group], so we just need to make sure it runs.
}
