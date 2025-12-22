
const navBar = document.querySelector('.nav-links');
const navToggle = document.getElementById('hamburger');

navToggle.addEventListener('click', () => {
    const opened = navBar.classList.toggle('active');
    navToggle.classList.toggle('active');
    // Use aria-expanded for accessibility
    navToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    // don't set inline styles; let CSS handle visibility via the .active class
});
