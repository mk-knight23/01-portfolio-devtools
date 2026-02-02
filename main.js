// ============================================
// DEVTOOLS PORTFOLIO — MAIN JAVASCRIPT
// ============================================

// Project data — all 60 projects
const projects = [
    // Portfolios (01-08)
    { id: '01', name: 'portfolio-devtools', category: 'portfolios', tech: 'HTML/CSS/JS', description: 'DevTools portfolio — terminal aesthetic' },
    { id: '02', name: 'portfolio-fullstack', category: 'portfolios', tech: 'HTML/CSS/JS', description: 'Fullstack portfolio — SaaS product focus' },
    { id: '03', name: 'portfolio-frontend', category: 'portfolios', tech: 'HTML/CSS/JS', description: 'Frontend portfolio — motion-first visual' },
    { id: '04', name: 'portfolio-backend', category: 'portfolios', tech: 'HTML/CSS/JS', description: 'Backend portfolio — editorial text' },
    { id: '05', name: 'portfolio-frontend-ai', category: 'portfolios', tech: 'HTML/CSS/JS', description: 'Frontend AI portfolio — futuristic lab' },
    { id: '06', name: 'portfolio-senior-frontend', category: 'portfolios', tech: 'HTML/CSS/JS', description: 'Senior Frontend portfolio — Swiss minimal' },
    { id: '07', name: 'portfolio-indie-saas', category: 'portfolios', tech: 'HTML/CSS/JS', description: 'Indie SaaS portfolio — authentic hacker' },
    { id: '08', name: 'portfolio-ai-automation', category: 'portfolios', tech: 'HTML/CSS/JS', description: 'AI Automation portfolio — systems flow' },

    // Web Apps (09-24)
    { id: '09', name: 'web-geographic-explorer', category: 'web', tech: 'React/Leaflet', description: 'Interactive map exploration' },
    { id: '10', name: 'web-time-display', category: 'web', tech: 'React/Vite', description: 'Time visualization dashboard' },
    { id: '11', name: 'web-keyboard-practice', category: 'web', tech: 'React/TypeScript', description: 'Touch typing trainer with WPM' },
    { id: '12', name: 'web-editorial-blog', category: 'web', tech: 'React/Markdown', description: 'Content-focused blog platform' },
    { id: '13', name: 'web-brutalist-content', category: 'web', tech: 'HTML/CSS', description: 'Brutalist design showcase' },
    { id: '14', name: 'web-ai-research', category: 'web', tech: 'React/Python', description: 'AI research interface' },
    { id: '15', name: 'web-luxury-boutique', category: 'web', tech: 'React/Next.js', description: 'Premium e-commerce experience' },
    { id: '16', name: 'web-editorial-layouts', category: 'web', tech: 'React/CSS', description: 'Magazine-style layouts' },
    { id: '17', name: 'web-culinary-discovery', category: 'web', tech: 'React/API', description: 'Recipe and food exploration' },
    { id: '18', name: 'web-atmospheric-dashboard', category: 'web', tech: 'React/D3', description: 'Weather and environment data' },
    { id: '19', name: 'web-viral-creator', category: 'web', tech: 'React/Canvas', description: 'Social content creation tool' },
    { id: '20', name: 'web-career-navigator', category: 'web', tech: 'React/Node', description: 'Job search and career tool' },
    { id: '21', name: 'web-enterprise-input', category: 'web', tech: 'React/TS', description: 'Enterprise form system' },
    { id: '22', name: 'web-professional-showcase', category: 'web', tech: 'React/Vite', description: 'Professional portfolio template' },
    { id: '23', name: 'web-financial-printing', category: 'web', tech: 'React/PDF', description: 'Financial document generator' },
    { id: '24', name: 'web-sketch-studio', category: 'web', tech: 'Canvas/React', description: 'Digital drawing application' },

    // Games (25-34)
    { id: '25', name: 'game-neon-highway', category: 'games', tech: 'Canvas/JS', description: 'Neon racing game' },
    { id: '26', name: 'game-retro-vault', category: 'games', tech: 'HTML5/JS', description: 'Retro arcade collection' },
    { id: '27', name: 'game-world-net', category: 'games', tech: 'Phaser/JS', description: 'World exploration game' },
    { id: '28', name: 'game-squid-net', category: 'games', tech: 'Canvas/JS', description: 'Survival challenge game' },
    { id: '29', name: 'game-snake-net', category: 'games', tech: 'Canvas/JS', description: 'Classic snake reimagined' },
    { id: '30', name: 'game-dragon-surge', category: 'games', tech: 'Phaser/JS', description: 'Fantasy action RPG' },
    { id: '31', name: 'game-maze-net', category: 'games', tech: 'Canvas/JS', description: 'Procedural maze generator' },
    { id: '32', name: 'game-flux-arcade', category: 'games', tech: 'HTML5/JS', description: 'Arcade game platform' },
    { id: '33', name: 'game-aptitude-nexus', category: 'games', tech: 'React/JS', description: 'Skill assessment game' },
    { id: '34', name: 'game-sigma-nexus', category: 'games', tech: 'Canvas/JS', description: 'Strategy puzzle game' },

    // Tools (35-44)
    { id: '35', name: 'tool-quizflow-pdf-quiz-generator', category: 'tools', tech: 'React/PDF', description: 'PDF to quiz converter' },
    { id: '36', name: 'tool-vaultpass-secure-password-generator', category: 'tools', tech: 'Vue/Security', description: 'Secure password generator' },
    { id: '37', name: 'tool-text-to-speech', category: 'tools', tech: 'Web API', description: 'TTS utility tool' },
    { id: '38', name: 'tool-firebase-file-uploader', category: 'tools', tech: 'Firebase/JS', description: 'Cloud file management' },
    { id: '39', name: 'tool-firebase-image-uploader', category: 'tools', tech: 'Firebase/JS', description: 'Image upload and storage' },
    { id: '40', name: 'tool-react-image-uploader', category: 'tools', tech: 'React/Node', description: 'Image processing tool' },
    { id: '41', name: 'tool-firebase-auth', category: 'tools', tech: 'Firebase/Auth', description: 'Authentication boilerplate' },
    { id: '42', name: 'tool-facebook-login-ui', category: 'tools', tech: 'React/CSS', description: 'Social login component' },
    { id: '43', name: 'tool-agency-website-clone', category: 'tools', tech: 'HTML/CSS', description: 'Agency site template' },
    { id: '44', name: 'tool-github-desktop-guide', category: 'tools', tech: 'Markdown', description: 'Git workflow guide' },

    // Starters (45-60)
    { id: '45', name: 'starter-react-vercel', category: 'starters', tech: 'React/Vercel', description: 'Vercel deployment starter' },
    { id: '46', name: 'starter-ionic-react', category: 'starters', tech: 'Ionic/React', description: 'Mobile app starter' },
    { id: '47', name: 'starter-django', category: 'starters', tech: 'Django/Python', description: 'Django project template' },
    { id: '48', name: 'starter-flask', category: 'starters', tech: 'Flask/Python', description: 'Flask API starter' },
    { id: '49', name: 'starter-jamstack-blog', category: 'starters', tech: 'Next/MDX', description: 'JAMstack blog template' },
    { id: '50', name: 'starter-react-boilerplate', category: 'starters', tech: 'React/Vite', description: 'Production React setup' },
    { id: '51', name: 'starter-codesandbox', category: 'starters', tech: 'React/Sandbox', description: 'CodeSandbox template' },
    { id: '52', name: 'starter-hugo-blog', category: 'starters', tech: 'Hugo/Go', description: 'Hugo static site' },
    { id: '53', name: 'starter-docusaurus-docs', category: 'starters', tech: 'Docusaurus', description: 'Documentation site' },
    { id: '54', name: 'starter-gatsby-blog', category: 'starters', tech: 'Gatsby/React', description: 'Gatsby blog starter' },
    { id: '55', name: 'starter-angular-web', category: 'starters', tech: 'Angular/TS', description: 'Angular application' },
    { id: '56', name: 'starter-electron-desktop', category: 'starters', tech: 'Electron/JS', description: 'Desktop app starter' },
    { id: '57', name: 'starter-python-practice', category: 'starters', tech: 'Python', description: 'Python learning exercises' },
    { id: '58', name: 'starter-python-examples', category: 'starters', tech: 'Python', description: 'Python code examples' },
    { id: '59', name: 'starter-repo-demo', category: 'starters', tech: 'Git/GitHub', description: 'Repository demo template' },
    { id: '60', name: 'starter-cadwork-internship', category: 'starters', tech: 'CAD/Python', description: 'CAD automation tools' }
];

