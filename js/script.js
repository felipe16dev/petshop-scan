var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // cuando la ventana sea >= 320px
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 100
        },
        // cuando la ventana sea >= 640px
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 100
        },
        // cuando la ventana sea >= 1024px
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var checkboxMenu = document.getElementById('menu');
    var enlacesMenu = document.querySelectorAll('.nav-link');
    
    // Desactivar el checkbox cuando se hace clic en un enlace del menú
    enlacesMenu.forEach(function(enlace) {
        enlace.addEventListener('click', function() {
            checkboxMenu.checked = false;
        });
    });
});