document.addEventListener('DOMContentLoaded', function () {
    // Navbar Scroll Behavior
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const heroSection = document.querySelector('.hero');
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= heroHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Newsletter Form Validation
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        const email = emailInput.value.trim();
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (emailRegex.test(email)) {
            alert('Thank you for subscribing!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
});