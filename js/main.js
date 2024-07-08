const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 14,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(inputs);

const unsendStateElem = document.querySelector(".unsent");
const successStateElem = document.querySelector(".form__success");
const sendBtn = document.querySelector(".form__button");

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();

  unsendStateElem.classList.toggle("hidden");
  successStateElem.classList.toggle("hidden");
});


const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
  e.preventDefault();
  let currentBox = e.target.closest(".box");
  let currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle("active");
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}

const anchors = document.querySelectorAll('[href*="#"]', 'button[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};

let elY = 0;
let scrollY = 0;
window.addEventListener("scroll", function() {
    const el = document.querySelector('.header');
    const height = el.offsetHeight;
    const pos = window.pageYOffset;
    const diff = scrollY - pos;

    elY = Math.min(0, Math.max(-height, elY + diff));
    el.style.position = pos >= height ? 'fixed' : pos === 0 ? 'absolute' : el.style.position;
    el.style.transform = `translateY(${el.style.position === 'fixed' ? elY : 0}px)`;

    scrollY = pos;
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
  })
});

let burgerMenu = document.getElementById('burger');
let overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
overlay.addEventListener('click', function(e) {
  if (e.target.matches('a')) {
    overlay.classList.remove('overlay');
    burgerMenu.classList.remove('close');
  }  
});