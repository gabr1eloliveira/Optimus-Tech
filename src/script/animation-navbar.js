import {animate, stagger} from "animejs"

animate(".logo img", {
    scale: [1, 1.3, 1],
    duration: 1000,
    
    ease: "outExpo"
})

animate(".logo-name", {
    clipPath: [
        'inset(0 100% 0 0)',
        'inset(0 0% 0 0)'
    ],
    duration:1000,
    delay: 500,
    translateX: 15,
    ease: "outExpo"
})

//NAVBAR LIST

animate('.nav-menu a', {
    y: [-15, 0],
    opacity: [0, 1],
    delay: stagger(120),
    duration: 700,
    ease: 'outExpo'
});