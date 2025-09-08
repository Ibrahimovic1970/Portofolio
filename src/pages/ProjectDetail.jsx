// src/pages/ProjectDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

// Import gambar dari assets
import project1 from '../assets/react.png';
import project2 from '../assets/porto.png';
import project3 from '../assets/figma.png';

const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        desc: "Admin panel with real-time analytics built with React & Firebase.",
        img: project1,
        tech: ["React", "Firebase", "Tailwind CSS"],
        liveUrl: "#",
        sourceUrl: "https://github.com/Ibrahimovic1970/Portofolio"
    },
    {
        id: 2,
        title: "Portfolio Website",
        desc: "Minimalist portfolio with GSAP animations and dark mode toggle.",
        img: project2,
        tech: ["React", "GSAP", "Vite"],
        liveUrl: "#",
        sourceUrl: "#"
    },
    {
        id: 3,
        title: "Task Management App",
        desc: "Full-stack app with drag & drop interface and authentication.",
        img: project3,
        tech: ["Node.js", "MongoDB", "React"],
        liveUrl: "#",
        sourceUrl: "#"
    }
];

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const found = projects.find(p => p.id === parseInt(id));
        if (!found) {
            navigate('/not-found');
            return;
        }
        setProject(found);
    }, [id, navigate]);

    useEffect(() => {
        if (project) {
            gsap.from('.detail-content', {
                opacity: 1,
                y: 30,
                duration: 1.2,
                ease: 'power2.out'
            });
        }
    }, [project]);

    if (!project) {
        return null; // Akan ditangani oleh NotFound
    }

    return (
        <section className="section">
            <div className="container detail-content">
                <button
                    onClick={() => navigate(-1)}
                    className="text-yellow-400 hover:underline mb-6 inline-block"
                >
                    ← Back to Projects
                </button>

                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <p className="text-gray-300 text-lg mb-6">{project.desc}</p>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                            <span key={i} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4">
                    <a href={project.liveUrl} className="btn">Live Demo</a>
                    <a href={project.sourceUrl} className="btn bg-gray-700 hover:bg-gray-600">Source Code</a>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;