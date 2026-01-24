import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/resumeData';

const Skills = () => {
    const categories = [
        { title: 'Data Engineering & Cloud', items: skills.dataEngineering, color: 'text-blue-400', border: 'border-blue-500/50' },
        { title: 'Analytics & ML', items: skills.analyticsML, color: 'text-purple-400', border: 'border-purple-500/50' },
        { title: 'Development & Tools', items: skills.development, color: 'text-emerald-400', border: 'border-emerald-500/50' }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`bg-slate-800/50 rounded-2xl p-8 border ${category.border} hover:bg-slate-800 transition-all duration-300`}
                        >
                            <h3 className={`text-xl font-bold mb-6 ${category.color} text-center`}>{category.title}</h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-slate-900 rounded-lg text-slate-300 text-sm font-medium border border-slate-700 hover:border-slate-500 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
