document.addEventListener('DOMContentLoaded', () => {
    // Animate text elements
    gsap.from('.animate-text', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animate project cards
    gsap.from('.animate-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.project-grid',
            start: 'top bottom', // Trigger when the top of the element hits the bottom of the viewport
            toggleActions: 'play none none none'
        }
    });

    // Animate profile image
    gsap.from('.profile-img', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.info-content',
            start: 'top bottom', // Trigger when the top of the element hits the bottom of the viewport
            toggleActions: 'play none none none'
        }
    });

    // Animate timeline items
    gsap.from('.timeline-item', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top bottom', // Trigger when the top of the element hits the bottom of the viewport
            toggleActions: 'play none none none'
        }
    });

    // Animate header on scroll
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY) {
            gsap.to(header, { y: '-100%', duration: 0.3 });
        } else {
            gsap.to(header, { y: '0%', duration: 0.3 });
        }
        lastScrollY = window.scrollY;
    });

    // New animation for the word "interactions"
    gsap.from('.animate-word', {
        opacity: 0,
        x: -50, // Start 50 pixels to the left
        duration: 1,
        ease: 'power3.out',
        delay: 0.5 // Delay the animation slightly for effect
    });

    // Animate featured work section
    gsap.from('#featured-projects .animate-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#featured-projects', // Use the featured projects section as the trigger
            start: 'top 80%', // Start when the top of the section is 80% from the top of the viewport
            toggleActions: 'play none none none'
        }
    });

    // Animate only the text content of the featured project
    gsap.from('#featured-projects .project-info', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#featured-projects', // Use the featured projects section as the trigger
            start: 'top 80%', // Start when the top of the section is 80% from the top of the viewport
            toggleActions: 'play none none none'
        }
    });

    // Animate other project cards (if you have any)
    gsap.from('#other-projects .project-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#other-projects', // Use the other projects section as the trigger
            start: 'top 80%', // Start when the top of the section is 80% from the top of the viewport
            toggleActions: 'play none none none'
        }
    });

    // ... rest of your existing code
});
