// Função para mostrar/esconder o menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('responsive');
  }
  
  // Adicionar evento de clique ao botão de menu
  const menuButton = document.querySelector('.menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }
  
  // Ajustar o menu na rolagem da página 
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  