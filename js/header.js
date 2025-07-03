window.addEventListener("DOMContentLoaded", function () {
  const header_menu = document.querySelector(".header_menu");
  const menus = header_menu.querySelectorAll(".menu");

  menus.forEach((menu) => {
    menu.addEventListener("mouseenter", function () {
      menus.forEach((otherMenu) => {
        if (otherMenu !== menu) {
          otherMenu.style.color = "rgb(170, 170, 170)";
        } else {
          otherMenu.style.opacity = "#000";
        }
      });
    });

    menu.addEventListener("mouseleave", function () {
      menus.forEach((m) => (m.style.color = "#000"));
    });
  });
});