// ============================================
// DOM ELEMENTS
// ============================================
const projectsTbody = document.getElementById('projects-tbody');
const filterButtons = document.querySelectorAll('.filter-btn');
const shortcutsModal = document.getElementById('shortcuts-modal');
const shortcutsOverlay = document.getElementById('shortcuts-overlay');
const shortcutsClose = document.getElementById('shortcuts-close');
const scrollProgress = document.getElementById('scroll-progress');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// ============================================
// PROJECTS TABLE
// ============================================
function renderProjects(filter = 'all') {
    if (!projectsTbody) return;

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    projectsTbody.innerHTML = filteredProjects.map(project => `
        <tr data-category="${project.category}">
            <td class="col-num">${project.id}</td>
            <td class="col-name">${project.name}</td>
            <td class="col-category">
                <span class="category-badge">${project.category}</span>
            </td>
            <td class="col-tech">
                <div class="tech-stack">
                    ${project.tech.split('/').map(t => `<span class="tech-item">${t.trim()}</span>`).join('')}
                </div>
            </td>
            <td class="col-links">
                <a href="https://github.com/mk-knight23/${project.name}" target="_blank" rel="noopener" class="project-link" aria-label="View ${project.name} on GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                </a>
            </td>
        </tr>
    `).join('');
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================
function initFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.dataset.filter;
            renderProjects(filter);
        });
    });
}

