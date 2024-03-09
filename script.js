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
  }, 2000); 
}

startSlideInterval();


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


document.querySelectorAll('.prev, .next').forEach(button => {
  button.addEventListener('click', () => {
    clearInterval(slideInterval);
    startSlideInterval();
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.head-menu');

  menuItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
          
          const submenu = this.querySelector('.sub-menu');
          if (submenu) {
              submenu.style.left = '0px';
              submenu.style.top = `${item.getBoundingClientRect().bottom}px`;
              submenu.style.position = 'fixed'; 
              submenu.style.width = '100%'; 
          }
      });

      item.addEventListener('mouseleave', function() {
          const submenu = this.querySelector('.sub-menu');
          if (submenu) {
              submenu.style.left = ''; 
              submenu.style.top = '';
              submenu.style.position = '';
          }
      });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const scrollLeft = document.getElementById('scrollLeft');
  const scrollRight = document.getElementById('scrollRight');

  const scrollAmount = 100;

  scrollLeft.onclick = function() {
      
      menu.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  scrollRight.onclick = function() {
      menu.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
});

document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.head-menu');

  function adjustSubmenuHeight() {
    menuItems.forEach(item => {
      const submenu = item.querySelector('.sub-menu');

      if (submenu) {
        const viewportHeight = window.innerHeight;
        const menuBottom = item.getBoundingClientRect().bottom;
        const maxHeight = viewportHeight - menuBottom;

        submenu.style.maxHeight = `${maxHeight}px`;
      }
    });
  }

  adjustSubmenuHeight();

  window.addEventListener('resize', adjustSubmenuHeight);
});
