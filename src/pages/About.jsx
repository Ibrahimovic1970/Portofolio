// src/pages/About.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
    const containerRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        // Animasi saat muncul
        gsap.from(containerRef.current, {
            opacity: 1,
            y: 30,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
        });

        // Animasi teks
        gsap.from(textRef.current, {
            opacity: 1,
            y: 50,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 80%',
            },
        });
    }, []);

    return (
        <section className="section">
            <div className="container" ref={containerRef}>
                <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">About Me</h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div ref={textRef} className="about-text">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            I'm a passionate developer with over 3 years of experience in building scalable web applications using React, Node.js, and modern tools.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            I love turning ideas into reality through clean code and thoughtful design. When I'm not coding, you can find me exploring new tech or contributing to open-source.
                        </p>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-yellow-400">Skills</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>React, Vite, Tailwind CSS</li>
                                <li>JavaScript, TypeScript</li>
                                <li>Mikrotik, Network Configuration</li>
                                <li>GSAP, Animation & UX</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card bg-gray-800 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-4">Education</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>SMK TI Bazma, Bogor</li>
                            <li>Graduated: 2027</li>
                            <li>FrontEnd & Network Mikrotik</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;