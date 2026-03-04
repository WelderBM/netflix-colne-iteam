const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('notOnTop');
  } else {
    header.classList.remove('notOnTop');
  }
});


const sliders = document.querySelectorAll('.row');

window.addEventListener('load', () => {
  sliders.forEach(slider => {
    sliders.forEach(slider => {
  let isDown = false;
  let startX;
  let scrollLeft;

  // Função para mostrar/esconder setas e controlar opacidade
  const updateArrows = () => {
    const wrapper = slider.parentElement;
    const btnPrev = wrapper.querySelector('.left-arrow');
    const btnNext = wrapper.querySelector('.arrow-right');

    if (btnPrev) {
      // Se estiver no início, esconde a seta esquerda
      if (slider.scrollLeft <= 0) {
        btnPrev.classList.add('hidden');
      } else {
        btnPrev.classList.remove('hidden');
      }
    }

    if (btnNext) {
      // Se chegar no final, esconde a seta direita
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft >= maxScroll - 1) {
        btnNext.classList.add('hidden');
      } else {
        btnNext.classList.remove('hidden');
      }
    }
  };

  // --- Funcionalidade de Arrastar (Drag) ---
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.scrollBehavior = 'auto'; // Desativa o smooth para o drag ser instantâneo
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => { isDown = false; });
  slider.addEventListener('mouseup', () => { isDown = false; });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador de velocidade
    slider.scrollLeft = scrollLeft - walk;
    updateArrows();
  });

  // --- Navegação pelos Botões ---
  const wrapper = slider.parentElement;
  const btnNext = wrapper.querySelector('.arrow-right');
  const btnPrev = wrapper.querySelector('.left-arrow');

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      slider.style.scrollBehavior = 'smooth';
      slider.scrollLeft += slider.clientWidth * 0.8; // Rola 80% da largura visível
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      slider.style.scrollBehavior = 'smooth';
      slider.scrollLeft -= slider.clientWidth * 0.8;
    });
  }

  // Atualiza as setas durante o scroll (importante para o scroll suave)
  slider.addEventListener('scroll', updateArrows);

  // Inicializa o estado das setas ao carregar
  updateArrows();
});
    updateArrows(); 
  });
});