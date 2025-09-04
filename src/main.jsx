// src/main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Loading from './components/Loading';
import './styles/global.css';

function Root() {
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulasi loading
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading onComplete={() => setLoading(false)} />;
    }

    return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </React.StrictMode>
);