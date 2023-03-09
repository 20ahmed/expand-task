var images = Array.from(document.querySelectorAll(".img-fluid"));
let lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("boxItem");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", showItem);
}

function showItem(e) {
  lightBoxContainer.style.display = "flex";
  var imgSrc = e.target.src
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
