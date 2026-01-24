import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Terminal, Cpu } from 'lucide-react';
import { projects } from '../../data/resumeData';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-950 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-4">
                        <Terminal size={14} /> Algorithm Gallery
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full overflow-hidden"
                        >
                            {/* Terminal Header */}
                            <div className="bg-slate-950/80 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                </div>
                                <span className="text-[10px] font-mono text-slate-500">proj_0{index + 1}.py</span>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                        <Cpu className="text-blue-400 w-6 h-6" />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.link} className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-mono">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="pt-4 border-t border-slate-800/50">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-mono text-blue-300/80 bg-blue-900/10 px-2 py-1 rounded border border-blue-500/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
