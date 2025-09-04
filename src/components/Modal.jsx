// src/components/Modal.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Modal = ({ isOpen, onClose, project }) => {
    const modalRef = useRef();

    useEffect(() => {
        if (isOpen) {
            gsap.to(modalRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
            });
        }
    }, [isOpen]);

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className="bg-gray-800 rounded-xl p-6 max-w-lg w-full shadow-2xl transform translate-y-10 opacity-0"
            >
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{project.desc}</p>
                <button
                    onClick={onClose}
                    className="btn mt-4"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;