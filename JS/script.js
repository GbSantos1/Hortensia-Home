var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var showSidebar = false;

function menuShow(){
    showSidebar = !showSidebar
    if(showSidebar){
        navigation_header.style.display = 'flex';
        navigation_header.style.marginRight = '0vw';
        navigation_header.style.animationName = 'showSidebar';
    }

    else{
        navigation_header.style.display = '';
        navigation_header.style.marginRight = '-100vw';
        navigation_header.style.animationName = '';
    }
}


var swiper = new Swiper(".cards", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".sldecar", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7600,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const progressCircle = document.querySelector(".autoplay-progress svg");
//     const progressContent = document.querySelector(".autoplay-progress span");
//     var swiper = new Swiper(".sldecar", {
//       slidesPerView: 1,
//       spaceBetween: 30,
//       loop: true,
//       pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       },
//       spaceBetween: 30,
//       centeredSlides: true,
//       autoplay: {
//         delay: 7600,
//         disableOnInteraction: false
//       },
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev"
//       },
//       on: {
//         autoplayTimeLeft(s, time, progress) {
//           progressCircle.style.setProperty("--progress", 1 - progress);
//           progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//         }
//       }
//     });