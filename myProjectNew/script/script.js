let header = document.querySelector('.js-header');
let headerH = document.querySelector('.js-header').clientHeight;
console.log(headerH);

document.onscroll = function () {
    let scroll = window.scrollY;
    console.log(scroll);
    if (scroll > headerH + 50) {
        header.classList.add('fixed');
        document.body.style.paddingTop = headerH + 'px';
    } else {
        header.classList.remove('fixed');
        document.body.removeAttribute('style');
    }
}




let menuBurger = document.querySelector('.menu_burger');
let menu = document.querySelector('.menu');
menuBurger.addEventListener('click', function(){
	menu.classList.toggle('active');
})




const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 8;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

           if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
           } else {
            animItem.classList.remove('_active');
           }
        }  
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}



// function viewTextEngine() {
//     //  document.getElementsByClassName('hidden')[0].style= "animation: enter 10s 1";
//     document.getElementsByClassName('hidden')[0].style= "opacity: 1";
//     document.getElementsByClassName('link_for_block')[0].style= "opacity: 0"; 
// }

// function viewTextWings() {
//     document.getElementsByClassName('hidden')[1].style= "opacity: 1";
//     document.getElementsByClassName('link_for_block')[1].style= "opacity: 0";    
// }

// function viewTextChassis() {
//     document.getElementsByClassName('hidden')[2].style= "opacity: 1";
//     document.getElementsByClassName('link_for_block')[2].style= "opacity: 0";    
// }

// function viewTextTires() {
//     document.getElementsByClassName('hidden')[3].style= "opacity: 1";
//     document.getElementsByClassName('link_for_block')[3].style= "opacity: 0";    
// }


//ОТКРЫТИЕ ЯКОРНЫХ ССЫЛОК!!!

const anchors = document.querySelectorAll('a[href*="#"]' && '.link_for_block');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const blockId = anchor.getAttribute('href').substr(1);
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        })
        document.getElementById(blockId).style= "opacity: 1;animation:enter 3s 1;background: rgba(114,112,112,0.4)";
        anchor.style= "display: none"; 
    })
}





function showTextRace1() {
    let elem = document.querySelector('#hidden_race1'); 
    elem.style.display = 'block';
    elem.style.animation = 'enter 3s 1';
}

function showTextRace2() {
    let elem = document.querySelector('#hidden_race2'); 
    elem.style.display = 'block';
    elem.style.animation = 'enter 3s 1';
}

function showTextRace3() {
    let elem = document.querySelector('#hidden_race3'); 
    elem.style.display = 'block';
    elem.style.animation = 'enter 3s 1';
}

function showTextRace4() {
    let elem = document.querySelector('#hidden_race4'); 
    elem.style.display = 'block';
    elem.style.animation = 'enter 3s 1';
}

function showTextRace5() {
    let elem = document.querySelector('#hidden_race5'); 
    elem.style.display = 'block';  
    elem.style.animation = 'enter 3s 1';  
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


// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         const id = smoothLink.getAttribute('href');

//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// };


