let tl = gsap.timeline();

tl.fromTo(
  "#subTitle1",
  { y: 20, opacity: 0 },
  { duration: 1, y: 0, opacity: 1 }
);

tl.fromTo(
  ".personal",
  { x: -100, opacity: 0 },
  { duration: 1, x: 0, opacity: 1 }
);

tl.fromTo(
  ".introduce",
  { y: 20, opacity: 0 },
  { duration: 1, y: 0, opacity: 1 }
);

tl.fromTo(
  "#subTitle2",
  { y: 20, opacity: 0 },
  { duration: 1, y: 0, opacity: 1 }
);

tl.fromTo(
  "#subTitle3",
  { y: 20, opacity: 0 },
  { duration: 1, y: 0, opacity: 1 }
);

tl.fromTo(".html", { y: 20, opacity: 0 }, { duration: 0.5, y: 0, opacity: 1 });

tl.fromTo(".css", { y: 20, opacity: 0 }, { duration: 0.5, y: 0, opacity: 1 });

tl.fromTo(".js", { y: 20, opacity: 0 }, { duration: 0.5, y: 0, opacity: 1 });

tl.fromTo(".react", { y: 20, opacity: 0 }, { duration: 0.5, y: 0, opacity: 1 });

tl.fromTo(".ts", { y: 20, opacity: 0 }, { duration: 0.5, y: 0, opacity: 1 });

tl.fromTo(".php", { y: 20, opacity: 0 }, { duration: 0.5, y: 0, opacity: 1 });

tl.to(".gnb", {
  duration: 1,
  delay: -1.5,
  x: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

gsap.to(".cont1_img2", {
  scrollTrigger: {
    trigger: ".cont1_img2",
    start: "top 50%",
    toggleActions: "restart none none none",
  },
  duration: 1,
  y: 0,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

// Skill Description Event

const skillBtns = document.querySelectorAll(".skill_item");
const skillContents = document.querySelectorAll(".skill_desc");
const skillClick = document.querySelector(".skill_click");

skillBtns.forEach(function (btn) {
  btn.addEventListener("click", openDesc);
});

function openDesc(btn) {
  let btnTarget = btn.currentTarget;
  var skill = btnTarget.dataset.skill;

  // 클릭 안내 텍스트 지우기
  skillClick.classList.remove("skill_desc_active");
  skillClick.classList.add("skill_desc");

  skillContents.forEach(function (btn) {
    btn.classList.remove("skill_desc_active");
  });

  skillBtns.forEach(function (btn) {
    btn.classList.remove("skill_desc_active");
  });

  document.querySelector("#" + skill).classList.add("skill_desc_active");

  btnTarget.classList.add("skill_desc_active");
}
