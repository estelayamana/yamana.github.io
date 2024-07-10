// Smooth scrolling for navigation links
const menuLinks = document.querySelectorAll('.menu li a');

menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    const offset = targetSection.offsetTop - 100; // Adjust offset as needed

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});

// Toggle mobile menu
const navBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.menu');

navBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
