import { useEffect } from 'react';
import { gsap } from 'gsap';

const About = () => {
    useEffect(() => {
        gsap.from('.about-text', {
            opacity: 1,
            y: 5,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-text',
                start: 'top 80%',
            },
        });
    }, []);

    return (
        <section className="section">
            <div className="container">
                <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">About Me</h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="about-text">
                        <p className="text-lg text-gray-300 leading-relaxed mt-6">
                            <h3 className="text-lg text-yellow-300 leading-relaxed mt-6">Frontend Development</h3>
                            I focus on developing modern, responsive, and interactive websites using React, Vite, GSAP, and JavaScript. For me, frontend development isn't just about code; it's also about delivering a clean UI, vibrant animations, and a seamless user experience.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            <h3 className="text-lg text-yellow-300 leading-relaxed mt-6">Mikrotik Networks</h3>
                            I've also studied and deepened my knowledge of Mikrotik networks, from network setup and router configuration to bandwidth management and firewall settings. Using these skills, I strive to ensure the system remains stable, secure, and well-connected.
                        </p>
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