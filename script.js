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
        title: 'JavaScript 基礎入門',
        description: '從零開始學習 JavaScript，涵蓋變數、函式、物件導向等核心概念，適合完全沒有程式基礎的初學者。',
        duration: '8 週',
        level: '初級',
        icon: '📚'
    },
    {
        title: 'React 前端開發',
        description: '深入學習 React 框架，包括組件設計、狀態管理、Hooks 使用等進階技巧，打造現代化的單頁應用程式。',
        duration: '12 週',
        level: '中級',
        icon: '⚛️'
    },
    {
        title: '響應式網頁設計',
        description: '掌握 RWD 設計原則，學習使用 Flexbox、Grid 等現代 CSS 技術，創建適配各種裝置的網頁介面。',
        duration: '6 週',
        level: '初級',
        icon: '📱'
    },
    {
        title: 'Node.js 後端開發',
        description: '學習使用 Node.js 建立後端 API，包括資料庫操作、身份驗證、RESTful API 設計等實用技能。',
        duration: '10 週',
        level: '中級',
        icon: '🚀'
    },
    {
        title: '全端專案實戰',
        description: '結合前後端技術，從需求分析到部署上線，完整打造一個真實的全端應用程式專案。',
        duration: '16 週',
        level: '高級',
        icon: '💻'
    },
    {
        title: 'Git 版本控制',
        description: '學習 Git 的核心概念與團隊協作流程，掌握分支管理、衝突解決等實用技巧。',
        duration: '4 週',
        level: '初級',
        icon: '🔧'
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

    // 定義巴洛克風格漸層色組合
    const gradients = [
        'linear-gradient(135deg, #6B1F3C 0%, #8B0000 100%)',
        'linear-gradient(135deg, #8B0000 0%, #4A2511 100%)',
        'linear-gradient(135deg, #4A2511 0%, #6B1F3C 100%)',
        'linear-gradient(135deg, #6B1F3C 0%, #2C1810 100%)',
        'linear-gradient(135deg, #8B0000 0%, #6B1F3C 100%)',
        'linear-gradient(135deg, #4A2511 0%, #8B0000 100%)'
    ];

    courses.forEach((course, index) => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.style.animationDelay = `${index * 0.1}s`;

        courseCard.innerHTML = `
            <div class="course-image" style="background: ${gradients[index % gradients.length]}">
                ${course.icon}
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <span class="course-duration">⏱️ ${course.duration}</span>
                    <span class="course-level">${course.level}</span>
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
            navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
        } else {
            navbar.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)';
        }

        lastScroll = currentScroll;
    });
}

// ==================== 初始化所有功能 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 生成內容
    renderExperiences();
    renderCourses();

    // 初始化功能
    initSmoothScroll();
    initNavbarScroll();

    // 延遲初始化滾動動畫，確保元素已渲染
    setTimeout(() => {
        initScrollAnimations();
    }, 100);

    console.log('✅ 巴洛克風格網站已成功載入！');
    console.log(`📚 共載入 ${experiences.length} 項經歷`);
    console.log(`🎓 共載入 ${courses.length} 門課程`);
    console.log('🎨 風格：華麗巴洛克');
});
