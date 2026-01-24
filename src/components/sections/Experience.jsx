import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../../data/resumeData';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-800"></div>

                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 z-10"></div>

                            <div className="w-full md:w-5/12 ml-8 md:ml-0 mb-4 md:mb-0">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors shadow-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                    </div>
                                    <div className="flex items-center text-blue-400 text-sm font-medium mb-4">
                                        <Briefcase size={14} className="mr-2" />
                                        {exp.role}
                                    </div>
                                    <div className="flex items-center text-slate-500 text-xs mb-4">
                                        <Calendar size={12} className="mr-2" />
                                        {exp.period}
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                                                <span className="text-blue-500 mr-2 mt-1">•</span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-5/12"></div> {/* Spacer for the other side */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
