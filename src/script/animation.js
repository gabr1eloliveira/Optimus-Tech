import { animate, stagger, onScroll } from "animejs";

animate(".como-funciona__item", {
    translateY: [30, 0],
    delay: stagger(200),
    duration: 700,
    ease: "outQuad",

    autoplay: onScroll({
        target: "#home-into",
        enter: " top"
    })
});

