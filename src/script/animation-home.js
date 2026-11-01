import {animate, onScroll, stagger} from "animejs"


//HOME
animate(".home-into__img, .home-into__title, .home-into__text, #home-into__buttons", {
    translateX: 20,
    duration: 1000,
    opacity: [0, 1],
    ease: "outQuad",
})

animate(".home-into__img", {
    clipPath: [
        'inset(0 100% 0 0)',
        'inset(0 0% 0 0)'
    ],
    duration:2000,
    delay: 400,
    ease: "outExpo",
})

animate('.home-into__title', {
    clipPath: [
        'inset(0 100% 0 0)',
        'inset(0 0% 0 0)'
    ],
    duration: 2000,
    ease: 'outExpo'
});


//COMO FUNCIONA
animate(".como-funciona__item", {
    opacity: [0, 1],
    duration: 500,
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

//NOSSA MISSÃO

animate(".nossa-missao__title, .nossa-missao .btn-primary",{
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    ease: "outExpo",
    autoplay: onScroll({
        target: "#como-funciona",
        enter: "top 50% bottom"
    })
})

animate(".nossa-missao__text", {
    translateX: [0, 30],
    opacity: [0, 1],
    duration: 1000,
    ease: "outExpo",
    delay: stagger(300),
    autoplay: onScroll({
        target: "#como-funciona",
        enter: "top 60% bottom"
    })
})

animate("#nossa-missao-img",{
    opacity: [0, 1],
    clipPath: [
        // Começa escondida
        { to: 'inset(0 98% 0% 0)', duration: 100 },

        // Revela um filete na esquerda
        { from: 'inset(0 98% 98% 0)', duration: 1000, ease: 'outExpo' },

        // Expande para a direita
        { to: 'inset(0 0% 0% 0)', duration: 1400, ease: 'outExpo'}
    ],
    autoplay: onScroll({
        target: "#como-funciona",
        enter: "top 50% bottom"
    })
})
