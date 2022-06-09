// PROJECT LIST Slide

// WEB SITE Slide
const webContent = document.querySelector(".project_container>.project_box>ul");
const webSlideBtn1 = document.querySelector(
  ".project_container>.slide_btn>li:nth-child(1)"
);
const webSlideBtn2 = document.querySelector(
  ".project_container>.slide_btn>li:nth-child(2)"
);
const webSlideBtn3 = document.querySelector(
  ".project_container>.slide_btn>li:nth-child(3)"
);
const webSlideBtn4 = document.querySelector(
  ".project_container>.slide_btn>li:nth-child(4)"
);

webSlideBtn1.addEventListener("click", () => {
  webContent.style.transform = "translate(0vw)";
  webSlideBtn1.style.backgroundColor = "var(--color-point)";
  webSlideBtn2.style.backgroundColor = "var(--color-black)";
  webSlideBtn3.style.backgroundColor = "var(--color-black)";
  webSlideBtn4.style.backgroundColor = "var(--color-black)";
});

webSlideBtn2.addEventListener("click", () => {
  webContent.style.transform = "translate(-91.6646vw)";
  webSlideBtn2.style.backgroundColor = "var(--color-point)";
  webSlideBtn1.style.backgroundColor = "var(--color-black)";
  webSlideBtn3.style.backgroundColor = "var(--color-black)";
  webSlideBtn4.style.backgroundColor = "var(--color-black)";
});

webSlideBtn3.addEventListener("click", () => {
  webContent.style.transform = "translate(-183.3292vw)";
  webSlideBtn3.style.backgroundColor = "#2f2fff";
  webSlideBtn1.style.backgroundColor = "var(--color-black)";
  webSlideBtn2.style.backgroundColor = "var(--color-black)";
  webSlideBtn4.style.backgroundColor = "var(--color-black)";
});

webSlideBtn4.addEventListener("click", () => {
  webContent.style.transform = "translate(-274.9938vw)";
  webSlideBtn4.style.backgroundColor = "var(--color-point)";
  webSlideBtn1.style.backgroundColor = "var(--color-black)";
  webSlideBtn2.style.backgroundColor = "var(--color-black)";
  webSlideBtn3.style.backgroundColor = "var(--color-black)";
});

// SCRIPT Slide
const scriptContent = document.querySelector(
  ".project_container_script>.project_box>ul"
);
const scriptSlideBtn1 = document.querySelector(
  ".project_container_script>.slide_btn>li:nth-child(1)"
);
const scriptSlideBtn2 = document.querySelector(
  ".project_container_script>.slide_btn>li:nth-child(2)"
);
const scriptSlideBtn3 = document.querySelector(
  ".project_container_script>.slide_btn>li:nth-child(3)"
);
const scriptSlideBtn4 = document.querySelector(
  ".project_container_script>.slide_btn>li:nth-child(4)"
);

scriptSlideBtn1.addEventListener("click", () => {
  scriptContent.style.transform = "translate(0vw)";
  scriptSlideBtn1.style.backgroundColor = "var(--color-point)";
  scriptSlideBtn2.style.backgroundColor = "var(--color-black)";
  scriptSlideBtn3.style.backgroundColor = "var(--color-black)";
  scriptSlideBtn4.style.backgroundColor = "var(--color-black)";
});

scriptSlideBtn2.addEventListener("click", () => {
  scriptContent.style.transform = "translate(-75.1188vw)";
  scriptSlideBtn2.style.backgroundColor = "var(--color-point)";
  scriptSlideBtn1.style.backgroundColor = "var(--color-black)";
  scriptSlideBtn3.style.backgroundColor = "var(--color-black)";
  scriptSlideBtn4.style.backgroundColor = "var(--color-black)";
});

scriptSlideBtn3.addEventListener("click", () => {
  scriptContent.style.transform = "translate(-150.2376vw)";
  scriptSlideBtn3.style.backgroundColor = "#2f2fff";
  scriptSlideBtn1.style.backgroundColor = "var(--color-black)";
  scriptSlideBtn2.style.backgroundColor = "var(--color-black)";
  scriptSlideBtn4.style.backgroundColor = "var(--color-black)";
});

scriptSlideBtn4.addEventListener("click", () => {
  scriptContent.style.transform = "translate(-225.3564vw)";
  scriptSlideBtn4.style.backgroundColor = "var(--color-point)";
  scriptSlideBtn1.style.backgroundColor = "var(--color-black)";
  scriptSlideBtn2.style.backgroundColor = "var(--color-black)";
  scriptSlideBtn3.style.backgroundColor = "var(--color-black)";
});
