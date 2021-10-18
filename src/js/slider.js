import Swiper from '../../node_modules/swiper/swiper-bundle';

const swiperTeam = new Swiper('.slider-team', {
  
    navigation: {
      nextEl: '.slider-team__button--next',
      prevEl: '.slider-team__button--prev',
    },
});