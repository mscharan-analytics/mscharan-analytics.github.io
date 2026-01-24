import React from 'react';
import { personalDetails } from '../../data/resumeData';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-8 relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-slate-500 text-xs font-mono">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} {personalDetails.name} <span className="text-blue-500">//</span> All rights reserved.</p>
                </div>

                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span>SYSTEM_STATUS: ONLINE</span>
                    </div>
                    <p className="hidden md:block opacity-50">
                        Built with React <span className="mx-1">+</span> Tailwind <span className="mx-1">+</span> Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
