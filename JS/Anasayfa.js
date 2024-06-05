// Dropdown Menu Start
let dropMenu = document.getElementById("dropMenu");
function toogleMenu() {
  dropMenu.classList.toggle("open-menu");
}
// Aside-Bar Start
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
btn.onclick = function () {
  sidebar.classList.toggle("active");
};
// Check List Start
document.getElementById("checkbox-6").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("kebap").scrollIntoView({ behavior: "smooth" });
  }
});
document.getElementById("checkbox-5").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("yoresel").scrollIntoView({ behavior: "smooth" });
  }
});
document.getElementById("checkbox-7").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("firin").scrollIntoView({ behavior: "smooth" });
  }
});
document.getElementById("checkbox-8").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("fast-food").scrollIntoView({ behavior: "smooth" });
  }
});
document.getElementById("checkbox-9").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("icecek").scrollIntoView({ behavior: "smooth" });
  }
});
