// $(function() {
//     let upper = $('.upper');

//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 1) {
//             upper.addClass('upper_fixed');
//         } else {
//             upper.removeClass('upper_fixed');
//         }
//     });
// });


function viewTextEngine() {
    //  document.getElementsByClassName('hidden')[0].style= "animation: enter 10s 1";
    document.getElementsByClassName('hidden')[0].style= "opacity: 1";
    document.getElementsByClassName('link_for_block')[0].style= "opacity: 0";    
}

function viewTextWings() {
    document.getElementsByClassName('hidden')[1].style= "opacity: 1";
    document.getElementsByClassName('link_for_block')[1].style= "opacity: 0";    
}

function viewTextChassis() {
    document.getElementsByClassName('hidden')[2].style= "opacity: 1";
    document.getElementsByClassName('link_for_block')[2].style= "opacity: 0";    
}

function viewTextTires() {
    document.getElementsByClassName('hidden')[3].style= "opacity: 1";
    document.getElementsByClassName('link_for_block')[3].style= "opacity: 0";    
}

new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    
    keyboard: {
        pageUpDown: true,
    },
    autoHeight: true,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false        
    },
    speed: 900,
    
       // АДАПТИВ! НО ЭТО КОГДА НЕСКОЛЬКО СЛАЙДОВ НА ЭКРАНЕ.
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 1, 
    //     }
    //     992: {
    //         slidesPerView: 1,
    //     }
    // },


});
