let btn = document.querySelector(".btn-x");
let block = document.querySelector(".custom-bar");

function checkBar() {
  const clicked = localStorage.getItem("hide-bar");
  if (!clicked) {
    block.style.display = "flex";
    btn.addEventListener("click", saveBar);
  }
}

function saveBar() {
  localStorage.setItem("hide-bar", "true");
  block.style.display = "none";
}

checkBar();
