const btn_feature = document.getElementById("btn-feature");
const feature_items = document.querySelectorAll(".feature_menu");
const arrow_btn_feature = document.getElementById("arrowDown");
const arrow_btn_company = document.getElementById("arrowdown");
const btn_company = document.getElementById("btn-cmpny");
const company_items = document.querySelectorAll(".company_menu");
const menu_btn = document.getElementById("menu");
const close_menu = "./images/icon-close-menu.svg";
const active = "./images/icon-menu.svg";

// .Feature Arrow function
btn_feature.addEventListener("click", () => {
  feature_items.forEach((item) => {
    item.classList.toggle("active");
    arrow_btn_feature.classList.toggle("rotate");
  });
});

// .Company Arrow function
btn_company.addEventListener("click", () => {
  company_items.forEach((item) => {
    item.classList.toggle("active");
    arrow_btn_company.classList.toggle("rotate");
  });
});

// Menu close
menu_btn.addEventListener("click", (clicked) => {
  document.getElementById("container").classList.toggle("menu_active");
  menu_btn.src = active;

  if (document.getElementById("container").classList.contains("menu_active")) {
    menu_btn.src = close_menu;
  }
});
