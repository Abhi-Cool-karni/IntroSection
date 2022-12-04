const btn_feature = document.getElementById("btn-feature");
const feature_items = document.querySelectorAll(".feature_menu");

btn_feature.addEventListener("click", () => {
  feature_items.forEach((item) => {
    item.classList.add("active");
    item.classList.toggle("hide");
  });
});

const btn_company = document.getElementById("btn-cmpny");
const company_items = document.querySelectorAll(".company_menu");

btn_company.addEventListener("click", () => {
  company_items.forEach((item) => {
    item.classList.add("active");
    item.classList.toggle("hide");
  });
});
