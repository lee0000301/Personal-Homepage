export function renderHobbies() {
    return `
        <section id="hobbies" class="py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <header class="text-center mb-12">
                        <span class="badge badge-secondary mb-4">Hobbies</span>
                        <h2 class="text-3xl font-bold mb-4">취미 생활</h2>
                        <p class="text-muted-foreground">학업 외 시간에 즐기는 활동들</p>
                    </header>

                    <div class="mb-8" data-tab-group>
                        <div class="grid w-full max-w-md mx-auto grid-cols-2 bg-muted p-1 rounded-lg mb-8">
                            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground shadow-sm" data-tab-target="grid">그리드 뷰</button>
                            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-muted-foreground" data-tab-target="list">리스트 뷰</button>
                        </div>

                        <div data-tab-content="grid" class="mt-8">
                            <div class="grid md:grid-cols-2 gap-6">
                                <!-- Hobby 1 -->
                                <div class="card overflow-hidden hover:shadow-lg transition-shadow">
                                    <div class="aspect-video overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5NTkwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="코딩" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                                    </div>
                                    <div class="p-6">
                                        <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 mb-2">
                                            <i data-lucide="code-2" class="h-5 w-5 text-primary"></i> 코딩
                                        </h3>
                                        <p class="text-sm text-muted-foreground mb-4">프로젝트 개발 및 개인 공부</p>
                                        <div class="flex flex-wrap gap-2">
                                            <span class="badge badge-outline">Algorithm</span>
                                            <span class="badge badge-outline">Web Dev</span>
                                            <span class="badge badge-outline">Open Source</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Hobby 2 -->
                                <div class="card overflow-hidden hover:shadow-lg transition-shadow">
                                    <div class="aspect-video overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW18ZW58MXx8fHwxNzU5NjE3NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="운동" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                                    </div>
                                    <div class="p-6">
                                        <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 mb-2">
                                            <i data-lucide="dumbbell" class="h-5 w-5 text-primary"></i> 운동
                                        </h3>
                                        <p class="text-sm text-muted-foreground mb-4">헬스장에서 운동하기</p>
                                        <div class="flex flex-wrap gap-2">
                                            <span class="badge badge-outline">Health</span>
                                            <span class="badge badge-outline">Fitness</span>
                                            <span class="badge badge-outline">Strength</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Hobby 3 -->
                                <div class="card overflow-hidden hover:shadow-lg transition-shadow">
                                    <div class="aspect-video overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcmVhZGluZ3xlbnwxfHx8fDE3NTk2NzA0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="독서" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                                    </div>
                                    <div class="p-6">
                                        <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 mb-2">
                                            <i data-lucide="book-open" class="h-5 w-5 text-primary"></i> 독서
                                        </h3>
                                        <p class="text-sm text-muted-foreground mb-4">자서전 읽기, 전공 서적 읽기</p>
                                        <div class="flex flex-wrap gap-2">
                                            <span class="badge badge-outline">Learning</span>
                                            <span class="badge badge-outline">Relaxation</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Hobby 4 -->
                                <div class="card overflow-hidden hover:shadow-lg transition-shadow">
                                    <div class="aspect-video overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBkZXNrfGVufDF8fHx8MTc1OTY3MDQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080" alt="게임" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                                    </div>
                                    <div class="p-6">
                                        <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 mb-2">
                                            <i data-lucide="gamepad-2" class="h-5 w-5 text-primary"></i> 게임
                                        </h3>
                                        <p class="text-sm text-muted-foreground mb-4">롤, 오버워치</p>
                                        <div class="flex flex-wrap gap-2">
                                            <span class="badge badge-outline">Strategy</span>
                                            <span class="badge badge-outline">Problem Solving</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-tab-content="list" class="mt-8 hidden">
                            <div class="space-y-4">
                                <!-- List items -->
                                <div class="card overflow-hidden">
                                    <div class="flex flex-col md:flex-row">
                                        <div class="md:w-48 h-48 md:h-auto flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5NTkwOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080" class="w-full h-full object-cover">
                                        </div>
                                        <div class="flex-1 p-6">
                                            <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 mb-2">
                                                <i data-lucide="code-2" class="h-5 w-5 text-primary"></i> 코딩
                                            </h3>
                                            <p class="text-sm text-muted-foreground mb-4">알고리즘 문제 풀이와 개인 프로젝트 개발</p>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="badge badge-outline">Algorithm</span>
                                                <span class="badge badge-outline">Web Dev</span>
                                                <span class="badge badge-outline">Open Source</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card overflow-hidden">
                                    <div class="flex flex-col md:flex-row">
                                        <div class="md:w-48 h-48 md:h-auto flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW18ZW58MXx8fHwxNzU5NjE3NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080" class="w-full h-full object-cover">
                                        </div>
                                        <div class="flex-1 p-6">
                                            <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 mb-2">
                                                <i data-lucide="dumbbell" class="h-5 w-5 text-primary"></i> 운동
                                            </h3>
                                            <p class="text-sm text-muted-foreground mb-4">건강한 신체를 위해 꾸준히 운동하기</p>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="badge badge-outline">Health</span>
                                                <span class="badge badge-outline">Fitness</span>
                                                <span class="badge badge-outline">Strength</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card overflow-hidden">
                                    <div class="flex flex-col md:flex-row">
                                        <div class="md:w-48 h-48 md:h-auto flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcmVhZGluZ3xlbnwxfHx8fDE3NTk2NzA0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080" class="w-full h-full object-cover">
                                        </div>
                                        <div class="flex-1 p-6">
                                            <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 mb-2">
                                                <i data-lucide="book-open" class="h-5 w-5 text-primary"></i> 독서
                                            </h3>
                                            <p class="text-sm text-muted-foreground mb-4">기술 서적과 소설 읽기</p>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="badge badge-outline">Learning</span>
                                                <span class="badge badge-outline">Relaxation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card overflow-hidden">
                                    <div class="flex flex-col md:flex-row">
                                        <div class="md:w-48 h-48 md:h-auto flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBkZXNrfGVufDF8fHx8MTc1OTY3MDQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080" class="w-full h-full object-cover">
                                        </div>
                                        <div class="flex-1 p-6">
                                            <h3 class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 mb-2">
                                                <i data-lucide="gamepad-2" class="h-5 w-5 text-primary"></i> 게임
                                            </h3>
                                            <p class="text-sm text-muted-foreground mb-4">전략 게임과 퍼즐 게임</p>
                                            <div class="flex flex-wrap gap-2">
                                                <span class="badge badge-outline">Strategy</span>
                                                <span class="badge badge-outline">Problem Solving</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-8 p-6">
                        <h3 class="text-xl font-semibold mb-4">취미 활동 시간 분배</h3>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4">
                                <div class="w-32">코딩</div>
                                <div class="flex-1 bg-secondary rounded-full h-6 overflow-hidden">
                                    <div class="bg-primary h-full" style="width: 80%"></div>
                                </div>
                                <div class="w-16 text-right text-sm text-muted-foreground">80%</div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-32">운동</div>
                                <div class="flex-1 bg-secondary rounded-full h-6 overflow-hidden">
                                    <div class="bg-primary h-full" style="width: 15%"></div>
                                </div>
                                <div class="w-16 text-right text-sm text-muted-foreground">15%</div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-32">독서</div>
                                <div class="flex-1 bg-secondary rounded-full h-6 overflow-hidden">
                                    <div class="bg-primary h-full" style="width: 3%"></div>
                                </div>
                                <div class="w-16 text-right text-sm text-muted-foreground">3%</div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-32">게임</div>
                                <div class="flex-1 bg-secondary rounded-full h-6 overflow-hidden">
                                    <div class="bg-primary h-full" style="width: 2%"></div>
                                </div>
                                <div class="w-16 text-right text-sm text-muted-foreground">2%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initHobbies() {
    // Tab logic
    const tabGroups = document.querySelectorAll('[data-tab-group]');
    tabGroups.forEach(group => {
        const triggers = group.querySelectorAll('[data-tab-target]');
        const contents = group.querySelectorAll('[data-tab-content]');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const target = trigger.getAttribute('data-tab-target');

                // Update triggers
                triggers.forEach(t => {
                    if (t.getAttribute('data-tab-target') === target) {
                        t.classList.remove('text-muted-foreground');
                        t.classList.add('bg-background', 'text-foreground', 'shadow-sm');
                    } else {
                        t.classList.add('text-muted-foreground');
                        t.classList.remove('bg-background', 'text-foreground', 'shadow-sm');
                    }
                });

                // Update contents
                contents.forEach(c => {
                    if (c.getAttribute('data-tab-content') === target) {
                        c.classList.remove('hidden');
                    } else {
                        c.classList.add('hidden');
                    }
                });
            });
        });
    });
}
