// ============================================
// TENHA PAZ - Landing Page Scripts
// Modern UI with Animations
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initFAQ();
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimations();
    initDownloadButton();
    initParallaxEffects();
    initCounterAnimation();
});

// ============================================
// FAQ ACCORDION
// ============================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items with animation
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================

function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;

                if (currentScrollY > 50) {
                    header.style.background = 'rgba(15, 15, 26, 0.95)';
                    header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
                } else {
                    header.style.background = 'rgba(15, 15, 26, 0.8)';
                    header.style.boxShadow = 'none';
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });

            ticking = true;
        }
    });
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Add stagger effect for grid items
                if (entry.target.dataset.stagger) {
                    const delay = parseFloat(entry.target.dataset.stagger) * 100;
                    entry.target.style.transitionDelay = `${delay}ms`;
                }
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(
        '.problem-card, .mode-card, .step, .faq-item, .solution-list li'
    );

    animatedElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.dataset.stagger = index % 6; // Reset stagger every 6 items
        observer.observe(el);
    });

    // Section headers
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
        header.classList.add('animate-on-scroll');
        observer.observe(header);
    });
}

// ============================================
// PARALLAX EFFECTS
// ============================================

function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    const phoneMockup = document.querySelector('.phone-mockup');

    if (!hero || !phoneMockup) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                const heroHeight = hero.offsetHeight;

                if (scrolled < heroHeight) {
                    const parallaxValue = scrolled * 0.3;
                    phoneMockup.style.transform = `translateY(${parallaxValue}px)`;
                }

                ticking = false;
            });

            ticking = true;
        }
    });
}

// ============================================
// COUNTER ANIMATION
// ============================================

function initCounterAnimation() {
    const bigNumber = document.querySelector('.big-number');
    if (!bigNumber) return;

    const targetNumber = parseInt(bigNumber.textContent);
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCounter(bigNumber, targetNumber);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(bigNumber);
}

function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutExpo)
        const easeProgress = 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(start + (target - start) * easeProgress);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// ============================================
// DOWNLOAD BUTTON
// ============================================

function initDownloadButton() {
    const downloadBtn = document.getElementById('download-btn');
    const allDownloadBtns = document.querySelectorAll('a[href="#download"], a[href="#"]');

    allDownloadBtns.forEach(btn => {
        if (btn.getAttribute('href') === '#' && btn.id === 'download-btn') {
            btn.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#') {
                    e.preventDefault();
                    showComingSoonMessage();
                }
            });
        }
    });
}

function showComingSoonMessage() {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">🚀</span>
            <span class="toast-text">Em breve na Play Store! Fique ligado.</span>
        </div>
    `;

    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
        color: white;
        padding: 16px 32px;
        border-radius: 16px;
        box-shadow:
            0 10px 40px rgba(139, 92, 246, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        z-index: 9999;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        backdrop-filter: blur(10px);
    `;

    const toastContent = toast.querySelector('.toast-content');
    toastContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
    `;

    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Animate out after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(100px)';

        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// ============================================
// UTILITY: Update Play Store Link
// ============================================

function updatePlayStoreLink(playStoreUrl) {
    const downloadBtn = document.getElementById('download-btn');
    const headerBtn = document.querySelector('.btn-header');

    if (downloadBtn) downloadBtn.href = playStoreUrl;
    if (headerBtn) headerBtn.href = playStoreUrl;

    console.log('✅ Link da Play Store atualizado com sucesso!');
}

// Expose globally
window.updatePlayStoreLink = updatePlayStoreLink;

// ============================================
// MAGNETIC BUTTON EFFECT (Optional)
// ============================================

function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

// Initialize magnetic effect
initMagneticButtons();
