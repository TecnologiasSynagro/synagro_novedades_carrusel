// Datos del carrusel - 3 diapositivas
const carouselData = [
    {
        id: 1,
        image: './Placa Actualización SYNAGRO 7-108 - SYNAGRO 7.png',
        title: 'Actualización SYNAGRO 7-108',
        description: 'Descubre las nuevas funcionalidades de SYNAGRO 7.108',
        buttonText: 'Conocer más',
        link: './Update SYNagro 7.108.pdf'
    },
    {
        id: 2,
        image: './Placa Pop Up syn7 - Webinar Mobile.png',
        title: 'Webinar Mobile',
        description: 'Únete a nuestro webinar sobre funcionalidades mobile.',
        buttonText: 'Inscribirse',
        link: 'https://forms.gle/cR9C5xJ4EyYnYKYX9'
    },
    {
        id: 3,
        image: './Inconveniente Técnico - SYNAGRO 7.png',
        title: 'Inconveniente Técnico',
        description: 'Estamos trabajando para resolver los inconvenientes técnicos.',
        buttonText: '',
        link: ''
    }
];

// Variables globales
let currentSlide = 0;
const slides = carouselData;
let isAutoPlayPaused = false;

// Inicializar el carrusel
function initCarousel() {
    createSlides();
    createIndicators();
    updateCarousel();
    attachEventListeners();
    startAutoPlay();
}

// Crear las diapositivas
function createSlides() {
    const slidesContainer = document.getElementById('carouselSlides');
    slidesContainer.innerHTML = '';

    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        const buttonHTML = slide.buttonText ? `<button class="carousel-slide-button" onclick="navigateToLink('${slide.link}')">${slide.buttonText}</button>` : '';
        slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}" loading="lazy">
            <div class="carousel-slide-overlay">
                ${buttonHTML}
            </div>
        `;
        slidesContainer.appendChild(slideElement);
    });
}

// Crear indicadores
function createIndicators() {
    const indicatorsContainer = document.getElementById('indicators');
    indicatorsContainer.innerHTML = '';

    slides.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
        indicator.setAttribute('aria-label', `Ir a la diapositiva ${index + 1}`);
        indicator.onclick = () => goToSlide(index);
        indicatorsContainer.appendChild(indicator);
    });
}

// Actualizar el carrusel
function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const currentData = carouselData[currentSlide];

    // Actualizar diapositivas
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });

    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide) {
            indicator.classList.add('active');
        }
    });

    // Actualizar información
    document.getElementById('slideTitle').textContent = currentData.title;
    document.getElementById('slideDescription').textContent = currentData.description;

    const slideLink = document.getElementById('slideLink');
    if (currentData.buttonText) {
        slideLink.textContent = currentData.buttonText;
        slideLink.style.display = 'inline-block';
        slideLink.onclick = (e) => {
            e.preventDefault();
            navigateToLink(currentData.link);
        };
    } else {
        slideLink.style.display = 'none';
    }
}

// Ir a una diapositiva específica
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetAutoPlay();
}

// Siguiente diapositiva
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
    resetAutoPlay();
}

// Diapositiva anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
    resetAutoPlay();
}

// Navegar a un enlace
function navigateToLink(link) {
    if (link.startsWith('http')) {
        // Link externo
        window.open(link, '_blank');
    } else if (link.includes('.pdf')) {
        // Abrir PDF en nueva pestaña
        window.open(link, '_blank');
    } else if (link.startsWith('/') || link.includes('.')) {
        // Ruta interna del repositorio
        window.location.href = link;
    }
}

// Eventos
function attachEventListeners() {
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('pauseBtn').addEventListener('click', togglePause);

    // Navegación por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Pausar autoplay al interactuar con el mouse
    document.querySelector('.carousel').addEventListener('mouseenter', stopAutoPlay);
    document.querySelector('.carousel').addEventListener('mouseleave', () => {
        if (!isAutoPlayPaused) startAutoPlay();
    });
}

// Toggle pause
function togglePause() {
    const pauseBtn = document.getElementById('pauseBtn');
    isAutoPlayPaused = !isAutoPlayPaused;
    if (isAutoPlayPaused) {
        clearInterval(autoPlayInterval);
        pauseBtn.querySelector('span').textContent = '▶';
    } else {
        startAutoPlay();
        pauseBtn.querySelector('span').textContent = '⏸';
    }
}

// Auto-play
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 15000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initCarousel);
