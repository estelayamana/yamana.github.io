// Função para inicializar o slider de formação
function initFormationSlider() {
    const slider = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide');
  
    let activeSlide = 0;
  
    // Função para mostrar o slide ativo
    function showSlide(slideIndex) {
      slides.forEach(slide => slide.style.display = 'none');
      slides[slideIndex].style.display = 'block';
    }
  
    // Função para avançar para o próximo slide
    function nextSlide() {
      activeSlide++;
      if (activeSlide >= slides.length) {
        activeSlide = 0;
      }
      showSlide(activeSlide);
    }
  
    // Função para voltar para o slide anterior
    function prevSlide() {
      activeSlide--;
      if (activeSlide < 0) {
        activeSlide = slides.length - 1;
      }
      showSlide(activeSlide);
    }
  
    // Adiciona botões de navegação
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Anterior';
    prevButton.addEventListener('click', prevSlide);
    slider.parentNode.insertBefore(prevButton, slider);
  
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Próximo';
    nextButton.addEventListener('click', nextSlide);
    slider.parentNode.appendChild(nextButton);
  
    // Mostra o slide inicial
    showSlide(activeSlide);
  }
  
  // Inicializa o slider quando a página estiver carregada
  window.addEventListener('load', initFormationSlider);
  