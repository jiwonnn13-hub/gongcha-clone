const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
});

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileDepthBtns = document.querySelectorAll('.mobile-depth-btn');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

mobileDepthBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('active');
    });
});


const menuSwiper = new Swiper('.menu-swiper', {
  slidesPerView: 4.5,
  spaceBetween: 60,

  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.menu-swiper .swiper-button-next',
    prevEl: '.menu-swiper .swiper-button-prev',
  },

    breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    }
  }
});

const newStoreSwiper = new Swiper('.new-store-swiper', {
  centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: '.new-store-swiper .swiper-button-next',
    prevEl: '.new-store-swiper .swiper-button-prev',
  },

  pagination: {
    el: '.new-store-swiper .swiper-pagination',
    type: 'progressbar',
  },

  breakpoints: {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    }
  }
});