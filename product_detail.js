/* -----------------이미지 변경----------------- */
function toggleImg1() {
  const detailImg = document.getElementById("detail_img");
  detailImg.src = "./assets/images/sexbomb.png";
  detailImg.style.animation = "openImg 0.3s ease";
  detailImg.addEventListener("animationend", () => {
    detailImg.style.animation = "";
  });
}
function toggleImg2() {
  const detailImg = document.getElementById("detail_img");
  detailImg.src = "./assets/images/sexbomb1.webp";
  detailImg.style.animation = "openImg 0.3s ease";
  detailImg.addEventListener("animationend", () => {
    detailImg.style.animation = "";
  });
}
function toggleImg3() {
  const detailImg = document.getElementById("detail_img");
  detailImg.src = "./assets/images/sexbomb2.jpeg";
  detailImg.style.animation = "openImg 0.3s ease";
  detailImg.addEventListener("animationend", () => {
    detailImg.style.animation = "";
  });
}

function toggleImg4() {
  const detailImg = document.getElementById("detail_img");
  detailImg.src = "./assets/images/intergalactic.png";
  detailImg.style.animation = "openImg 0.3s ease";
  detailImg.addEventListener("animationend", () => {
    detailImg.style.animation = "";
  });
}
function toggleImg5() {
  const detailImg = document.getElementById("detail_img");
  detailImg.src = "./assets/images/intergalactic1.jpg";
  detailImg.style.animation = "openImg 0.3s ease";
  detailImg.addEventListener("animationend", () => {
    detailImg.style.animation = "";
  });
}
function toggleImg6() {
  const detailImg = document.getElementById("detail_img");
  detailImg.src = "./assets/images/intergalactic2.jpg";
  detailImg.style.animation = "openImg 0.3s ease";
  detailImg.addEventListener("animationend", () => {
    detailImg.style.animation = "";
  });
}

function toggleImg7() {
  const detailImg = document.getElementById("detail_img");
  detailImg.src = "./assets/images/goddess.png";
  detailImg.style.animation = "openImg 0.3s ease";
  detailImg.addEventListener("animationend", () => {
    detailImg.style.animation = "";
  });
}
function toggleImg8() {
  const detailImg = document.getElementById("detail_img");
  detailImg.src = "./assets/images/goddess1.jpg";
  detailImg.style.animation = "openImg 0.3s ease";
  detailImg.addEventListener("animationend", () => {
    detailImg.style.animation = "";
  });
}
function toggleImg9() {
  const detailImg = document.getElementById("detail_img");
  detailImg.src = "./assets/images/goddess2.webp";
  detailImg.style.animation = "openImg 0.3s ease";
  detailImg.addEventListener("animationend", () => {
    detailImg.style.animation = "";
  });
}

/* -----------------상품 슬라이드----------------- */
const slides = document.querySelector(".slides");
const slideImg = document.querySelectorAll(".slides li");
let currentIdx = 0;
const slideCount = slideImg.length;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideWidth = 300;
const slideMargin = 30;

slides.style.width = (slideWidth + slideMargin) * slideCount + "px";

function moveSlide(num) {
  slides.style.left = -num * 330 + "px";
  currentIdx = num;
}

prev.addEventListener("click", function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener("click", function () {
  if (currentIdx !== slideCount - 3) {
    moveSlide(currentIdx + 1);
  }
});

/* -----------------수량 변경----------------- */
window.onload = () => {
  count();
};

function count(type) {
  const resultElement = document.getElementById("result");
  let number = resultElement.innerText;

  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    number = parseInt(number) - 1;
  }

  const decreaseBtn = document.getElementById("decrease_amount");
  if (number <= 1) {
    decreaseBtn.disabled = true;
  } else {
    decreaseBtn.disabled = false;
  }

  resultElement.innerText = number;
}

/* -----------------모달창 띄우기----------------- */
const modal = document.getElementById("modal");
const btnModal = document.getElementById("btn_modal");
const closeBtn = modal.querySelector(".close_btn");

function modalOn() {
  modal.style.display = "flex";
}
function isModalOn() {
  return modal.style.display === "flex";
}
function modalOff() {
  modal.style.display = "none";
}

btnModal.addEventListener("click", (e) => {
  modalOn();
});

closeBtn.addEventListener("click", (e) => {
  modalOff();
});

modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal_overlay")) {
    modalOff();
  }
});

window.addEventListener("keyup", (e) => {
  if (isModalOn() && e.key === "Escape") {
    modalOff();
  }
});
