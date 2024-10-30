const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});

const slidesContainer = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;  // Loop to the first slide
    updateCarousel();
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;  // Loop to the last slide
    updateCarousel();
});

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    slidesContainer.scrollLeft = slideWidth * currentIndex;
}