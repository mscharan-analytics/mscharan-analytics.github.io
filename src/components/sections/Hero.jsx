import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personalDetails } from '../../data/resumeData';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-blue-400 font-medium tracking-wide mb-2 uppercase text-sm">
                            Data Engineering & Analytics
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                {personalDetails.name.split(' ')[0]}
                            </span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                            {personalDetails.summary.split('.')[0]}.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full flex items-center gap-2 transition-all shadow-lg shadow-blue-600/25"
                            >
                                View Projects <ArrowRight size={18} />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/resume.pdf"
                                download="Sricharan_Mahavadi_Resume.pdf"
                                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full flex items-center gap-2 transition-all border border-slate-700"
                            >
                                Download Resume <Download size={18} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract Visual or Photo Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4 border-slate-800/50 shadow-2xl group">
                        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all duration-500 z-10" />
                        <img
                            src="/hero-profile.jpg"
                            alt={personalDetails.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
