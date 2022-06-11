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
