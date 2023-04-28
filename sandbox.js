const navBtn = document.querySelector('.nav-btn');
const MenuUp = document.querySelector('.menu-up');
const navClose = document.querySelector('.nav-close');
const navLink = document.querySelectorAll('.menu-up li a');


if(navBtn){navBtn.addEventListener('click', () => {
    MenuUp.classList.add('show-menu')
})
} 
if(navClose){
  navClose.addEventListener('click', () => {
    MenuUp.classList.remove('show-menu')
  })
}

function linkAction(){
  const menuLink = document.querySelector('.menu-up')
  menuLink.classList.remove('show-menu')
}
navLink.forEach(e => e.addEventListener('click', linkAction))

const readMoreBtn = document.querySelector('.read-more');
const readContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
  readContent.classList.toggle('showContent');
  if(readContent.classList.contains('showContent')){
    readMoreBtn.textContent = 'Show Less'
  } else {
    readMoreBtn.textContent = 'Show More'

  }
})



let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
  delay: 100000,
  disableOnInteraction: true,
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
}});