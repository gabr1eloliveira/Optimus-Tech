import {animate, onScroll, stagger} from "animejs"


//HOME
animate(".home-into__img, .home-into__title, .home-into__text, #home-into__buttons", {
    translateX: 60,
    duration: 1000,
    opacity: [0, 1],
    ease: "outQuad",
})

animate('.home-into__title', {
    clipPath: [
        'inset(0 100% 0 0)',
        'inset(0 0% 0 0)'
    ],
    duration: 1500,
    ease: 'outExpo'
});


//COMO FUNCIONA
animate(".como-funciona__item", {
    opacity: [0, 1],
    duration: 1000,
    translateY: [50, 0],
    delay: stagger(200),
    ease: "outQuad",
    autoplay: onScroll({
        target: "#home-into",
        enter: "top 60% bottom"
    })
})

animate(".como-funciona__title", {
    translateX: [50, 0],
    opacity: [0, 1],
    duration:1000,
    ease: "outQuad",
    autoplay: onScroll({
        target: "#home-into",
        enter: "top 40% bottom"
    })
})