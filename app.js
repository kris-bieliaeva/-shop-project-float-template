// cart counter

let productsCount = document.getElementById("productsCount");
console.log(productsCount);

let addToCartBtns = document.querySelectorAll(".add-to-cart");
console.log(addToCartBtns);

let count = 0;

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productsCount.textContent = ++count;
  });
}

// like on click

let like = document.querySelectorAll(".like-icon");
console.log(like);

like.forEach(function (like) {
  like.addEventListener("click", function () {
    like.classList.toggle("like-icon-clicked");
  });
});
