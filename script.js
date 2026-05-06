// انتخاب المان‌ها
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const langToggle = document.getElementById("lang-toggle");
const langLabel = langToggle.querySelector(".lang-label");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const backToTop = document.getElementById("back-to-top");
const yearSpan = document.getElementById("year");
const typedElement = document.querySelector(".typed-text");

// سال فوتر
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ---- تم تاریک/روشن ----
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeIcon.textContent = "☀";
} else {
    body.classList.add("dark-theme");
    themeIcon.textContent = "☾";
}

themeToggle.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-theme");
    body.classList.toggle("dark-theme", !isDark);
    body.classList.toggle("light-theme", isDark);
    themeIcon.textContent = isDark ? "☀" : "☾";
    localStorage.setItem("theme", isDark ? "light" : "dark");
});

// ---- سوییچ زبان (FA / EN) ----
let currentLang = localStorage.getItem("lang") || "fa";

const translations = {
    en: {
        "logo.role": "Frontend Developer",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.resume": "Resume",
        "nav.contact": "Contact",
        "hero.kicker": "Hi, I am",
        "hero.typed": "Frontend Developer & Computer Engineering Student",
        "hero.desc":
            "I'm a computer engineering student and frontend developer who loves building clean, fast and modern user interfaces for the web.",
        "hero.ctaPrimary": "View Projects",
        "hero.ctaSecondary": "Contact Me",
        "hero.statProjects": "Practice mini-projects",
        "hero.statSemester": "University semesters",
        "hero.statAvailability": "Available for remote work",
        "hero.metaRoleLabel": "Role",
        "hero.metaRole": "Front-End Developer",
        "hero.metaLocationLabel": "Location",
        "hero.metaLocation": "Iran · Remote",
        "hero.metaFocusLabel": "Focus",
        "hero.metaFocus": "JavaScript, UI, Performance",
        "about.title": "About Me",
        "about.subtitle":
            "Combining computer engineering knowledge with hands-on experience in web development.",
        "about.p1":
            "I'm Shahab, a 4th semester computer engineering student who enjoys frontend development. I focus on building clean, maintainable and responsive UIs with pure HTML, CSS and JavaScript.",
        "about.p2":
            "My short-term goal is to collaborate with teams and clients who care about code quality, modern design and clear communication. This website is an example of the standards I try to follow in my projects.",
        "about.highlight1": "Focused on building from scratch, no pre-made templates.",
        "about.highlight2": "Special attention to UX details and responsiveness.",
        "about.highlight3": "Continuous learning and skill improvement.",
        "skills.title": "Skills",
        "skills.subtitle": "My current stack and technologies I have worked with.",
        "skills.responsive": "Responsive design",
        "skills.ui": "Modern UI design",
        "skills.toolsTitle": "Tools",
        "skills.design": "Basic UI design with Figma / similar tools",
        "skills.frontendTitle": "Frontend",
        "skills.softTitle": "Soft Skills",
        "skills.communication": "Clear communication with clients",
        "skills.problemSolving": "Problem solving & debugging",
        "skills.selfLearning": "Self-learning and research",
        "skills.time": "Managing time for small projects",
        "projects.title": "Projects",
        "projects.subtitle":
            "Some small projects and practice work I've done to improve my skills.",
        "projects.p1.title": "Personal Landing Page",
        "projects.p1.desc":
            "A clean and responsive landing page with focus on typography and correct HTML structure for SEO.",
        "projects.p1.role": "Role: Design + Development",
        "projects.p2.title": "Minimal To-Do Page",
        "projects.p2.desc":
            "A simple to-do app built with vanilla JavaScript, including add, remove and LocalStorage support.",
        "projects.p2.role": "Role: Logic & UI implementation",
        "projects.p3.title": "Multi-section Practice Site",
        "projects.p3.desc":
            "Practice site with multiple sections (About, Services, Contact) focused on grid, flex and breakpoints.",
        "projects.p3.role": "Role: Layout design",
        "resume.title": "Resume & Path",
        "resume.subtitle":
            "A short look at my academic and practical journey in computer engineering and web.",
        "resume.eduLabel": "Education",
        "resume.eduTitle": "Computer Engineering · BSc",
        "resume.eduDesc":
            "Started studying computer engineering and at the same time learning HTML, CSS and JavaScript to enter the job market.",
        "resume.selfLabel": "Self-Study",
        "resume.selfTitle": "Frontend Self-Study",
        "resume.selfDesc":
            "Working on practice projects, reading official docs and watching online courses to strengthen fundamentals.",
        "resume.futureLabel": "Next",
        "resume.futureTitle": "Teamwork & Freelance",
        "resume.futureMeta": "Short-term goal",
        "resume.futureDesc":
            "Collaborating on real projects, improving portfolio quality and building a reliable CV for clients.",
        "resume.summaryTitle": "Resume Summary",
        "resume.summaryDesc":
            "Right now I'm working on small practice projects and I'm ready to join real web projects as a frontend developer. My focus is on clean code, proper structure and smooth user experience.",
        "resume.highlight1":
            "Familiar with basic software engineering concepts and algorithms.",
        "resume.highlight2": "Experience with Git and GitHub for version control.",
        "resume.highlight3":
            "Ability to communicate with clients and understand project requirements.",
        "resume.ctaContact": "Available · Contact Me",
        "contact.title": "Contact Me",
        "contact.subtitle":
            "If you have a project in mind or want to collaborate, I'd be happy to talk.",
        "contact.preferTitle": "Preferred contact methods",
        "contact.locationLabel": "Location",
        "contact.location": "Iran · Remote",
        "contact.note":
            "I usually reply the same day. For project collaborations, please share the scope, deadline and rough budget.",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Message",
        "contact.form.submit": "Send (Demo – no backend yet)",
        "contact.form.note":
            "This form is not connected to a backend yet; you can use email for direct contact.",
        "footer.text":
            "Built with pure HTML, CSS and JavaScript; no pre-made templates.",
        "footer.linksTitle": "Quick Links",
        "footer.projects": "Projects",
        "footer.resume": "Resume",
        "footer.contact": "Contact",
        "footer.statusTitle": "Status",
        "footer.status":
            "Currently available for freelance and remote frontend collaborations."
    },
    fa: {
        // برای سادگی، متن فارسی همان چیزی است که در HTML نوشتیم
    }
};

