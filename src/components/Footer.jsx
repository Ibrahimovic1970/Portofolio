// src/components/Footer.jsx
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    useEffect(() => {
        gsap.from('.footer-content', {
            opacity: 1,
            y: -5,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.footer-content',
                start: 'top 90%',
            },
        });
    }, []);

    return (
        <footer className="py-8 text-center border-t border-gray-800 bg-black">
            <div className="container footer-content">
                <div className="flex justify-center gap-8 mb-4">
                    <a
                        href="https://linkedin.com/in/ahmad-ibrahimovic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-yellow-400 text-2xl transition duration-300 transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.instagram.com/movic6879/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-yellow-400 text-2xl transition duration-300 transform hover:scale-110"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-yellow-400 text-2xl transition duration-300 transform hover:scale-110"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Ahmad Ibrahimovic. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;