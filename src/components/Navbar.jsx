// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-md border-b border-gray-800">
            <div className="container py-4 px-6 flex justify-between items-center">
                <h2 className="text-xl font-bold text-yellow-400">Ahmad Ibrahimovic</h2>

                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                    <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
                    <Link to="/skills" className="hover:text-yellow-400 transition">Skills</Link>
                    <Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link>
                    <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;