// For additional interactivity or animations
document.addEventListener("DOMContentLoaded", () => {
    // Add animations to the page elements
    const elements = document.querySelectorAll('.animate-text');
    elements.forEach(element => {
        element.classList.add('active');
    });
});
// Toggle Navbar for Mobile View
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navbarToggle.classList.toggle('active');
});
