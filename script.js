document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP and ScrollTrigger are available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Initialize GSAP animations
        gsap.registerPlugin(ScrollTrigger);

        // Animate text elements
        gsap.utils.toArray('.animate-text').forEach(text => {
            gsap.from(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 20,
                duration: 0.5
            });
        });

        // Animate card elements
        gsap.utils.toArray('.animate-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 20,
                duration: 0.5
            });
        });
    } else {
        console.warn('GSAP or ScrollTrigger not loaded. Animations disabled.');
    }

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
