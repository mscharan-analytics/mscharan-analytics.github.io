import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHoveringCta, setIsHoveringCta] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors">
                        <Terminal size={20} className="text-blue-400" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-100 font-mono">
                        MS<span className="text-blue-500">Charan</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-mono text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all relative group"
                        >
                            <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity absolute left-2">&gt;</span>
                            <span className="group-hover:translate-x-2 transition-transform inline-block">
                                {link.name}
                            </span>
                        </a>
                    ))}

                    <motion.a
                        href="#contact"
                        onMouseEnter={() => setIsHoveringCta(true)}
                        onMouseLeave={() => setIsHoveringCta(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-6 relative px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded overflow-hidden group shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    >
                        <div className="relative z-10 flex items-center gap-2 font-mono text-sm">
                            <AnimatePresence mode='wait'>
                                {isHoveringCta ? (
                                    <motion.span
                                        key="hover"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Cpu size={16} /> INITIALIZE_CHAT
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="normal"
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Hire Me
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                        {/* Glitch/Scanline Effect */}
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
                >
                    <div className="px-6 py-6 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-mono text-slate-300 hover:text-cyan-400 border-l-2 border-transparent hover:border-cyan-400 pl-4 transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="mt-4 px-5 py-3 text-center text-sm font-bold font-mono text-white bg-blue-600 rounded hover:bg-blue-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            INITIALIZE_CHAT
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
