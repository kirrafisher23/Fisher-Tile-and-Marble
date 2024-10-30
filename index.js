const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});

window.addEventListener('load', () => {
  const image = document.querySelector('.image');
  const content = document.querySelector('.content');

  // Check if elements are found
  if (image && content) {
    image.style.opacity = '1';
    content.style.opacity = '1';
  } else {
    console.error("Image or content element not found.");
  }
});