function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = translations[lang]?.[key];
        if (value) {
            el.textContent = value;
        }
    });

    if (lang === "en") {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        langLabel.textContent = "EN";
    } else {
        document.documentElement.lang = "fa";
        document.documentElement.dir = "rtl";
        langLabel.textContent = "FA";
    }

    localStorage.setItem("lang", lang);
}

// اعمال زبان ذخیره‌شده
applyLanguage(currentLang);

// رویداد دکمه زبان
langToggle.addEventListener("click", () => {
    currentLang = currentLang === "fa" ? "en" : "fa";
    applyLanguage(currentLang);
});

// ---- منوی موبایل ----
mobileMenuToggle.addEventListener("click", () => {
    mobileMenuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("glass");
    mobileMenu.classList.toggle("open");
});

mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        mobileMenuToggle.classList.remove("active");
        mobileMenu.classList.remove("open");
        mobileMenu.classList.remove("glass");
    }
});

// ---- دکمه برگشت به بالا ----
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---- افکت تایپ شدن متن ----
const typedStrings = {
    fa: [
        "دانشجوی مهندسی کامپیوتر",
        "توسعه‌دهنده فرانت‌اند",
        "علاقه‌مند به UI مدرن و عملکرد بالا"
    ],
    en: [
        "Computer Engineering Student",
        "Frontend Developer",
        "Passionate about modern UI & performance"
    ]
};

let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingInterval;

function typeLoop() {
    const arr = typedStrings[currentLang] || typedStrings.fa;
    const current = arr[typedIndex % arr.length];

    if (!isDeleting) {
        charIndex++;
        if (typedElement) typedElement.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1200);
            return;
        }
    } else {
        charIndex--;
        if (typedElement) typedElement.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            typedIndex++;
        }
    }

    const delay = isDeleting ? 40 : 70;
    typingInterval = setTimeout(typeLoop, delay);
}

// شروع افکت تایپ بعد از لود
window.addEventListener("load", () => {
    typeLoop();
});

// هنگام تغییر زبان، افکت تایپ را ریست کن
langToggle.addEventListener("click", () => {
    clearTimeout(typingInterval);
    typedIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeLoop();
});

// ---- ذرات پس‌زمینه (Canvas) ----
const canvas = document.getElementById("bg-particles");
const ctx = canvas.getContext("2d");

let particles = [];
const numParticles = 60;
let width, height;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createParticles() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            size: Math.random() * 2 + 0.5,
            alpha: Math.random() * 0.6 + 0.1
        });
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `rgba(34, 211, 238, ${p.alpha})`);
        gradient.addColorStop(0.6, `rgba(124, 58, 237, ${p.alpha * 0.6})`);
        gradient.addColorStop(1, "rgba(15, 23, 42, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(drawParticles);
}

createParticles();
drawParticles();
