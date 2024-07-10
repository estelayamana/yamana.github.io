// Menu Responsivo
const navToggle = document.querySelector('.menu-toggle'); // Selecionador corrigido
const navMenu = document.querySelector('.menu'); // Supondo que o menu tem a classe 'menu'

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('menu-aberto'); // Abrir/fechar menu
});

// Acessibilidade (Teclado)
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    navMenu.classList.remove('menu-aberto');
  }
});

// Banner Fade-in Animation
const banner = document.querySelector('.banner');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const opacity = Math.max(0.3, 1 - scrollY / 250); // Ajuste da opacidade mínima e scroll
  banner.style.opacity = opacity;
});

// Section Scroll Animations
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const screenHeight = window.innerHeight;
    const sectionVisible = sectionTop - screenHeight / 2 < window.scrollY && sectionTop + screenHeight / 2 > window.scrollY; 

    if (sectionVisible) {
      section.classList.add('animated');
    } else {
      section.classList.remove('animated');
    }
  });
});


