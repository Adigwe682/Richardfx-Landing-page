const btn = document.getElementById('hammenu')
const overlay = document.getElementById('mobile-overlay')
const menu = document.getElementById('mobile-menu')
const close = document.getElementById('close')
btn.addEventListener('click', navToggle)
function navToggle() {
   overlay.classList.toggle('block')
   overlay.classList.toggle('hidden')
   menu.classList.toggle('right-0')
   menu.classList.toggle('right-[-300px]')
//    menuu.classList.toggle('hidden')
} 
close.addEventListener('click', Toggle)
function Toggle() {
    overlay.classList.toggle('hidden')
    overlay.classList.toggle('block')
    menu.classList.toggle('right-[-300px]')
    menu.classList.toggle('right-0')

 } 