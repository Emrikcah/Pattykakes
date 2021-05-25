//top mobile nav
const  menu = document.getElementById('mobile-menu');
const burger = document.getElementById('burger');
console.log(menu);

burger.addEventListener('click',()=>{
   menu.classList.toggle('hidden');
})

//order.html mobile nav
const chevron = document.getElementById('chevron-down');
const dropdown = document.getElementById('dropdown-nav');

chevron.addEventListener('click',()=>{
   dropdown.classList.toggle('hidden');
})