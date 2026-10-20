import {animate, onScroll, stagger} from 'animejs'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all' 

gsap.registerPlugin(ScrollTrigger)

gsap.from('#nossa-missao-img',{
    scrollTrigger:{
        trigger: '#nossa-missao-img',
        start: 'top 95%',
        end: 'bottom 10%',
        scrub: true
    },
    opacity: 0,
    x: -50,
    duration: 1,

})

animate('.como-funciona__item',{
    translateY: [40, 0],
    delay: stagger(200),
    duration: 700,
    ease: 'outQuad',
    autoplay: onScroll({
        target: "#hom-into__container",
        enter: "top 10%",
    })
})

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

