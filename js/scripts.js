const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('notOnTop');
    } else {
        header.classList.remove('notOnTop');
    }
});

// Selecionamos apenas as .row que estão dentro de um .slider-wrapper para evitar conflitos
const sliderRows = document.querySelectorAll('.slider-wrapper .row');

window.addEventListener('load', () => {
    sliderRows.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        const wrapper = slider.parentElement;
        const btnPrev = wrapper.querySelector('.left-arrow');
        const btnNext = wrapper.querySelector('.arrow-right');

        // Função para mostrar/esconder setas
        const updateArrows = () => {
            if (btnPrev) {
                if (slider.scrollLeft <= 5) { // Tolerância de 5px
                    btnPrev.classList.add('hidden');
                } else {
                    btnPrev.classList.remove('hidden');
                }
            }

            if (btnNext) {
                const maxScroll = slider.scrollWidth - slider.clientWidth;
                if (slider.scrollLeft >= maxScroll - 5) {
                    btnNext.classList.add('hidden');
                } else {
                    btnNext.classList.remove('hidden');
                }
            }
        };

        // --- Funcionalidade de Arrastar (Drag) ---
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.scrollBehavior = 'auto';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.style.cursor = 'grabbing';
        });

        slider.addEventListener('mouseleave', () => { 
            isDown = false; 
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mouseup', () => { 
            isDown = false; 
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
            updateArrows();
        });

        // --- Navegação pelos Botões ---
        if (btnNext) {
            btnNext.addEventListener('click', () => {
                slider.style.scrollBehavior = 'smooth';
                slider.scrollLeft += slider.clientWidth * 0.8;
                // updateArrows será chamado pelo evento 'scroll'
            });
        }

        if (btnPrev) {
            btnPrev.addEventListener('click', () => {
                slider.style.scrollBehavior = 'smooth';
                slider.scrollLeft -= slider.clientWidth * 0.8;
                // updateArrows será chamado pelo evento 'scroll'
            });
        }

        // Atualiza as setas durante o scroll
        slider.addEventListener('scroll', updateArrows);

        // Inicializa o estado das setas
        updateArrows();
    });
});