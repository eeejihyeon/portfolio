const loading = document.querySelector(".loading");
const welcome = document.querySelector(".welcome");
const gnb = document.querySelector(".gnb");
const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");

const CLASS_HIDDEN = "hidden";

function loadEvent() {
  // 로딩 중
  header.classList.add(CLASS_HIDDEN);
  main.classList.add(CLASS_HIDDEN);
  footer.classList.add(CLASS_HIDDEN);

  // gnb.classList.add(CLASS_HIDDEN);
}

window.addEventListener("load", loadEvent);

setTimeout(() => {
  // 로딩 끝
  loading.classList.add(CLASS_HIDDEN);
  header.classList.remove(CLASS_HIDDEN);
  main.classList.remove(CLASS_HIDDEN);
  footer.classList.remove(CLASS_HIDDEN);
}, 5000);
