// Função para animar elementos ao rolar a página
function animacaoScroll() {
    const elementos = document.querySelectorAll('.animacao');
  
    for (let elemento of elementos) {
      const posicaoElemento = elemento.getBoundingClientRect().top;
      const posicaoTela = window.pageYOffset;
  
      if (posicaoElemento < posicaoTela + 300) {
        elemento.classList.add('ativo');
      } else {
        elemento.classList.remove('ativo');
      }
    }
  }
  
  // Adiciona evento scroll para executar a animação
  window.addEventListener('scroll', animacaoScroll);
  
  // Função para abrir e fechar menus suspensos (se necessário)
  function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle('ativo');
  }
  