// Menu principal responsivo
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Seção "Experiência Profissional" com filtro por ano

const experienciaProfissional = document.querySelector('#experiencia-profissional');
const anos = document.querySelectorAll('#experiencia-profissional li');
const filtros = document.querySelectorAll('.filtro');

filtros.forEach(filtro => {
  filtro.addEventListener('click', () => {
    anos.forEach(ano => {
      ano.style.display = 'none';
      if (ano.textContent.includes(filtro.textContent)) {
        ano.style.display = 'block';
      }
    });
  });
});

// Animação suave ao rolar a página
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const distance = section.getBoundingClientRect().top;
    const offset = window.pageYOffset;

    if (distance <= offset + 100) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});
