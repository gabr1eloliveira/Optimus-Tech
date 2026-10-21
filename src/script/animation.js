//ANIME.JS
import {animate, onScroll, stagger} from 'animejs'
//HOME
animate('.home-into__title, .home-into__label, .home-into__text',{
    translateY: [40, 0],
    duration: 1000,
    ease: 'outQuad',
    opacity: [0, 1]
})

animate('#home-into__buttons', {
    translateX: [40, 0],
    duration: 1000,
    ease: 'outQuad',
    opacity: [0, 1]
})

animate('.como-funciona__item',{
    translateY: [40, 0],
    delay: stagger(200),
    duration: 200,
    ease: 'outQuad',
    autoplay: onScroll({
        target: "#como-funciona",
        enter: "top -100%",
    })
})

animate(".nossa-missao__img", {
    width: "100%",
    ease: "outQuad",
        autoplay: onScroll({
        target: ".nossa-missao",
        enter: "top -100%",
        })
});

