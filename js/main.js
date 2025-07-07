/**
 * The Witcher IV Landing Page - JavaScript Module
 * Handles all interactive functionality
 */

class WitcherLandingPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAnimations();
        this.initParallax();
        this.initNavbar();
        this.initSmoothScrolling();
        this.initLoadingAnimations();
    }

    setupEventListeners() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }

        // Window events
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
        window.addEventListener('resize', this.throttle(this.handleResize.bind(this), 100));
        
        // Intersection Observer for animations
        this.setupIntersectionObserver();
    }

    onDOMReady() {
        console.log('The Witcher IV Landing Page loaded successfully');
        this.initializeComponents();
    }

    initializeComponents() {
        // Add GPU acceleration to animated elements
        this.addGPUAcceleration();
        
        // Initialize lazy loading for images
        this.initLazyLoading();
        
        // Add loading states
        this.removeLoadingStates();
    }

    /**
     * Smooth scrolling for navigation links
     */
    initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    this.updateActiveNavLink(targetId);
                }
            });
        });
    }

    /**
     * Update active navigation link
     */
    updateActiveNavLink(activeId) {
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === activeId) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Parallax effect for hero section
     */
    initParallax() {
        this.parallaxElements = document.querySelectorAll('.parallax-bg');
    }

    handleParallax() {
        if (window.innerWidth > 768) { // Only on desktop
            const scrolled = window.pageYOffset;
            
            this.parallaxElements.forEach(element => {
                const speed = scrolled * 0.5;
                element.style.transform = `translate3d(0, ${speed}px, 0)`;
            });
        }
    }

    /**
     * Navbar scroll effect
     */
    initNavbar() {
        this.navbar = document.querySelector('nav');
        this.scrollThreshold = 100;
    }

    handleNavbarScroll() {
        if (!this.navbar) return;

        if (window.scrollY > this.scrollThreshold) {
            this.navbar.classList.add('navbar-scrolled');
        } else {
            this.navbar.classList.remove('navbar-scrolled');
        }
    }

    /**
     * Handle scroll events
     */
    handleScroll() {
        this.handleParallax();
        this.handleNavbarScroll();
        this.updateScrollProgress();
    }

    /**
     * Handle resize events
     */
    handleResize() {
        // Recalculate parallax on resize
        if (window.innerWidth <= 768) {
            this.parallaxElements.forEach(element => {
                element.style.transform = '';
            });
        }
    }

    /**
     * Initialize animations
     */
    initAnimations() {
        // Add staggered animation delays to cards
        const cards = document.querySelectorAll('.card-hover');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }

    /**
     * Initialize loading animations with Intersection Observer
     */
    initLoadingAnimations() {
        const elementsToAnimate = document.querySelectorAll('section, .card-hover, .news-card');
        
        elementsToAnimate.forEach(element => {
            element.classList.add('loading');
        });
    }

    /**
     * Intersection Observer for scroll animations
     */
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    entry.target.classList.remove('loading');
                }
            });
        }, options);

        // Observe elements after a short delay
        setTimeout(() => {
            const elementsToObserve = document.querySelectorAll('.loading');
            elementsToObserve.forEach(element => {
                this.observer.observe(element);
            });
        }, 100);
    }

    /**
     * Add GPU acceleration to animated elements
     */
    addGPUAcceleration() {
        const animatedElements = document.querySelectorAll('.card-hover, .parallax-bg, .btn-primary, .btn-secondary');
        
        animatedElements.forEach(element => {
            element.classList.add('gpu-accelerated');
        });
    }

    /**
     * Initialize lazy loading for images
     */
    initLazyLoading() {
        const images = document.querySelectorAll('img[src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    /**
     * Remove loading states after initial load
     */
    removeLoadingStates() {
        setTimeout(() => {
            const loadingElements = document.querySelectorAll('.loading');
            loadingElements.forEach(element => {
                element.classList.add('loaded');
            });
        }, 300);
    }

    /**
     * Update scroll progress (for potential progress bar)
     */
    updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        
        // Dispatch custom event for scroll progress
        window.dispatchEvent(new CustomEvent('scrollProgress', {
            detail: { progress: scrollPercent }
        }));
    }

    /**
     * Throttle function for performance
     */
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
        }
    }

    /**
     * Utility function for element visibility
     */
    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    /**
     * Public method to destroy instance
     */
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }
}

// Additional utility functions

/**
 * Video player functionality (for when trailer is implemented)
 */
class VideoPlayer {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.init();
    }

    init() {
        if (!this.container) return;
        
        // Setup video player controls
        this.setupControls();
    }

    setupControls() {
        // Implementation for custom video controls
        console.log('Video player initialized');
    }
}

/**
 * Newsletter subscription handler
 */
class NewsletterHandler {
    constructor() {
        this.init();
    }

    init() {
        const forms = document.querySelectorAll('[data-newsletter-form]');
        forms.forEach(form => {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription handled');
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Main application
    const app = new WitcherLandingPage();
    
    // Additional components
    const videoPlayer = new VideoPlayer('[data-video-player]');
    const newsletter = new NewsletterHandler();
    
    // Make app globally accessible for debugging
    window.WitcherApp = app;
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WitcherLandingPage, VideoPlayer, NewsletterHandler };
}
