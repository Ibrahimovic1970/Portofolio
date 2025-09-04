import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skills = () => {
    const containerRef = useRef();
    const skillRefs = useRef([]);

    useEffect(() => {
        gsap.from(skillRefs.current, {
            opacity: 1,
            y: 50,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
        });
    }, []);

    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Mikrotik', level: 90 },
        { name: 'Vite', level: 80 },
        { name: 'Tailwind CSS', level: 55 },
        { name: 'GSAP', level: 75 },
        { name: 'Figma', level: 80 }
    ];

    return (
        <section className="section">
            <div className="container" ref={containerRef}>
                <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">Skills</h2>
                <div className="space-y-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-item flex items-center justify-between p-4 bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700 transition-colors"
                            ref={(el) => (skillRefs.current[index] = el)}
                        >
                            <span className="text-white font-medium">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-32 h-2 bg-gray-600 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-yellow-400"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm text-gray-400">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;