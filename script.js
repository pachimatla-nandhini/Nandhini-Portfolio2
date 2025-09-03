// Slide-in animation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.slide-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

// Projects Carousel
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-slide .project-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;

function updateCarousel() {
    const width = carouselItems[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-width * counter}px)`;
}

// Next Button
nextBtn.addEventListener('click', () => {
    counter++;
    if(counter >= carouselItems.length) counter = 0;
    updateCarousel();
});

// Previous Button
prevBtn.addEventListener('click', () => {
    counter--;
    if(counter < 0) counter = carouselItems.length - 1;
    updateCarousel();
});
