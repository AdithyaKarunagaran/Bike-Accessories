function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openlogin() {
  document.getElementById("login").style.width = "100%";
}

function closelogin() {
  document.getElementById("login").style.width = "0%";
}

let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let slideInterval;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
}

function startSlideInterval() {
  slideInterval = setInterval(() => {
    showSlides();
  }, 2000); // Change slide every 1.5 seconds
}

startSlideInterval();

// Manual navigation
document.querySelector('.prev').addEventListener('click', () => {
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
  showSlides();
});

// Reset the slide interval on any manual interaction
document.querySelectorAll('.prev, .next').forEach(button => {
  button.addEventListener('click', () => {
    clearInterval(slideInterval);
    startSlideInterval();
  });
});

