// ==================== 教師經歷資料 ====================
const experiences = [
    {
        title: '資深程式設計講師',
        period: '2020 - 至今',
        description: '專注於教授現代網頁開發技術，包括 HTML、CSS、JavaScript 及各種前端框架。曾指導超過 500 名學生成功轉職成為軟體工程師。'
    },
    {
        title: '全端工程師',
        period: '2015 - 2020',
        description: '在知名科技公司擔任全端工程師，負責大型專案的前後端開發，累積豐富的實戰經驗。參與多個企業級應用程式的開發與維護。'
    },
    {
        title: '技術顧問',
        period: '2018 - 至今',
        description: '為多家新創公司提供技術諮詢服務，協助制定技術架構、進行程式碼審查，並提供團隊培訓。成功輔導 20+ 專案上線。'
    },
    {
        title: '開源專案貢獻者',
        period: '2013 - 至今',
        description: '活躍於開源社群，為多個知名專案貢獻程式碼。定期參與技術研討會並分享最新的技術趨勢與實踐經驗。'
    }
];

// ==================== 課程資料 ====================
const courses = [
    {
        title: '向上管理Managing Up成功輔佐上司',
        description: '學習如何有效輔佐上司，建立良好的向上溝通管道，提升職場影響力與工作效能。',
        image: 'images/向上管理Managing Up成功輔佐上司.png',
        sessions: [
            {
                batch: '第一梯次',
                date: '01/06(二)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8645'
            },
            {
                batch: '第二梯次',
                date: '07/01(三)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8646'
            }
        ]
    },
    {
        title: '企業流程標準化SOP建立與改善實務',
        description: '系統化學習標準作業流程的建立、優化與改善方法，提升企業營運效率與品質管理能力。',
        image: 'images/企業流程標準化SOP建立與改善實務.png',
        sessions: [
            {
                batch: '第一梯次',
                date: '03/06(五)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8648'
            },
            {
                batch: '第二梯次',
                date: '08/06(四)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8649'
            }
        ]
    },
    {
        title: '危機管理的原則與案例分享訓練',
        description: '透過實際案例分析，學習危機預防、應對與處理的關鍵技巧，強化組織韌性與應變能力。',
        image: 'images/危機管理的原則與案例分享訓練.png',
        sessions: [
            {
                batch: '第一梯次',
                date: '03/31(二)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8658'
            },
            {
                batch: '第二梯次',
                date: '07/21(二)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8659'
            }
        ]
    },
    {
        title: '簡報技巧與口才訓練',
        description: '掌握專業簡報技巧與口語表達能力，提升說服力與個人魅力，成為職場溝通高手。',
        image: 'images/簡報技巧與口才訓練.png',
        sessions: [
            {
                batch: '第一梯次',
                date: '04/10(五)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8671'
            },
            {
                batch: '第二梯次',
                date: '08/18(二)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8674'
            }
        ]
    },
    {
        title: '企業數位轉型策略展開實務',
        description: '深入了解數位轉型的核心策略與執行方法，協助企業掌握數位浪潮，開創新商業模式。',
        image: 'images/企業數位轉型策略展開實務.png',
        sessions: [
            {
                batch: '第一梯次',
                date: '04/29(三)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8652'
            },
            {
                batch: '第二梯次',
                date: '09/02(三)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8653'
            }
        ]
    },
    {
        title: '賽局理論－研究策略性互動的思考框架',
        description: '運用賽局理論分析競爭態勢，學習策略思維與決策技巧，提升商業判斷力。',
        image: 'images/賽局理論－研究策略性互動的思考框架.png',
        sessions: [
            {
                batch: '第一梯次',
                date: '05/05(二)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8681'
            },
            {
                batch: '第二梯次',
                date: '10/30(五)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8682'
            }
        ]
    },
    {
        title: '風險分析與危機管理培訓',
        description: '建立完整的風險識別與評估機制，強化危機處理能力，確保企業永續經營。',
        image: 'images/風險分析與危機管理培訓.png',
        sessions: [
            {
                batch: '第一梯次',
                date: '05/26(二)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8654'
            },
            {
                batch: '第二梯次',
                date: '10/02(五)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8655'
            }
        ]
    },
    {
        title: '企業運用人工智慧和大數據分析實務',
        description: '學習AI與大數據的實際應用，掌握數據驅動決策的關鍵技術，提升企業競爭優勢。',
        image: 'images/企業運用人工智慧和大數據分析實務.png',
        sessions: [
            {
                batch: '第一梯次',
                date: '06/10(三)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8656'
            },
            {
                batch: '第二梯次',
                date: '11/11(三)',
                time: '09:30~16:30',
                url: 'https://store.cpc.org.tw/Train/Contents/TC8657'
            }
        ]
    }
];

// ==================== 生成經歷區塊 ====================
function renderExperiences() {
    const aboutContent = document.getElementById('aboutContent');

    experiences.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';
        expItem.style.animationDelay = `${index * 0.1}s`;

        expItem.innerHTML = `
            <h3 class="experience-title">${exp.title}</h3>
            <p class="experience-period">${exp.period}</p>
            <p class="experience-description">${exp.description}</p>
        `;

        aboutContent.appendChild(expItem);
    });
}

// ==================== 生成課程卡片 ====================
function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');

    courses.forEach((course, index) => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.style.animationDelay = `${index * 0.1}s`;

        // 生成梯次資訊 HTML
        const sessionsHTML = course.sessions.map(session => `
            <div class="session-item">
                <div class="session-header">
                    <span class="session-batch">${session.batch}</span>
                    <span class="session-date">📅 ${session.date}</span>
                </div>
                <div class="session-details">
                    <span class="session-time">⏰ ${session.time}</span>
                    <a href="${session.url}" target="_blank" class="session-link">立即報名</a>
                </div>
            </div>
        `).join('');

        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}" />
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-sessions">
                    ${sessionsHTML}
                </div>
            </div>
        `;

        coursesGrid.appendChild(courseCard);
    });
}

// ==================== 平滑滾動效果 ====================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== 滾動動畫效果 ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 觀察所有需要動畫的元素
    const animatedElements = document.querySelectorAll('.experience-item, .course-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==================== 導航列滾動效果 ====================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
}

// ==================== 初始化所有功能 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 生成內容
    // renderExperiences(); // 已改為直接在 HTML 中顯示講師介紹
    renderCourses();

    // 初始化功能
    initSmoothScroll();
    initNavbarScroll();

    // 延遲初始化滾動動畫，確保元素已渲染
    setTimeout(() => {
        initScrollAnimations();
    }, 100);

    console.log('✅ 網站已成功載入！');
    console.log(`📚 共載入 ${experiences.length} 項經歷`);
    console.log(`🎓 共載入 ${courses.length} 門課程`);
});
