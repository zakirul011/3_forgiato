(function ($) {
   "use strict";

	/*=========================
	PRELOADER JS
	===========================*/
   $(window).on('load', function(event) {
		$('.loadingContainers').delay(500).fadeOut(500);
   }); 
   
	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
   });


   //js
      const newsImg = document.querySelectorAll(".news-img");
      newsImg.forEach((img) => {
         if (window.window.matchMedia("(max-width: 700px)").matches) {
            img.style.height = '250px'
         }else{
            img.style.height = `${img.parentElement.nextElementSibling.clientHeight}px`;
         }
      });

      //responsive-humberger-menu
      const menuList =  document.querySelector('.menu ul.main-menu')
      const menuBar =  document.querySelector('.menu-bar')
      const closeIcon =  document.querySelector('.close-icon')
      const activeOverLay =  document.querySelector('.menu-active-overlay')
      
      function humbergerMenu() {
         if (window.window.matchMedia("(max-width: 991px)").matches) {
            menuList.classList.add('active')
         }
         menuBar.addEventListener('click', ()=>{
            menuList.classList.add('show')
            document.querySelector('.menu-active-overlay').classList.add('active')
         })
         closeIcon.addEventListener('click', ()=>{
            menuList.classList.remove('show')
            activeOverLay.classList.remove('active')
         })
         activeOverLay.addEventListener('click', ()=>{
            menuList.classList.remove('show')
            activeOverLay.classList.remove('active')
         })
      }; humbergerMenu();
   
   // const newsImg = document.querySelectorAll(".news-img");
   // newsImg.forEach((img) => {
   //    img.style.height = `${img.parentElement.nextElementSibling.clientHeight}px`;
   // });

   //tab-active
   const faqBox = document.querySelectorAll(".faq-tab-box");
   faqBox.forEach((box) => {
      box.addEventListener("click", () => {
         if (box.classList[1] === "active") {
            box.classList.remove("active");
         } else {
            for (let i = 0; i < faqBox.length; i++) {
               faqBox[i].classList.remove("active");
            }
            box.classList.add("active");
         }
      });
   });

   //news js
   $(".news-area .row:nth-child(odd)").addClass("");
   $(".news-area .row:nth-child(even)").addClass("flex-row-reverse");

   // One Page Nav
   var top_offset = $(".header-area").height() - 10;
   $(".main-menu nav ul").onePageNav({
      currentClass: "active",
      scrollOffset: top_offset,
   });

   /*=========================
BRAND SLIDER
===========================*/

//shop-slider
   $(".shop-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

      responsive: [
         {
            breakpoint: 1199,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
   });


//duro-product-slider
   $(".duro-product-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

      responsive: [
         {
            breakpoint: 1199,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });
   

//product-card-slider
   $(".product-card-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

      responsive: [
         {
            breakpoint: 1199,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });
   
//gallery-slider
   $(".gallery-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
   });
   
   
//testimonial-slider
   $(".testimonial-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
   });
   
//product-slider
   $(".product-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

      responsive: [
         {
            breakpoint: 1199,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
   });


   /* magnificPopup img view */
   $(".popup-image").magnificPopup({
      type: "image",
      gallery: {
         enabled: true,
      },
   });

   /* magnificPopup video view */
   $(".play-wrapper a").magnificPopup({
      type: "iframe",
   });
   
   // scrollToTop
   $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "300", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "fade", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
   });

})(jQuery);
