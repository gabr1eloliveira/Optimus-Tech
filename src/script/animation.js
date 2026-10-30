import {animate} from "animejs"


//HOME
animate(".home-into__img, .home-into__title, .home-into__text, #home-into__buttons", {
    translateX: 60,
    duration: 1000,
    opacity: [0, 1],
    ease: "outQuad"
})

