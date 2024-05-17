window.addEventListener('scroll', ()=> {
   var header = document.querySelector('header')
   header.classList.toggle('sticky', window.scrollY > 0)
 })

let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.nav');

menu.addEventListener('click', ()=>{
   navbar.classList.toggle('active')
   if(navbar.classList.contains('active')) {
      menu.src = "./assets/images/icon-menu-close.svg"
   }else {
      menu.src ="./assets/images/icon-menu.svg"
   }


   window.onscroll = () => {
      menu.src= "./assets/images/icon-menu.svg"
      menu.classList.remove('active')
   }
})