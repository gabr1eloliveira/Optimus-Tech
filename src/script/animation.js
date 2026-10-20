import {animate, onScroll, stagger} from 'animejs'

animate('.home-into__title, .home-into__label, .home-into__text',{
    translateY: [40, 0],
    duration: 700,
    ease: 'outQuad',
    opacity: [0, 1]
})

animate('#home-into__buttons', {
    translateX: [40, 0],
    duration: 700,
    ease: 'outQuad',
    opacity: [0, 1]
})

animate('.como-funciona__item',{
    translateY: [40, 0],
    delay: stagger(200),
    duration: 200,
    ease: 'outQuad',
    autoplay: onScroll({
        target: "#hom-into__container",
        enter: "top 80%",
    })
})

animate('.nossa-missao__label, .nossa-missao__title, .nossa-missao__text', {
    translateX: [-40, 0],
    duration: 700,
    ease: 'outQuad',
    autoplay: onscroll({
        target: ".nossa-missao__container",
        enter: "top 90%"
    })
})

