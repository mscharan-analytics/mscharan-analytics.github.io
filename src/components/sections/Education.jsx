import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../../data/resumeData';

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
      </div>
    </section>
  );
};

export default Education;
