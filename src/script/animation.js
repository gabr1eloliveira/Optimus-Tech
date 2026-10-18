import {animate, onScroll} from 'animejs'

animate('.home-into__title', {
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    ease: 'easeOutExpo',
})

animate ('#nossa-missao-img', {
    translateX: [-100, 0],
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    easing: 'easeOutExpo',

    autoplay: onScroll({
        target: '#nossa-missao-img',
        enter: 'bottom',
    })
})

