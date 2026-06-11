import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education, certifications } from '../../data/resumeData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                  <GraduationCap className="text-blue-500 opacity-50" size={24} />
                </div>
                <p className="text-blue-400 font-medium mb-2">{edu.degree}</p>
                <div className="flex items-center text-slate-500 text-sm">
                  <Calendar size={14} className="mr-2" />
                  {edu.year}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/20"
            >
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Award className="text-yellow-400" size={20} />
                High Honors
              </h4>
              <p className="text-slate-400 text-sm">
                Graduated with High Honors from Boston University, specializing in Healthcare Analytics.
              </p>
            </motion.div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-2 md:col-span-1 md:row-span-2 relative group"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl md:rotate-3 group-hover:rotate-0 transition-all duration-300 -z-10"></div>
              <img
                src="/grad-photo.jpg"
                alt="Graduation"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-slate-800"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.5, x: -50, zIndex: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2 md:col-span-1 relative cursor-pointer"
            >
              <img
                src="/bu-certificate.png"
                alt="Degree Certificate"
                className="w-full h-auto object-cover rounded-2xl shadow-xl border-2 border-slate-800"
              />
            </motion.div>
          </div>
        </div>

        {/* Certifications & Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-blue-500" size={24} />
            <h3 className="text-2xl font-bold text-white font-mono">Professional Certifications</h3>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-slate-900/60 p-5 rounded-xl border border-slate-800/80 shadow-md flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 relative group"
              >
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      {cert.badge}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">{cert.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug mb-2 font-sans group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                    {cert.details}
                  </p>
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-4 pt-2 border-t border-slate-850 flex items-center justify-between">
                  <span>Issuer:</span>
                  <span className="text-slate-300 font-semibold">{cert.issuer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

