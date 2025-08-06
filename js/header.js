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
});
