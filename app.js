const btn_feature = document.getElementById("btn-feature");
const feature_items = document.querySelectorAll(".feature_menu");
const arrow_btn_feature = document.getElementById("arrowDown");
const arrow_btn_company = document.getElementById("arrowdown");

btn_feature.addEventListener("click", () => {
  feature_items.forEach((item) => {
    item.classList.toggle("active");
    arrow_btn_feature.classList.toggle("rotate");
  });
});

const btn_company = document.getElementById("btn-cmpny");
const company_items = document.querySelectorAll(".company_menu");

btn_company.addEventListener("click", () => {
  company_items.forEach((item) => {
    item.classList.toggle("active");
    arrow_btn_company.classList.toggle("rotate");
  });
});

