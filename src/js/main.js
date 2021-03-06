

let bottle = document.getElementById('bottle');
let bannerInfo = document.querySelector('.banner-info');
let classBg = 'banner-info_bg-green';
let imgBannerInfo = bannerInfo.querySelectorAll('.img-bg_center');
let valueTop, valueleft;
let breakPointsMmd = 1550;
let breakPointsMd = 1280;
let breakPointsSm = 1024;

let serfer = document.querySelector('.img-bg_serfer');
let holybottle = document.querySelector('.img-bg_holybottle');
let fish = document.querySelector('.img-bg_fish');


w = document.documentElement.offsetWidth,
h = document.documentElement.offsetHeight;
function transformElemenOnMouse(element,evt,positionTop, positionY, startX,startY, w, h){
    var posX = Math.round(evt.clientX / w * startX)
    var posY = Math.round(evt.clientY / h * startY)
    element.style.left = posX + '%';
    if(positionTop){
        element.style.top = positionY + posY + '%';
    }else{
        element.style.bottom = positionY + posY + '%';
    }
    
}
document.addEventListener('mousemove', function(evt){
    transformElemenOnMouse(serfer, evt,undefined,1, 8, 100, w, h);
    transformElemenOnMouse(holybottle, evt,'top',0, 2, 100, w, h);
    transformElemenOnMouse(fish, evt,undefined,20, 5, 100, w, h);
})


function animateBottle(value, valueStart, valueTop, valueleft, percentTop, percentLeft, transform, transform2) {
    if (value <= 90) {
        bottle.style.top = valueTop + '%';
        bottle.style.left = valueleft + '%';
        bottle.style.transform = transform;
    } else if (value <= valueStart) {
        bottle.style.top = valueTop + (value * percentTop) + '%';
        bottle.style.left = valueleft - (value * percentLeft) + '%';
        bannerInfo.classList.remove('animated');
    } else if (value > valueStart) {

        bottle.style.top = 50 + '%';
        bottle.style.left = 50 + '%';

        bottle.style.transform = transform2;
        bannerInfo.classList.add('animated');
        // bottle.style.transform = 'translate(-46%, -42%) rotate(20deg)';
    } else {
        return;
    }
}

window.addEventListener('scroll', (e) => {
    let value = window.scrollY;

    if (document.body.clientWidth < breakPointsMd) {
        valueTop = -38;
        valueleft = 80;
        valueStart = 300;
        percentTop = 0.15;
        percentLeft = 0.05;
        transform = 'translate(-35%, -55%) rotate(0deg)';
        transform2 = 'translate(-44%, -42%) rotate(20deg)';
        animateBottle(value,valueStart, valueTop, valueleft, percentTop, percentLeft,transform, transform2);
    }
    else if (document.body.clientWidth <= breakPointsMmd && document.body.clientWidth > breakPointsSm) {
        valueTop = -38;
        valueleft = 80;
        valueStart = 600;
        percentTop = 0.15;
        percentLeft = 0.05;
        transform = 'translate(-18%, -42%) rotate(0deg)';
        transform2 = 'translate(-44%, -42%) rotate(20deg)';
        animateBottle(value,valueStart, valueTop, valueleft,percentTop,percentLeft,transform,transform2);
    }
    else if (document.body.clientWidth > breakPointsMmd) {
        valueTop = -38;
        valueleft = 80;
        valueStart = 600;
        percentTop = 0.15;
        percentLeft = 0.05;
        transform = 'translate(-44%, -42%) rotate(0deg)';
        transform2 = 'translate(-44%, -42%) rotate(20deg)';
        animateBottle(value,valueStart, valueTop, valueleft,percentTop,percentLeft,transform,transform2);
    }
     else {
        return false;
    }

});
function addCurrentIndexOfSlider(sliderName, slider) {
    let elementNavNumberActive = document.querySelector(`${sliderName} .slider__nav-number.active`);
    let elementNavNumbers = document.querySelectorAll(`${sliderName} .slider__nav-number`);
    elementNavNumberActive.innerHTML = '0' + slider.getInfo().displayIndex;
    elementNavNumbers[1].innerHTML = '0' + slider.getInfo().slideCount;
    let rationMenuBtns = document.querySelectorAll(`${sliderName} .page__btn_prev,${sliderName} .page__btn_next`);
    rationMenuBtns.forEach((e) => {
        e.onclick = function () {
            elementNavNumberActive.innerHTML = '0' + slider.getInfo().displayIndex;
        };
    });
}

