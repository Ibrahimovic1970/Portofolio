// src/pages/About.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
    const containerRef = useRef();
    const aboutTextRef = useRef();
    const statsRef = useRef();

    useEffect(() => {
        // Animasi teks utama
        gsap.from(aboutTextRef.current, {
            opacity: 1,
            y: 50,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: aboutTextRef.current,
                start: 'top 80%',
            },
        });

        // Animasi statistik (counter)
        gsap.from(statsRef.current.children, {
            opacity: 1,
            y: 30,
            duration: 1.2,
            ease: 'power2.out',
            stagger: 0.3,
            scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 80%',
            },
        });

        // Parallax ringan
        gsap.to(containerRef.current, {
            y: -10,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    return (
        <section className="section" ref={containerRef}>
            <div className="container">
                <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">About Me</h2>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Deskripsi Utama */}
                    <div ref={aboutTextRef} className="about-text space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-yellow-300 mb-3">Frontend Development</h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I focus on developing modern, responsive, and interactive websites using React, Vite, GSAP, and JavaScript. For me, frontend development isn't just about code; it's also about delivering a clean UI, vibrant animations, and a seamless user experience.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-yellow-300 mb-3">Mikrotik Networks</h3>
                            <p className="text-gray-300 leading-relaxed">
                                I've also studied and deepened my knowledge of Mikrotik networks, from network setup and router configuration to bandwidth management and firewall settings. Using these skills, I strive to ensure the system remains stable, secure, and well-connected.
                            </p>
                        </div>
                    </div>

                    {/* Pendidikan & Info Tambahan */}
                    <div className="space-y-8">
                        {/* Pendidikan */}
                        <div className="card bg-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Education</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li><strong>SMK TI Bazma</strong>, Bogor</li>
                                <li><strong>Graduated:</strong> 2027</li>
                                <li><strong>Major:</strong> FrontEnd & Network Mikrotik</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;