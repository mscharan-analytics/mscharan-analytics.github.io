import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen text-slate-100 font-sans relative">
            <ParticleBackground />
            <Navbar />
            <main className="flex-grow pt-20 relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
