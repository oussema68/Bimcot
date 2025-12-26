// Language management
let currentLang = localStorage.getItem('language') || 'en';

// Language toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    
    // Set initial language
    setLanguage(currentLang);
    
    // Toggle language on button click
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'fr' : 'en';
            setLanguage(newLang);
        });
    }
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language toggle button
    const langToggle = document.getElementById('langToggle');
    const flags = langToggle?.querySelectorAll('.lang-flag');
    if (langToggle && flags) {
        if (lang === 'fr') {
            langToggle.classList.add('active');
        } else {
            langToggle.classList.remove('active');
        }
    }
    
    // Update page title
    const titleKey = lang === 'fr' ? 'BIMCOT - Formations Certifiées IRCA & Cours de Certification ISO' : 'BIMCOT - IRCA Training & ISO Certification Courses';
    document.title = titleKey;
    
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update select options
    const select = document.getElementById('interest');
    if (select && translations[lang]) {
        const options = select.querySelectorAll('option[data-i18n]');
        options.forEach(option => {
            const key = option.getAttribute('data-i18n');
            if (translations[lang][key]) {
                option.textContent = translations[lang][key];
            }
        });
    }
}

// Logo fallback handling
document.addEventListener('DOMContentLoaded', () => {
    const logoImage = document.querySelector('.logo-image');
    const logoTextFallback = document.querySelector('.logo-text-fallback');
    
    if (logoImage && logoTextFallback) {
        // Check if image fails to load
        logoImage.addEventListener('error', function() {
            this.style.display = 'none';
            logoTextFallback.style.display = 'block';
        });
        
        // If image loads successfully, hide text fallback
        logoImage.addEventListener('load', function() {
            logoTextFallback.style.display = 'none';
        });
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        const lang = localStorage.getItem('language') || 'en';
        const t = translations[lang] || translations.en;
        const select = document.getElementById('interest');
        const courseText = select ? select.querySelector(`option[value="${data.interest}"]`)?.textContent || data.interest : data.interest;
        
        alert(t['contact.form.success'] + '\n\n' +
              `${t['contact.form.name']}: ${data.name}\n` +
              `${t['contact.form.email']}: ${data.email}\n` +
              `${t['contact.form.interest']}: ${courseText}`);
        
        // Reset form
        contactForm.reset();
    });
}

// Intersection Observer for fade-in animations
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

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.standard-card, .program-card, .stat-card, .feature-item');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add hover effect to cards
document.querySelectorAll('.standard-card, .program-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Scroll to top functionality (optional enhancement)
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    display: none;
    z-index: 999;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.background = 'var(--primary-dark)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.background = 'var(--primary-color)';
});

