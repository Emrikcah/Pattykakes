import { usedInIndex } from "./menu.js";

//top mobile nav
const menu = document.getElementById("mobile-menu");
const burger = document.getElementById("burger");
console.log(menu);

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
const puthere = document.getElementById('put-here');
const filterNav = document.querySelectorAll(".filter");

filterNav.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      //grad the category from the dataset
      const category = e.currentTarget.dataset.id;

      const menuCategory = usedInIndex.filter((menuItem) => {
         if (menuItem.category === category) {
            console.log(menuItem);
            return menuItem;
         }
      });
      displayMenuItems(menuCategory);
      menuTitle.textContent = category;
      menuTitleH1.textContent = category;
   });
});

const displayMenuItems = (menuItems) => {
   let displayMenu = menuItems.map((item)=>{
      return ` <img
      class="mb-3 w-full h-56 object-cover object-center"
      src=${item.img}"
      alt=""
   />`
   })
   displayMenu = displayMenu.join("");
   puthere.innerHTML = displayMenu;
}
