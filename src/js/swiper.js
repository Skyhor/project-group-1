import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use({Navigation, Pagination});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  }); 



// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + (index + 1) + "</span>";
//       },
//     },
//   });