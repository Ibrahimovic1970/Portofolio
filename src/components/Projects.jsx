// src/components/Projects.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import project1 from '../assets/react.png';
import project2 from '../assets/porto.png';
import project3 from '../assets/figma.png';


const Projects = () => {
    const containerRef = useRef();
    const projectRefs = useRef([]);

    useEffect(() => {
        gsap.from(projectRefs.current, {
            opacity: 2,
            y: 50,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.3,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
        });
    }, []);

    const projects = [
        { id: 1, title: "E-Commerce Dashboard", desc: "Admin panel with real-time analytics.", img: project1 },
        { id: 2, title: "Portfolio Website", desc: "Minimalist portfolio with GSAP animations.", img: project2 },
        { id: 3, title: "Task Management App", desc: "Full-stack app with drag & drop interface.", img: project3 },
    ];

    return (
        <section className="section">
            <div className="container" ref={containerRef}>
                <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">Featured Projects</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            ref={(el) => (projectRefs.current[index] = el)}
                        >
                            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 leading-relaxed mb-4">{project.desc}</p>
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="inline-block text-yellow-400 hover:text-yellow-300 font-medium transition hover:underline"
                                >
                                    View Project →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;