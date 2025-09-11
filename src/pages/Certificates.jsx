// src/pages/Certificates.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Import gambar sertifikat dari assets
import certificate1 from '../assets/s1.png'; // Ganti dengan nama file kamu
import certificate2 from '../assets/s2.png'; // Ganti dengan nama file kamu

const Certificates = () => {
    const containerRef = useRef();
    const itemRefs = useRef([]);

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

        // Animasi card bertahap
        gsap.from(itemRefs.current, {
            opacity: 1,
            x: -50,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.3,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
        });
    }, []);

    const certificates = [
        {
            title: "Certificate of Participation",
            org: "BINUS Online - Cyber Security Awareness",
            year: "2024",
            img: certificate1
        },
        {
            title: "Certificate of Participation",
            org: "BINUS Online - Software Development",
            year: "2025",
            img: certificate2
        }
    ];

    return (
        <section className="section">
            <div className="container" ref={containerRef}>
                <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">Certificates</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300"
                        >
                            <img
                                src={cert.img}
                                alt={cert.title}
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                                <p className="text-yellow-400 font-medium">{cert.org}</p>
                                <p className="text-gray-300">{cert.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;