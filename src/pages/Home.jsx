// src/pages/Home.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import profileImg from '../assets/orang.jpg';

const Home = () => {
    const heroTextRef = useRef();
    const profileImgRef = useRef();

    useEffect(() => {
        // Animasi teks: fade-in & slide-up
        gsap.from(heroTextRef.current, {
            opacity: 1,
            y: 50,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heroTextRef.current,
                start: 'top 80%',
            },
        });

        // Animasi gambar: parallax ringan
        gsap.to(profileImgRef.current, {
            y: -15,
            ease: 'none',
            scrollTrigger: {
                trigger: profileImgRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    return (
        <section className="section">
            <div className="container grid md:grid-cols-2 gap-10 items-center">
                <div ref={heroTextRef} className="hero-text">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Hi, I'm <span className="text-yellow-400">Ahmad Ibrahimovic</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        Frontend & Network Engineer from Bogor, Indonesia.
                    </p>
                    <a
                        href="/projects"
                        className="btn bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-6 py-3 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                        View My Work
                    </a>
                </div>
                <div ref={profileImgRef} className="flex justify-center">
                    <img
                        src={profileImg}
                        alt="Ahmad Ibrahimovic"
                        className="w-48 h-48 rounded-full border-4 border-yellow-400 shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;