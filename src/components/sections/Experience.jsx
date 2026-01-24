import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Activity, Zap } from 'lucide-react';
import { experience } from '../../data/resumeData';

const ExperienceCard = ({ exp, index, isLeft }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative w-full md:w-[45%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
        >
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-xl border border-blue-500/30 overflow-hidden group hover:border-blue-400 transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                {/* Tech Header */}
                <div className="bg-slate-950/50 px-6 py-3 border-b border-blue-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Activity size={16} className="text-blue-400" />
                        <span className="text-xs font-mono text-blue-300">NODE_ID: {index.toString().padStart(3, '0')}</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <div className="flex flex-col mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors font-mono tracking-tight">
                            {exp.company}
                        </h3>
                        <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
                            <span className="text-blue-400 font-medium text-sm flex items-center gap-2 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                <Briefcase size={14} /> {exp.role}
                            </span>
                            <span className="text-slate-500 text-xs font-mono border border-slate-700 px-2 py-1 rounded flex items-center gap-2">
                                <Calendar size={12} /> {exp.period}
                            </span>
                        </div>
                    </div>

                    <ul className="space-y-3 relative z-10">
                        {exp.description.map((desc, i) => (
                            <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start group/li">
                                <span className="text-blue-500 mr-3 mt-1 font-mono text-xs opacity-50 shrink-0">&gt;</span>
                                <span>{desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/20 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/20 rounded-bl-xl"></div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Grids/Beams */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-mono mb-4">
                        <Zap size={14} /> Career Trajectory
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Timeline</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* The Circuit Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-slate-900 opacity-30"></div>

                    <div className="space-y-16 md:space-y-24">
                        {experience.map((exp, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Card Side */}
                                <ExperienceCard exp={exp} index={index} isLeft={index % 2 !== 0} />

                                {/* Center Connector Node */}
                                <div className="relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center my-6 md:my-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-20">
                                    <div className="w-4 h-4 md:w-5 md:h-5 bg-slate-950 rounded-full border-2 border-blue-500 relative z-20 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                                    </div>
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[ping_3s_linear_infinite] opacity-50"></div>

                                    {/* Connector Lines (Decorative) */}
                                    {index % 2 !== 0 ? (
                                        <div className="absolute top-1/2 left-full w-12 h-[1px] bg-blue-500/30 hidden md:block"></div>
                                    ) : (
                                        <div className="absolute top-1/2 right-full w-12 h-[1px] bg-blue-500/30 hidden md:block"></div>
                                    )}
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="hidden md:block w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
