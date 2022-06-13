









let mainImage = document.getElementById("mainImage");
let images = Array.from(document.getElementsByClassName("images"));

console.log(images);
images.forEach((img) => {
  img.addEventListener("click", function () {
    imgId = this.src;
  });
});

document.addEventListener("click", function () {
  // alert(src);
  mainImage.src = imgId;
  // mainImage.alt ="imagehere";
  //    img1.src = src;

  // alert(mainImage.src);
});
