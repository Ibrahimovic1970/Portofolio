// gsapAnimation.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = () => {
    gsap.from('.animate-left', {
        opacity: 1,
        x: -50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.animate-left',
            start: 'top 80%',
        },
    });

    gsap.from('.animate-right', {
        opacity: 1,
        x: 50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.animate-right',
            start: 'top 80%',
        },
    });

    gsap.from('.animate-up', {
        opacity: 1,
        y: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.animate-up',
            start: 'top 85%',
        },
    });

    gsap.from('.fade-in', {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.fade-in',
            start: 'top 90%',
        },
    });
};