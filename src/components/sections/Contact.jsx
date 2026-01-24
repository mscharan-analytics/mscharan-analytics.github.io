import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { personalDetails } from '../../data/resumeData';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
                    <p className="text-slate-400 text-lg mb-10">
                        I'm currently open to new opportunities in Data Engineering and Analytics.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`mailto:${personalDetails.email}`}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-600/50 transition-all text-lg"
                    >
                        <Mail size={20} />
                        Say Hello
                    </motion.a>

                    <div className="mt-12 flex justify-center gap-8">
                        {personalDetails.social.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={idx}
                                    href={social.url}
                                    className="text-slate-500 hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon size={24} />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
