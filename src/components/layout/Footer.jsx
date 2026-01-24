import React from 'react';
import { personalDetails } from '../../data/resumeData';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
                <p>&copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    {personalDetails.social.map((social) => (
                        <a
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >
                            {social.platform}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
