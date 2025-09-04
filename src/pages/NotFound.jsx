// src/pages/NotFound.jsx
import { useEffect } from 'react';
import { gsap } from 'gsap';

const NotFound = () => {
    useEffect(() => {
        gsap.from('.not-found-content', {
            opacity: 1,
            y: 30,
            duration: 1.2,
            ease: 'power2.out',
        });
    }, []);

    return (
        <section className="section">
            <div className="container text-center not-found-content">
                <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-gray-300 mb-6 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <a href="/" className="btn">← Go Back Home</a>
            </div>
        </section>
    );
};

export default NotFound;