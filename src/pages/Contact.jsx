// src/pages/Contact.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
    const containerRef = useRef();
    const contactTextRef = useRef();

    useEffect(() => {
        // Animasi teks: fade-in & slide-up
        gsap.from(contactTextRef.current, {
            opacity: 1,
            y: 50,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: contactTextRef.current,
                start: 'top 80%',
            },
        });

        // Parallax ringan
        gsap.to(containerRef.current, {
            y: -15,
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
            <div className="container text-center">
                <h2 className="text-4xl font-bold mb-16 text-yellow-400">Get In Touch</h2>
                <div ref={contactTextRef} className="max-w-lg mx-auto mb-12">
                    <p className="text-gray-300 leading-relaxed mb-8">
                        Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
                    </p>
                    <form className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full md:w-64"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full md:w-64"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            required
                            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full max-w-md resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="btn bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-6 py-3 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;