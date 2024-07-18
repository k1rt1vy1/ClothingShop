let slideIndex = 0;
let autoSlideInterval;

showSlide(slideIndex);
startAutoSlide();

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 1000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}