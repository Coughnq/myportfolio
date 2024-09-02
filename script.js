document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate text elements
    gsap.utils.toArray('.animate-text').forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Animate card elements
    gsap.utils.toArray('.animate-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('header');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            header.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll('header a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 767) {
                header.classList.remove('active');
            }
        });
    });

    // Add any other animations or functionality here
});

// Add this new function at the end of your file, outside of any existing event listeners
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('header');

    if (hamburger && header) {
        hamburger.addEventListener('click', () => {
            header.classList.toggle('active');
        });

        document.querySelectorAll('header a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 767) {
                    header.classList.remove('active');
                }
            });
        });
    }
}

// Call the function after the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHamburgerMenu);
} else {
    initHamburgerMenu();
}
