import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../../data/resumeData';
import { Terminal, Code, Cpu, User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-900 border-b border-slate-800/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                            <span className="text-blue-500">01.</span> About Me
                        </h2>
                        <div className="h-px bg-slate-800 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                        <div className="md:col-span-2 order-1 md:order-1">
                            {/* Digital Avatar Frame */}
                            <div className="aspect-square bg-slate-800/50 rounded-2xl p-4 shadow-2xl border border-slate-700 relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 group-hover:from-blue-900/20 group-hover:to-purple-900/20 transition-all duration-500" />

                                {/* Avatar Image */}
                                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-slate-700/50">
                                    <img
                                        src="/profile.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Floating Tech Badges */}
                                <motion.div
                                    className="absolute top-4 right-4 p-2 bg-slate-900 border border-slate-700 rounded-lg text-blue-400 shadow-lg"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <Terminal size={20} />
                                </motion.div>
                                <motion.div
                                    className="absolute bottom-4 left-4 p-2 bg-slate-900 border border-slate-700 rounded-lg text-purple-400 shadow-lg"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Cpu size={20} />
                                </motion.div>
                            </div>
                        </div>

                        <div className="md:col-span-3 order-2 md:order-2">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Hello! I'm <span className="text-blue-400">{personalDetails.name}</span>.
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
                                I'm not just a data engineer; I'm a builder who loves turning complex chaos into clean, actionable insights.
                                My journey started with a curiosity for how systems work, and today, I architect pipelines that help businesses see the future.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                                When I'm not optimizing SQL queries or training models, you can find me exploring new tech stacks or debugging life's little mysteries.
                                I believe in code that is clean, efficient, and—most importantly—human.
                            </p>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-mono text-slate-400">
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-500">▹</span> Data Engineering
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-500">▹</span> Analytics
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-500">▹</span> Machine Learning
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-500">▹</span> Cloud Architecture
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
