import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../../data/resumeData';
import { Database, TrendingUp, Server } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 border-b border-slate-800/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-white">About Me</h2>
                        <div className="h-px bg-slate-700 flex-grow"></div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-12 items-center">
                        <div className="md:col-span-2">
                            {/* Abstract Data Viz Representation */}
                            <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-700 relative group flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 group-hover:from-blue-900/30 group-hover:to-purple-900/30 transition-all duration-500" />

                                {/* Floating Icons */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10 text-center"
                                >
                                    <div className="flex justify-center gap-4 mb-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                            <Database size={32} />
                                        </div>
                                        <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                            <TrendingUp size={32} />
                                        </div>
                                    </div>
                                    <div className="inline-block p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                                        <Server size={32} />
                                    </div>
                                    <p className="mt-4 text-slate-500 text-sm font-mono tracking-wider">
                                        EST. 2020
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                {personalDetails.summary}
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="block text-slate-500 mb-1">Location</span>
                                    <span className="text-white">{personalDetails.location}</span>
                                </div>
                                <div>
                                    <span className="block text-slate-500 mb-1">Education</span>
                                    <span className="text-white">M.S. in Business Analytics</span>
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
