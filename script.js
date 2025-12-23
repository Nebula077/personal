
const navBar = document.querySelector('.nav-links');
const navToggle = document.getElementById('hamburger');

navToggle.addEventListener('click', () => {
    const opened = navBar.classList.toggle('active');
    navToggle.classList.toggle('active');
    // Use aria-expanded for accessibility
    navToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    // don't set inline styles; let CSS handle visibility via the .active class
});

// Netlify-friendly AJAX submit for the contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const status = document.getElementById('form-status');
        const formData = new FormData(contactForm);
        if (status) status.textContent = 'Sending...';
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (response.ok) {
                if (status) status.textContent = 'Message sent — thanks! You should receive a confirmation email shortly.';
                contactForm.reset();
            } else {
                if (status) status.textContent = 'There was a problem sending your message. Please try again.';
            }
        } catch (err) {
            if (status) status.textContent = 'Network error — please try again later.';
        }
    });
}
