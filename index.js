const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});

const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.getElementById('carousel-prev');
const nextButton = document.getElementById('carousel-next');

let currentIndex = 0;
let autoScrollInterval;
let isAutoScrolling = true;

// Function to update the carousel position
const updateCarousel = () => {
  const slideWidth = slides[0].clientWidth;
  carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

// Function to move to the next slide
const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
  updateCarousel();
};

// Function to move to the previous slide
const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
  updateCarousel();
};

// Event Listeners for Buttons
nextButton.addEventListener('click', () => {
  stopAutoScroll(); // Stop auto-scroll on user interaction
  nextSlide();
  startAutoScroll(); // Resume auto-scroll
});

prevButton.addEventListener('click', () => {
  stopAutoScroll(); // Stop auto-scroll on user interaction
  prevSlide();
  startAutoScroll(); // Resume auto-scroll
});

// Auto-Scroll Functions
const startAutoScroll = () => {
  stopAutoScroll(); // Clear any existing interval before starting a new one
  autoScrollInterval = setInterval(() => {
    nextSlide();
  }, 3000); // Change slides every 3 seconds
  isAutoScrolling = true; // Update state
};

const stopAutoScroll = () => {
  clearInterval(autoScrollInterval);
  isAutoScrolling = false; // Update state
};

// Tap-to-Pause and Resume
carouselContainer.addEventListener('click', () => {
  if (isAutoScrolling) {
    stopAutoScroll();
  } else {
    startAutoScroll();
  }
});

// Ensure correct positioning on window resize
window.addEventListener('resize', updateCarousel);

// Start the auto-scroll when the page loads
startAutoScroll();