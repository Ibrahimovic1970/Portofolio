// src/pages/Experience.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Experience = () => {
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

    const experiences = [
        {
            title: "Sekretaris OSIS",
            org: "OSIS SMK TI Bazma",
            period: "2024 – 2025",
            desc: "Saya pernah mengikuti kegiatan OSIS sebagai Sekretaris, bertanggung jawab dalam menyusun surat menyurat, notulensi rapat, dan pengelolaan arsip kegiatan. Saya juga membantu koordinasi antar bidang serta mendukung pelaksanaan acara sekolah seperti MPLS, Pentas Seni, dan Bazar Amal."
        },
        {
            title: "Sekretaris & Bendahara Mudabbir",
            org: "Mudabbir Asrama SMK TI Bazma",
            period: "2025 – 2026",
            desc: "Saya pernah mengikuti kegiatan Mudabbir sebagai anggota sekaligus Sekretaris & Bendahara. Saya membantu mengelola administrasi keuangan, laporan dana, dan arsip kajian rutin. Saya juga turut serta dalam perencanaan dan pelaksanaan kegiatan Ramadhan serta pengelolaan konten edukatif di media sosial sekolah."
        }
    ];

    return (
        <section className="section">
            <div className="container" ref={containerRef}>
                <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">Experience & Leadership</h2>
                <div className="space-y-8 max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                            <p className="text-yellow-400 font-medium mb-2">{exp.org} • {exp.period}</p>
                            <p className="text-gray-300 leading-relaxed">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;