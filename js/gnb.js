const menus = gnb.querySelectorAll(".menu");
const menu1 = gnb.querySelector(".menu:nth-child(0)");
const menu2 = gnb.querySelector(".menu:nth-child(1)");
const menu3 = gnb.querySelector(".menu:nth-child(2)");

// mouseleave: bg - none, border - pointColor
// mouseenter: bg - pointColor

// click: 펼쳐지면서 메뉴명 노출
function handleMenuClick() {
  // menus.forEach((menu) => {
  // menu.classList.remove("menu_leave");
  // menu.classList.add("menu_select");
  // });
  menu1.classList.remove("menu_leave");
  menu1.classList.add("menu_select");
}

menu1.addEventListener("click", handleMenuClick);
