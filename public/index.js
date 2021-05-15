//grab what i need
const  menu = document.getElementById('mobile-menu');
const burger = document.getElementById('burger');
console.log(menu);

burger.addEventListener('click',()=>{
   menu.classList.toggle('hidden');
})