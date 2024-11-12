const navs = document.querySelectorAll(".header__link");
navs.forEach((nav) => {
    if (nav.pathname === window.location.pathname) {
        nav.classList.add("active");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.header__burger-menu-button');
    const menu = document.querySelector('.header__burger-menu');

    if (button) {
        button.addEventListener('click', function () {
            menu.classList.toggle('active');
            button.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');
        });
    }

    const items = document.querySelectorAll('.hero-section__grid-item');
    const header = document.querySelector('.header');
    const wrapper = document.querySelector('.hero-section__wrapper');

    items.forEach(item => {
        item.addEventListener('mouseover', function() {
            header.classList.add('active');
            wrapper.classList.add('active');
            
        });
        
        item.addEventListener('mouseleave', function() {
            header.classList.remove('active');
            wrapper.classList.remove('active');
        });
    });

    const swiper = new Swiper('.hero-swiper', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 1000,
        },
        pagination: {
          el: '.hero-pagination',
        },
      });
});