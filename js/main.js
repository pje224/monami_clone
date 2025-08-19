// window를 load한 다음에 fuction 안의 기능을 해라
window.addEventListener("load", function () {
  // document는 html 안의 모든 요소를 뜻함
  //   nav에 마우스 엔터(호버) 했을때
  const nav = document.querySelector(".header");
  const headerBg = document.querySelector(".header-bg");

  nav.addEventListener("mouseenter", function () {
    headerBg.style.height = "425px";
  });
  //   nav에 마우스 리브 했을 때(호버를 안했을 때)
  nav.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
  });
  // 상품 스와이퍼
  const swiper = new Swiper(".pdSwiper", {
    slidesPerView: 10,
    // spaceBetween: 10,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
});