// ============================================
// KEYBOARD SHORTCUTS MODAL
// ============================================
function toggleShortcutsModal(show) {
    if (!shortcutsModal) return;

    if (show) {
        shortcutsModal.classList.add('active');
        shortcutsModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    } else {
        shortcutsModal.classList.remove('active');
        shortcutsModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

function initShortcutsModal() {
    // Toggle with ? key
    document.addEventListener('keydown', (e) => {
        if (e.key === '?' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
            e.preventDefault();
            toggleShortcutsModal(!shortcutsModal.classList.contains('active'));
        }

        // Close with Escape
        if (e.key === 'Escape' && shortcutsModal.classList.contains('active')) {
            toggleShortcutsModal(false);
        }

        // Number keys for section navigation
        if (!shortcutsModal.classList.contains('active')) {
            const sections = ['hero', 'about', 'featured', 'projects', 'skills', 'resume', 'contact'];
            const num = parseInt(e.key);
            if (num >= 1 && num <= 6) {
                const section = document.getElementById(sections[num]);
                if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });

    // Close on overlay click
    shortcutsOverlay?.addEventListener('click', () => toggleShortcutsModal(false));
    shortcutsClose?.addEventListener('click', () => toggleShortcutsModal(false));
}

// ============================================
// SCROLL PROGRESS
// ============================================
function initScrollProgress() {
    if (!scrollProgress) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    // Mobile toggle
    navToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Arrow key navigation between sections
    const sections = Array.from(document.querySelectorAll('section[id]'));
    let currentSectionIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
        if (shortcutsModal.classList.contains('active')) return;

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Update current section index based on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        sections.forEach((section, index) => {
            if (scrollY >= section.offsetTop - 150 && scrollY < section.offsetTop + section.offsetHeight) {
                currentSectionIndex = index;
            }
        });
    });
}

// ============================================
// INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
// ============================================
function initRevealAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// ACTIVE NAV HIGHLIGHTING
// ============================================
function initActiveNavHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ============================================
// TERMINAL TYPING EFFECT
// ============================================
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing');

    typingElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';

        let i = 0;
        const type = () => {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        };

        // Start typing after a delay
        setTimeout(type, 1000);
    });
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    renderProjects();
    initFilters();
    initShortcutsModal();
    initScrollProgress();
    initNavigation();
    initRevealAnimations();
    initActiveNavHighlighting();
    initTypingEffect();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log('%c> DevTools Portfolio', 'color: #00ff41; font-family: monospace; font-size: 16px; font-weight: bold;');
console.log('%c> Kazi Musharraf — DevTools Engineer', 'color: #a0a0a0; font-family: monospace; font-size: 12px;');
console.log('%c> Press ? for keyboard shortcuts', 'color: #666; font-family: monospace; font-size: 11px;');
