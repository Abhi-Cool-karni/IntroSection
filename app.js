const btn_feature = document.getElementById("btn-feature");
const feature_items = document.querySelectorAll(".feature_menu");

// let value = undefined;

btn_feature.addEventListener("click", () => {
  feature_items.forEach((item) => {
    item.classList.add("active");
    // if (item.classList.contains("active") > item.length) {
    //   item.classList.remove("active");
    // }
  });
});
