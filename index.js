let menu=document.querySelector('#menu-icon')
let nav=document.querySelector('.nav-link')
menu.addEventListener('click',()=>{
    nav.classList.toggle('active')
})