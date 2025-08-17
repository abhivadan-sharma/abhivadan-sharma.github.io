// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('theme-toggle');
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.bindEvents();
    }

    bindEvents() {
        this.themeToggle?.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateToggleIcon();
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateToggleIcon() {
        if (this.themeToggle) {
            const icon = this.themeToggle.querySelector('.theme-toggle-icon');
            icon.textContent = this.theme === 'light' ? '🌙' : '☀️';
        }
    }
}

// Smooth Scrolling and Navigation
class NavigationManager {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section');
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupIntersectionObserver();
    }

    bindEvents() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
            });
        });
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerOffset = 100;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.updateActiveNavLink(entry.target.id);
                }
            });
        }, options);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    updateActiveNavLink(sectionId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

// Scroll to Top Button
class ScrollToTopManager {
    constructor() {
        this.scrollButton = document.getElementById('scroll-to-top');
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleScroll();
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        this.scrollButton?.addEventListener('click', () => {
            this.scrollToTop();
        });
    }

    handleScroll() {
        if (this.scrollButton) {
            if (window.pageYOffset > 300) {
                this.scrollButton.classList.add('visible');
            } else {
                this.scrollButton.classList.remove('visible');
            }
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Animation on Scroll
class AnimationManager {
    constructor() {
        this.animatedElements = document.querySelectorAll('.card, .section-title');
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Performance Optimization
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.preloadCriticalResources();
    }

    setupLazyLoading() {
        // Lazy load images
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }

    preloadCriticalResources() {
        // Preload critical CSS and fonts
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });
    }
}

// Mobile Menu Handler (for smaller screens)
class MobileMenuManager {
    constructor() {
        this.navigation = document.getElementById('navigation');
        this.init();
    }

    init() {
        this.handleResize();
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    handleResize() {
        if (window.innerWidth <= 768) {
            this.setupMobileMenu();
        } else {
            this.destroyMobileMenu();
        }
    }

    setupMobileMenu() {
        // Add mobile-specific functionality if needed
        if (this.navigation) {
            this.navigation.classList.add('mobile-nav');
        }
    }

    destroyMobileMenu() {
        if (this.navigation) {
            this.navigation.classList.remove('mobile-nav');
        }
    }
}

// Utility Functions
const Utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Add smooth transitions when elements enter viewport
    addEntranceAnimation(element, delay = 0) {
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }, delay);
    }
};

// Error Handling
class ErrorHandler {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('error', (e) => {
            console.error('JavaScript error:', e.error);
            // Could send to analytics service
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            // Could send to analytics service
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new ThemeManager();
    new NavigationManager();
    new ScrollToTopManager();
    new AnimationManager();
    new PerformanceManager();
    new MobileMenuManager();
    new ErrorHandler();

    // Add entrance animations to key elements
    const headerContent = document.querySelector('.header-content');
    const navigationElement = document.querySelector('.navigation');
    
    if (headerContent) {
        Utils.addEntranceAnimation(headerContent, 100);
    }
    
    if (navigationElement) {
        Utils.addEntranceAnimation(navigationElement, 200);
    }

    // Add staggered animations to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        Utils.addEntranceAnimation(card, 300 + (index * 100));
    });

    console.log('Portfolio site initialized successfully! 🚀');
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}