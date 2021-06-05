$(document).ready(()=>{
   $('#slideshow #slick').slick({
      nextArrow: '<svg class="w-8 h-8 absolute top-2/4 right-10 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>',
      prevArrow: '<svg class="w-8 h-8 absolute top-2/4 left-10 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>',
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false
   });
})