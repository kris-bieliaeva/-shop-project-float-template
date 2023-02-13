// cart counter

let productsCount = document.getElementById("productsCount");
let addToCartBtns = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productsCount.textContent = +productsCount.textContent + 1;
  });
}

// like on click

let like = document.querySelectorAll(".like-icon");
console.log(like);

like.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("like-icon-clicked");
  });
});

// modal window more details

let moreDetailsBtn = document.querySelectorAll(".details");
let modalWindow = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

function openModal() {
  modalWindow.classList.add("show");
}

function closeModal() {
  modalWindow.classList.remove("show");
}

moreDetailsBtn.forEach((item) => {
  item.addEventListener("click", openModal);
});

// modal while scroll

const pageHeight = document.body.scrollHeight;
const halfPage = pageHeight / 2;
window.addEventListener("scroll", function () {
  if (window.scrollY >= halfPage) {
    openModal();
  }
});

closeBtn.addEventListener("click", closeModal);

// slider

$(".slider").slick({
  dots: true,
  arrows: true,
  // autoplay: true,
  // autoplaySpeed: 1000,
});
