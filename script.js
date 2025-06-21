document.addEventListener('DOMContentLoaded', function() {
    // Nav Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });

    // Typing animation
    if (document.querySelector('.typing')) {
        new Typed('.typing', {
            strings: ['elegant code.', 'intelligent solutions.', 'the future.'],
            typeSpeed: 80,
            backSpeed: 60,
            loop: true,
            backDelay: 1500,
        });
    }

    // Scroll Reveal
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: false,
    });

    sr.reveal('h1', { delay: 200, origin: 'top' });
    sr.reveal('h2, .typing-container', { delay: 300, origin: 'top' });
    sr.reveal('#about .container', { delay: 200, origin: 'left' });
    sr.reveal('.skills-grid .skill-item', { interval: 100, origin: 'bottom' });
    sr.reveal('.projects-grid .project-card', { interval: 100, origin: 'bottom' });
    sr.reveal('#resume .container', { origin: 'bottom' });
    sr.reveal('#contact form', { delay: 200, origin: 'right' });

    // Form submission
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            // This is a simple example. For a real app, you'd want more robust handling.
            setTimeout(() => {
                // Can show a success message here
                // For FormSubmit, it will redirect to a thank you page by default.
            }, 1000);
        });
    }
}); 