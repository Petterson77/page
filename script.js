document.addEventListener('DOMContentLoaded', function() {

    // 1. Menu Hambúrguer
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mainHeader = document.getElementById('main-header');

    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            navLinks.classList.add('active');
        } else {
            navLinks.classList.remove('active');
        }
    });

    // Fechar menu ao clicar em um link (apenas para mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Ajuste conforme seu breakpoint
                menuToggle.checked = false;
                navLinks.classList.remove('active');
            }
        });
    });

    // 2. Menu de Navegação Sticky com efeito de "encolhimento"
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Se rolar mais de 50px
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // 3. Animações de entrada com ScrollReveal.js
    // Configurações padrão para ScrollReveal
    ScrollReveal({
        distance: '60px',
        duration: 1200,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: false // Para animar apenas uma vez ao entrar na viewport
    });

    // Revelar elementos
    ScrollReveal().reveal('.hero-content h2', { origin: 'top', distance: '80px', delay: 200 });
    ScrollReveal().reveal('.hero-content p', { origin: 'top', distance: '80px', delay: 400 });
    ScrollReveal().reveal('.cta-button', { origin: 'top', distance: '80px', delay: 600 });
    ScrollReveal().reveal('.page-intro article', { delay: 300 });
    ScrollReveal().reveal('.content-section .section-title', { delay: 200, origin: 'top' });
    ScrollReveal().reveal('.periodo-card', { interval: 150 }); // Animação em cascata
    ScrollReveal().reveal('.timeline-event', { interval: 100, origin: 'right' }); // Animação em cascata para timeline
    ScrollReveal().reveal('.content-block', { interval: 150 }); // Animação em cascata
    ScrollReveal().reveal('.fact-box', { delay: 300, origin: 'left' });
    ScrollReveal().reveal('.image-gallery .section-title', { delay: 200, origin: 'top' });
    ScrollReveal().reveal('.gallery-grid a', { interval: 100, origin: 'bottom' });


    // 4. "Fatos Curiosos" com animação de digitação (Typed.js) - APENAS NA INDEX.HTML
    if (document.getElementById('typed-fact')) {
        const facts = [
            "A industrialização brasileira foi impulsionada por crises externas, como a Crise de 1929, que forçaram a substituição de importações!",
            "O café foi crucial para o início da indústria, gerando capital e infraestrutura que foram reaproveitados.",
            "O Brasil é um dos maiores produtores de aeronaves do mundo, com a Embraer sendo um grande destaque!",
            "A Zona Franca de Manaus é um polo industrial importante que atrai investimentos e gera empregos na Amazônia."
        ];
        let currentFactIndex = 0;

        function startTypedAnimation() {
            if (typedInstance) { // Destruir instância anterior se existir
                typedInstance.destroy();
            }
            typedInstance = new Typed('#typed-fact', {
                strings: [facts[currentFactIndex]],
                typeSpeed: 40,
                backSpeed: 20,
                backDelay: 2000,
                startDelay: 500,
                loop: false,
                showCursor: true,
                cursorChar: '|',
                onComplete: (self) => {
                    setTimeout(() => {
                        currentFactIndex = (currentFactIndex + 1) % facts.length;
                        startTypedAnimation(); // Chama recursivamente para o próximo fato
                    }, 1000); // Espera 1 segundo antes de apagar e começar o próximo
                }
            });
        }

        let typedInstance;
        startTypedAnimation();
    }

    // 5. Lightbox (já inicializado automaticamente pela biblioteca)
    //    Não é necessário código JS aqui, a biblioteca lightbox.min.js cuida disso.
    //    Certifique-se de que o jQuery esteja carregado antes do Lightbox.
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fitImagesInViewport': true
    });

    // 6. Flickity (Carrossel) - APENAS NA DESENVOLVIMENTO.HTML
    //    A inicialização do Flickity é feita via o atributo data-flickity no HTML,
    //    mas para garantir que funciona, você pode também inicializá-lo assim:
    //    if (document.querySelector('.main-carousel')) {
    //        new Flickity('.main-carousel', {
    //            // options
    //            autoPlay: 3000,
    //            wrapAround: true,
    //            pauseAutoPlayOnHover: false
    //        });
    //    }

});