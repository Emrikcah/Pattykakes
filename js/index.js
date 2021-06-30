import { usedInIndex } from "./menu.js";

//top mobile nav
const burger = document.getElementById("burger");
const menu = document.getElementById("mobile-menu");

burger.addEventListener("click", () => {
   menu.classList.toggle("hidden");
});

//order.html mobile nav
const chevron = document.getElementById("chevron-down");
const dropdown = document.getElementById("dropdown-nav");

chevron.addEventListener("click", () => {
   dropdown.classList.toggle("hidden");
});

//order.html inner nav filter
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
      displayMenuItems(menuCategory);
      menuTitle.textContent = category;
      menuTitleH1.textContent = category;
   });
});

const displayMenuItems = (menuItems) => {
   let displayMenu = menuItems.map((item) => {
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
   });
   displayMenu = displayMenu.join("");
   puthere.innerHTML = displayMenu;
};

//order.html form validation
//add border border-red-600 and show small tag on error
const form = document.getElementById("form");
const cusName = document.getElementById("customername");
const cusEmail = document.getElementById("customeremail");
const cusOrder = document.getElementById("customerorder");

//display the error
const showError = (input, msg) => {
   

   input.classList.add("border", "border-red-600");
   let small = input.nextElementSibling;

   small.classList.remove("invisible");
   small.classList.add("block");
   small.innerText = msg;
  
};


//check email
const checkEmail = (email) => {
   const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
};

form.addEventListener("submit", (e) => {
   

   if (cusName.value === "") {
      e.preventDefault();
      showError(cusName, "Your name is required");
   }
   if (cusEmail.value === "") {
      e.preventDefault();
      showError(cusEmail, "Your email is required");
   } else if (!checkEmail(cusEmail.value)) {
      showError(cusEmail, "Your email is not valid");
   }
   if (cusOrder.value === "") {
      e.preventDefault();
      showError(cusOrder, "Please place your order here. Item name and quantity.");
   }
});

//remove the red border on focus after an error
form.addEventListener('focus',(e)=>{
   if (e.target.classList.contains('border')) {
      e.target.classList.remove('border');
   }
},true)
