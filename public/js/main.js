/**
 * DESIGNER.EXE - Main JavaScript
 * Handles interactions, animations, and form submissions
 */

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Close mobile menu on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function () {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.classList.remove('active');
        }
    });
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.service-card, .project-card').forEach(el => {
    observer.observe(el);
});

// Contact Form Submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Show loading state
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="material-symbols-outlined animate-spin">hourglass_bottom</span> SENDING...';
    button.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset button state
        button.innerHTML = originalText;
        button.disabled = false;
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
        form.insertBefore(successMsg, form.firstChild);
        
        // Reset form
        form.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMsg.remove();
        }, 5000);
    }, 1500);
}

// Header Shadow on Scroll
const header = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('shadow-sm');
    } else {
        header.classList.remove('shadow-sm');
    }
});

// Active Navigation Link Tracking
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.classList.remove('active');
        }
    }
});

// Analytics tracking (if needed)
function trackEvent(category, action, label) {
    if (window.gtag) {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Contact Button Click Tracking
document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.includes('Contact')) {
        btn.addEventListener('click', () => {
            trackEvent('engagement', 'button_click', 'contact');
        });
    }
});

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DESIGNER.EXE Portfolio loaded successfully');
    
    // Initialize any tooltips or popovers if needed
    initializeTooltips();
});

// Tooltip Initialization (if needed)
function initializeTooltips() {
    // Add tooltip initialization logic here
}

// Export functions for use in other scripts
window.Designer = {
    toggleMobileMenu,
    handleContactSubmit,
    trackEvent
};