var sliderRationMenu = tns({
    container: '#rationMenu .slider__continer',
    items: 1,
    center: true,
    loop: false,
    prevButton: '#rationMenu .page__btn_prev',
    nextButton: '#rationMenu .page__btn_next',
    mouseDrag: true,
    nav: false,
    slideBy: 2.2
});

addCurrentIndexOfSlider('.ration-menu', sliderRationMenu);
let rationMenuNavNumberActive = document.querySelector('.ration-menu .slider__nav-number.active');
let rationMenuNavNumber = document.querySelectorAll('.ration-menu .slider__nav-number');
rationMenuNavNumberActive.innerHTML = '0' + sliderRationMenu.getInfo().displayIndex;
rationMenuNavNumber[1].innerHTML = '0' + sliderRationMenu.getInfo().slideCount;
let rationMenuBtns = document.querySelectorAll('#rationMenu .page__btn_prev, #rationMenu .page__btn_next');
rationMenuBtns.forEach((e) => {
    e.onclick = function () {
        rationMenuNavNumberActive.innerHTML = '0' + sliderRationMenu.getInfo().displayIndex;
    };
});


var sliderEco = tns({
    container: '.eco-slider .slider__continer',
    items: 1,
    center: true,
    loop: false,
    prevButton: '.eco-slider .page__btn_prev',
    nextButton: '.eco-slider .page__btn_next',
    mouseDrag: true,
    nav: false,
});
addCurrentIndexOfSlider('.eco-slider', sliderEco);

var sliderTestimonial = tns({
    container: '.testimonials .slider__continer',
    items: 2,
    responsive: {
        640: {
            items: 1
        },
        1024: {
          items: 1
        },
        1025: {
            items: 2
          },
    },
    center: false,
    loop: false,
    prevButton: '.testimonials .page__btn_prev',
    nextButton: '.testimonials .page__btn_next',
    mouseDrag: true,
    nav: false,
});
addCurrentIndexOfSlider('.testimonials', sliderTestimonial);



window.addEventListener('scroll', function () {
    if (document.body.clientWidth <= 768) {
        document.querySelector('.header').classList.add('header-open');
    } else {
        document.querySelector('.header').classList.remove('header-open');
    }
});

// let video = document.getElementById('videoRationInfo');
let videos = document.querySelectorAll('.slide__video');
videos.forEach((e) => {
    let video = e.querySelector('video');
    let iconVideo = e.querySelector('.page__icon_video');
    video.addEventListener('play', (e)=>{
        iconVideo.classList.add('page_hidden');
    });
    video.addEventListener('pause', (e)=>{
        iconVideo.classList.remove('page_hidden');
    });
    iconVideo.addEventListener('click', (e) => {
        e.target.classList.add('page_hidden');
        // console.log(video);
        video.play();

    });
});

let cost = document.querySelector('.cost');
var days = document.querySelectorAll('input[name$="day"]');
var kl = document.querySelectorAll('input[name$="kl"]');
var kl1 = 1300;
var kl2 = 1800;
//1300kl: 1 = 1.800 / 3 = 1.700 / 7 = 1.600
//1800kl: 1 - 2.200 / 3 - 2.100 / 7 - 2.000

function checkInput() {
    kl.forEach((element) => {
        if (element.checked) {
            if (+element.dataset.form === kl1) {
                cost.innerText = element.dataset.form;
                days.forEach((el) => {
                    if (el.checked) {
                        if (+el.dataset.form === 1) {
                            cost.innerText = '1.800';
                        } else if (+el.dataset.form === 3) {
                            cost.innerText = '1.700';
                        } else if (+el.dataset.form === 7) {
                            cost.innerText = '1.600';
                        }
                    }
                });
            } else if (+element.dataset.form === kl2) {
                cost.innerText = element.dataset.form;
                days.forEach((el) => {
                    if (el.checked) {
                        if (+el.dataset.form === 1) {
                            cost.innerText = '2.200';
                        } else if (+el.dataset.form === 3) {
                            cost.innerText = '2.100';
                        } else if (+el.dataset.form === 7) {
                            cost.innerText = '2.000';
                        }
                    }
                });
            } else {
                return false;
            }
        }
    });

}
days.forEach((el) => {
    el.addEventListener('click', (e) => {
        checkInput();
    });
});
kl.forEach((el) => {
    el.addEventListener('click', (e) => {
        checkInput();
    });
});
checkInput();