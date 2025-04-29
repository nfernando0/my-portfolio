var btnMenu = document.getElementById("menu");
var ul = document.querySelector(".ul");

btnMenu.addEventListener("click", function (e) {
  e.preventDefault();

  ul.classList.toggle("block");
});
