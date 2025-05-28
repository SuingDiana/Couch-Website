// Toggle Navbar
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
};


//Initialize Gallery Swiper Section
var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

//Initialize Product Swiper Section
var swiper = new Swiper(".product-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: -50, // Reversed direction
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

//Initialize Review Swiper Section
var swiper = new Swiper(".review-slider", {
    loop: true,
        spaceBetween: 20,

        autoplay: {
            delay: 5500,
            disableOnInteraction:false
        },

        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1020: {
             slidesPerView: 3,
            },
        },
    });

//FAQs page
var acc = document.getElementsByClassName("accordion");
    var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            this.parentElement.classList.toggle("active");

            var pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
            pannel.style.display = "none";
        } 
        else{
            pannel.style.display = "block";
          }
        });
    }


