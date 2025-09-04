// src/components/Hero.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const containerRef = useRef(); // ✅ Ref untuk section

    useEffect(() => {
        gsap.from('.hero-text', {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current, // ✅ Sekarang terhubung
                start: 'top 80%',
            },
        });
    }, []);

    return (
        <section className="section" ref={containerRef}> {/* ✅ containerRef dipasang */}
            <div className="container">
                <div className="hero-text">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hi, I'm <span className="text-yellow-400">Ahmad Ibrahimovic</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-6">
                        Frontend & Network Engineer from Bogor, Indonesia.
                    </p>
                    <a href="/projects" className="btn">View My Work</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;