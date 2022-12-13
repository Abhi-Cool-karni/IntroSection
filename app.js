const btn_feature = document.getElementById("btn-feature");
const feature_items = document.querySelectorAll(".feature_menu");
const arrow_btn_feature = document.getElementById("arrowDown");
const arrow_btn_company = document.getElementById("arrowdown");
const btn_company = document.getElementById("btn-cmpny");
const company_items = document.querySelectorAll(".company_menu");
const menu_btn = document.getElementById("menu");

btn_feature.addEventListener("click", () => {
  feature_items.forEach((item) => {
    item.classList.toggle("active");
    arrow_btn_feature.classList.toggle("rotate");
  });
});

btn_company.addEventListener("click", () => {
  company_items.forEach((item) => {
    item.classList.toggle("active");
    arrow_btn_company.classList.toggle("rotate");
  });
});

menu_btn.addEventListener("click", () => {
  document.getElementById("container").style.visibility = "visible";
  menu_btn.classList.toggle("active");
  menu_btn.style.zIndex = 1;
  menu_btn.src = "./images/icon-close-menu.svg";
});

// To Add close functionality and background blurry and darkish.