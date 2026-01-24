import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { projects } from '../../data/resumeData';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <Folder className="text-blue-500 w-10 h-10" />
                                <div className="flex gap-4">
                                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-mono text-blue-300">
                                        {t}
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

export default Projects;
