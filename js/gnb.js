const menuItems = document.querySelectorAll(".menu");

let prevSelectedItem = menuItems[0];

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    prevSelectedItem?.classList.remove("menu_active");
    prevSelectedItem = item;
    item.classList.add("menu_selected");
  });

  item.addEventListener("mouseenter", () => {
    prevSelectedItem?.classList.remove("menu_active");
    prevSelectedItem = item;
    item.classList.add("menu_active");
  });

  item.addEventListener("mouseleave", () => {
    prevSelectedItem?.classList.remove("menu_active");
    prevSelectedItem = item;
    item.classList.remove("menu_active");
  });
});
