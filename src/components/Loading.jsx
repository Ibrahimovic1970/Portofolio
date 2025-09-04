// src/components/Loading.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = ({ onComplete }) => {
    const containerRef = useRef();

    useEffect(() => {
        gsap.from(containerRef.current, {
            opacity: 1,
            y: -20,
            duration: 1.2,
            ease: 'power2.out',
            onComplete: () => {
                setTimeout(onComplete, 800);
            },
        });
    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="text-yellow-400 text-2xl font-semibold animate-pulse">
                Loading...
            </div>
        </div>
    );
};

export default Loading;