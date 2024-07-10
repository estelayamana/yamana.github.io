// Função para rolar para a seção específica
function scrollToSection(sectionId) {
  const section = document.querySelector(`section[id="${sectionId}"]`);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
}

// Adicionar eventos de clique aos links da navegação
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionId = this.getAttribute('href').slice(1); // Remover o "#" do início do href
    scrollToSection(sectionId);
  });
});

// Função para mostrar ou ocultar o botão "Voltar ao topo"
function showHideBackButton() {
  const backButton = document.querySelector('.back-to-top');
  if (window.scrollY > 200) {
    backButton.style.display = 'block';
  } else {
    backButton.style.display = 'none';
  }
}

// Adicionar evento de scroll à janela
window.addEventListener('scroll', showHideBackButton);

// Função para rolar de volta ao topo da página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Adicionar evento de clique ao botão "Voltar ao topo"
const backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener('click', scrollToTop);

// Melhorar acessibilidade
backToTopButton.setAttribute('aria-label', 'Voltar ao topo da página');

// Otimizar lógica para mostrar/ocultar botão (usando IntersectionObserver)
const backToTopObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      backButton.style.display = 'none';
    } else {
      backButton.style.display = 'block';
    }
  });
}, {
  root: null,
  threshold: 0,
});

backToTopObserver.observe(document.querySelector('header'));