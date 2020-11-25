const visible = function (target, element) {
    const animated = "animated";
    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней части окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней части окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой части окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        // return element ? element.classList.add(animated) : target.classList.add(animated);
        if(target.offsetParent){
            if(target.offsetParent.classList.contains('banner-info')){
                return element ? element.classList.add(animated) : target.offsetParent.classList.add(animated);
            }
        }
        
        if(target.offsetParent || element.offsetParent){
            return element ? element.classList.add(animated) : target.classList.add(animated);
        } else{
            return element ? element.classList.add(animated) : target.classList.add(animated);
        }
        
    } else {
        if(target.offsetParent){
            if(target.offsetParent.classList.contains('banner-info')){
                return element ? element.classList.remove(animated) : target.offsetParent.classList.remove(animated);
                }
        }
        if(target.offsetParent ){
            return element ? element.classList.remove(animated) : target.classList.remove(animated);
        } else{
            return element ? element.classList.remove(animated) : target.classList.remove(animated);
        }// Если элемент не видно, то запускаем этот код
    };
};

function animation(nodeElements, nodeElement) {

    // Получаем нужный элемент
    const NodeElements = document.querySelectorAll(nodeElements);
    let NodeElement;
    if (NodeElements && nodeElement) {
        NodeElements.forEach((element) => {
            NodeElement = element.querySelector(nodeElement);
        });
    } 
    if(NodeElement == null){
        NodeElement = document.querySelector(nodeElement);
    }

    if (NodeElements || NodeElement) {
        NodeElements.forEach((element) => {
            visible(element, NodeElement);
        });
    }
}

function animations() {
    // Получаем нужный элемент
    // animation('.classNameForAnimate'); // css class который включает анимацию
    // animation('.class', '.class-from'); // .class -> секция которая должна анимироваться .class-from -> место откуда будет начинаться анимация когда достигнет window.bottom > 0
    // animation('.skills', '.skills-content');
    animation('.isAnimate');
    animation('.banner .page__title-h1', '.banner');
    // animation('.banner-info .img-bg');
    animation('.article .article-items', '.article');
    animation('.img-bg_tiger', '.img-bg_tiger');
    animation('.img-bg_leafs', '.img-bg_leafs');
    animation('.img-bg_bird', '.img-bg_bird');
    animation('.ration-menu .slider', '.ration-menu');
    animation('.menu .menu-content__text', '.menu');
    animation('.advantages ', '.advantages');
    animation('.ration-info ', '.ration-info');
    animation('.ration-form ', '.ration-form');
    animation('.eco ', '.eco');
    animation('.eco-slider ', '.eco-slider');
    animation('.testimonials ', '.testimonials');
    animation('.form-callback ', '.form-callback');
    
   
}

window.addEventListener('scroll', function () {
    animations();
});

animations();
