import {animate, stagger, onScroll, splitText} from "animejs"

animate(".footer-social__icon", {
    rotate: 360,
    duration: 600,
    delay: stagger(200),
    autoplay: onScroll({
        target: ".nossa-missao",
        enter: "top 14% bottom"
    })
})