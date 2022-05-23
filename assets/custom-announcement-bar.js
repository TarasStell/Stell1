// let btn = document.querySelectorAll(".btn-x");
// let block = document.querySelector(".swiper-announcement");

// function checkBar() {
//   const clicked = localStorage.getItem("hide-bar");
//   if (!clicked) {
//     block.style.display = "block";
//     for (let item of btn) {
//       item.addEventListener("click", saveBar);
//     }
//   }
// }

// function saveBar() {
//   localStorage.setItem("hide-bar", "true");
//   block.style.display = "none";
// }

// checkBar();

const announcementSwiper = new Swiper(".swiper-announcement", {
  slidesPerView: 1,
  speed: 550,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
});
