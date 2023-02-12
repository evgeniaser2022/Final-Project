let header = document.querySelector('.js-header');
let headerH = document.querySelector('.js-header').clientHeight;

document.onscroll = function () {   

    if (window.scrollY > headerH + 50) {
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
            const animStart = 100;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
              if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
                } else {
              if (!animItem.classList.contains('_anim-no-moov')) {            
                animItem.classList.remove('_active');
               }
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


const anchors = document.querySelectorAll('a[href*="#"]' && '.link_for_block');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const blockId = anchor.getAttribute('href').substr(1);
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        })
        document.getElementById(blockId).style= "display:block;animation:enter 3s 1;background: rgba(114,112,112,0.4)";
        anchor.style= "display: none"; 
    })
}


const races = document.querySelectorAll('a[href*="#"]' && '.link_for_race');
for (let race of races) {
        race.addEventListener('click', function(e) {
        e.preventDefault();
        
        const blockRace = race.getAttribute('href').substr(1);
        document.getElementById(blockRace).scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        })
        document.getElementById(blockRace).style= "display:block;animation:enter 3s 1";         
    })
}


let imageSlider = document.querySelector('.image-slider');

if (imageSlider) {
    new Swiper(imageSlider, {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.pagination',
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

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 35,
            },        
        },    
    });
}