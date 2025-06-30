window.addEventListener("load", function () {
  // swiper 만들기 실행
  makeSlide();
});

// 슬라이드 만들기
function makeSlide() {
  const swiper = new Swiper(".banner_info", {
    slidesPerView: "auto",
    spaceBetween: 85,
    centeredSlides: true,
    loop: true,
    loopedSlides: 8,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".banner_next",
      prevEl: ".banner_prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  return swiper;
}

makeSlide();

const swiper = makeSlide();
