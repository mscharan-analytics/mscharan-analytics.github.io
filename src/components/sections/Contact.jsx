import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Terminal, ArrowRight } from 'lucide-react';
import { personalDetails } from '../../data/resumeData';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    {/* Terminal Window Design */}
                    <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
                        {/* Terminal Bar */}
                        <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="text-xs text-slate-400 font-mono">communication_protocol.py</div>
                            <div className="w-12"></div> {/* Spacer for balance */}
                        </div>

                        <div className="p-8 md:p-12 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                                    <Terminal size={32} className="text-blue-400" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Get In <span className="text-blue-400">Touch</span>
                                </h2>
                                <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto font-light">
                                    I am actively seeking Senior Data Engineering, Business Intelligence, and AI Engineering roles. 
                                    Reach out to discuss opportunities or integrations.
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <a
                                    href={`mailto:${personalDetails.email}`}
                                    className="group relative inline-flex items-center justify-center px-8 py-3 bg-blue-600 font-bold text-white rounded hover:bg-blue-500 transition-all font-mono w-full sm:w-auto overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Mail size={16} /> Send Email
                                    </span>
                                    {/* Scanline effect on hover */}
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </a>

                                <div className="flex gap-4">
                                    {personalDetails.social.map((social, idx) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={idx}
                                                href={social.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-3 bg-slate-800 rounded border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 transition-all group"
                                            >
                                                <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </motion.div>

                             <div className="mt-8 pt-8 border-t border-slate-800/50 text-slate-500 text-xs font-mono">
                                <span className="animate-pulse text-emerald-500">●</span> Ready for handshake
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
