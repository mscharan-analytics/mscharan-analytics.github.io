import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/resumeData';
import { Cpu, Network, Code2 } from 'lucide-react';

const SkillCategory = ({ title, items, color, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className="relative group"
        >
            {/* Holographic Card Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 rounded-2xl -z-10 group-hover:opacity-10 transition-opacity`}></div>
            <div className="absolute inset-0 border border-white/10 rounded-2xl -z-10"></div>

            {/* Corner Markers */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500/50 rounded-tl"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-500/50 rounded-br"></div>

            <div className="p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <div className={`p-2 rounded-lg bg-white/5 ${color.replace('from-', 'text-').split(' ')[0]}`}>
                        <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono tracking-wide">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="relative"
                        >
                            <div className={`px-4 py-2 rounded-md bg-slate-900/80 border border-white/10 text-xs md:text-sm font-medium text-slate-300 hover:text-white hover:border-blue-500/50 transition-all shadow-lg backdrop-blur-sm cursor-default flex items-center gap-2 group/skill`}>
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color}`}></div>
                                {skill}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: 'Data Engineering',
            items: skills.dataEngineering,
            color: 'from-blue-600 to-cyan-500',
            icon: Network
        },
        {
            title: 'Analytics & AI',
            items: skills.analyticsML,
            color: 'from-purple-600 to-indigo-500',
            icon: Cpu
        },
        {
            title: 'Development Ops',
            items: skills.development,
            color: 'from-emerald-500 to-teal-500',
            icon: Code2
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Matrix Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Expertise</span>
                    </h2>
                    <p className="text-slate-400 max-w-lg mx-auto text-sm font-light">
                        A structured map of languages, platforms, and methodologies I leverage to engineer data systems and AI integrations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <SkillCategory
                            key={idx}
                            {...category}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
