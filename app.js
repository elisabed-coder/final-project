var slider_img = document.querySelector(".slider-img");
var images = [
  "slider-image-card (5).png",
  "slider-3-last.jpg",
  "slider-img-200.avif",
];
var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute("src", "images/" + images[i]);
}
