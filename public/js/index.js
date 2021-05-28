import { usedInIndex } from "./menu.js";

//top mobile nav
const menu = document.getElementById("mobile-menu");
const burger = document.getElementById("burger");


burger.addEventListener("click", () => {
   menu.classList.toggle("hidden");
});

//order.html mobile nav
const chevron = document.getElementById("chevron-down");
const dropdown = document.getElementById("dropdown-nav");

chevron.addEventListener("click", () => {
   dropdown.classList.toggle("hidden");
});

//order.html inner nav
const menuTitle = document.getElementById("menu-title");
const menuTitleH1 = document.getElementById("menu-title-h1");
const puthere = document.getElementById("put-here");
const filterNav = document.querySelectorAll(".filter");





filterNav.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      //grab the category from the dataset
      const category = e.currentTarget.dataset.id;

      const menuCategory = usedInIndex.filter((menuItem) => {
         if (menuItem.category === category) {
            
            return menuItem;
         }
      });
      displayMenuItems(menuCategory)
      menuTitle.textContent = category;
      menuTitleH1.textContent = category;
   });
});


const displayMenuItems = (menuItems) => {
   let displayMenu = menuItems.map((item)=>{
     return `<div class="w-72">
     <img
        class="mb-3 w-full h-56 object-cover object-center"
        src="${item.img}"
        alt=""
     />
     <h2 class="mb-3 text-xl font-bold text-gray-900">${item.title}</h2>
     <p>
       ${item.desc}
     </p>
  </div>`;
   })
   displayMenu = displayMenu.join("");
   puthere.innerHTML = displayMenu;
}

