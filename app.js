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

function scrollHalfPage() {
  if (window.scrollY >= halfPage) {
    openModal();
    window.removeEventListener("scroll", scrollHalfPage);
  }
}

window.addEventListener("scroll", scrollHalfPage);

closeBtn.addEventListener("click", closeModal);

// slider

$(".slider").slick({
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
});

// AOS
AOS.init();

// increment/decrement buttons

let decrementBtns = document.querySelectorAll(".decrement-btn");
let incrementBtns = document.querySelectorAll(".increment-btn");
let quantityInput = document.querySelectorAll(".product-quantity input");

function Counter(
  incrementBtn,
  decrementBtn,
  inputField,
  minCount = 1,
  maxCount = 5
) {
  this.domRefs = {
    incrementBtn: incrementBtn,
    decrementBtn: decrementBtn,
    inputField: inputField,
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
  };

  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );

  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

for (let i = 0; i < incrementBtns.length; i++) {
  let counter1 = new Counter(
    incrementBtns[i],
    decrementBtns[i],
    quantityInput[i]
  );
  console.log(counter1);
}

// incrementBtns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     let quantityInput = btn.parentNode.querySelector("input");
//     let currentValue = +quantityInput.value;
//     let nextValue = currentValue + 1;

//     if (nextValue >= 10) {
//       btn.disabled = true;
//     }

//     quantityInput.value = nextValue;

//     if (nextValue > 1) {
//       decrementBtns.forEach(function (btn) {
//         btn.disabled = false;
//       });
//     }
//   });
// });

// decrementBtns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     let quantityInput = btn.parentNode.querySelector("input");
//     let currentValue = +quantityInput.value;
//     let nextValue = currentValue - 1;

//     if (nextValue < 1) {
//       btn.disabled = true;
//     }

//     quantityInput.value = nextValue;

//     if (nextValue < 10) {
//       incrementBtns.forEach(function (btn) {
//         btn.disabled = false;
//       });
//     }
//   });
// });
