const loading = document.querySelector(".loading");
const welcome = document.querySelector(".welcome");

function loadEvent() {
  // console.log("로딩즁~");
  welcome.classList.add("spin");
}

function loadedEvent() {
  console.log("로딩끝~");
}

window.addEventListener("load", loadEvent);

setTimeout(() => {
  loading.classList.add("hidden");
}, 5000);

window.onload = (event) => {
  welcome.classList.add("spin");
};
