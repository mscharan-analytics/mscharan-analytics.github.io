import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Database, Cpu, Server, Zap, BarChart, ExternalLink, Globe, Briefcase, Download } from 'lucide-react';
import { personalDetails } from '../../data/resumeData';

const Hero = () => {
    const roles = ["Data Pipelines", "Model Context Protocol", "Scalable Lakehouses", "AI Agent Integrations"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(80);

    // Multi-role typing effect
    useEffect(() => {
        const currentFullText = roles[currentRoleIndex];
        let timer;

        if (isDeleting) {
            timer = setTimeout(() => {
                setTypedText(prev => prev.slice(0, -1));
                setTypingSpeed(40);
            }, typingSpeed);
        } else {
            timer = setTimeout(() => {
                setTypedText(currentFullText.slice(0, typedText.length + 1));
                setTypingSpeed(80);
            }, typingSpeed);
        }

        if (!isDeleting && typedText === currentFullText) {
            timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
        } else if (isDeleting && typedText === "") {
            setIsDeleting(false);
            setCurrentRoleIndex(prev => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timer);
    }, [typedText, isDeleting, currentRoleIndex]);

    // Recruiter Fit Evaluator State
    const [infraNeeds, setInfraNeeds] = useState(60);
    const [aiNeeds, setAiNeeds] = useState(40);
    const [biNeeds, setBiNeeds] = useState(50);
    const [recommendation, setRecommendation] = useState({
        title: "Full-Stack Data Professional",
        desc: "DE Infrastructure + AI Agents + BI Analytics",
        story: "Highly qualified generalist. Sricharan designs and supports end-to-end data systems, linking low-level database architectures to AI orchestrations and stakeholder dashboards.",
        icon: Briefcase,
        color: "text-blue-400",
        borderColor: "border-blue-500/30",
        bg: "bg-blue-500/10",
        bullet: "Optimizes cloud spend while automating business workflows."
    });

    // Dynamic Recruiter Recommendation Logic based on slider inputs
    useEffect(() => {
        const infra = parseInt(infraNeeds);
        const ai = parseInt(aiNeeds);
        const bi = parseInt(biNeeds);
        
        if (ai >= infra && ai >= bi) {
            setRecommendation({
                title: "Data-Centric AI Platform Specialist",
                desc: "MCP Connectors, Agentic Workflows & Advanced RAG",
                story: "Sricharan bridges traditional database warehouses and LLM agent contexts, turning standard tables into active tools for Claude and Gemini.",
                icon: Cpu,
                color: "text-violet-400",
                borderColor: "border-violet-500/30",
                bg: "bg-violet-500/10",
                bullet: "Author of open-source Snowflake & Postgres MCP servers."
            });
        } else if (infra >= ai && infra >= bi) {
            setRecommendation({
                title: "Enterprise Data Pipeline Engineer",
                desc: "High-Throughput ETL, Lakehouses & Schema Governance",
                story: "A proven backend expert. Sricharan builds governed pipelines that scale database performance under strict production SLA constraints.",
                icon: Database,
                color: "text-cyan-400",
                borderColor: "border-cyan-500/30",
                bg: "bg-cyan-500/10",
                bullet: "Ingested 10M+ daily records; processed 2TB/day pipelines."
            });
        } else {
            setRecommendation({
                title: "Business Intelligence & Value Analyst",
                desc: "Tableau/Power BI Dashboards & Process Automations",
                story: "Sricharan connects low-level schemas directly to business bottom lines, delivering automated dashboards that save operational costs and labor.",
                icon: BarChart,
                color: "text-amber-400",
                borderColor: "border-amber-500/30",
                bg: "bg-amber-500/10",
                bullet: "Saved $1,000+/mo in nonprofit workflows; cut report latency."
            });
        }
    }, [infraNeeds, aiNeeds, biNeeds]);

    // Compute aggregate compatibility score based on Sricharan's actual capabilities
    const totalWeight = parseInt(infraNeeds) + parseInt(aiNeeds) + parseInt(biNeeds);
    const fitCompatibility = Math.round(
        (parseInt(infraNeeds) * 98 + parseInt(aiNeeds) * 95 + parseInt(biNeeds) * 92) / 
        (totalWeight || 1)
    );


    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-12 lg:pt-0 lg:pb-0">
            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Content - Details */}
                <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
                    
                    {/* Blog/Article Feature */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-lg mb-6"
                    >
                        <a 
                            href="https://github.com/mscharan-analytics" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-full px-4 py-1.5 transition-all group"
                        >
                            <Globe size={13} className="text-blue-400 animate-pulse" />
                            <span className="text-xs text-slate-300 font-mono">
                                Explore my open-source MCP connectors
                            </span>
                            <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Hiring Signal Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        OPEN FOR DATA & AI ENGINEER OPPORTUNITIES
                    </div>

                    {/* Name Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">{personalDetails.name}</span>
                    </h1>

                    {/* Dynamic Typing Title */}
                    <h2 className="text-xl sm:text-2xl font-mono text-slate-400 mb-6 h-8 flex items-center justify-center lg:justify-start">
                        <span>Architecting <span className="text-blue-400 font-bold">{typedText}</span></span>
                        <span className="w-1.5 h-5 bg-blue-500 ml-1.5 animate-pulse inline-block"></span>
                    </h2>

                    {/* Professional Summary */}
                    <p className="text-slate-300 text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-light">
                        {personalDetails.summary}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full sm:w-auto">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-blue-600/20 group"
                        >
                            <Briefcase size={16} />
                            Let's Connect
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="resume.pdf"
                            download="Sricharan_Mahavadi_Resume.pdf"
                            className="w-full sm:w-auto px-7 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Content - Interactive Candidate Profile Analyzer */}
                <div className="lg:col-span-5 flex justify-center w-full mt-6 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full max-w-md"
                    >
                        {/* Glassmorphic Simulator Card */}
                        <div className="bg-slate-900/70 backdrop-blur-md rounded-xl border border-slate-800 p-6 shadow-xl relative overflow-hidden">
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500"></div>

                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-white font-semibold tracking-wide text-xs font-mono">
                                    <Cpu className="text-blue-500 animate-pulse" size={14} />
                                    RECRUITER_FIT_EVALUATOR
                                </div>
                                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono border border-emerald-500/20 uppercase tracking-wider font-semibold">
                                    Live Match
                                </span>
                            </div>

                            {/* Sliders */}
                            <div className="space-y-4 mb-6">
                                <div>
                                    <div className="flex justify-between text-xs font-medium text-slate-300 mb-1 font-mono tracking-wider">
                                        Data Infrastructure (DE)
                                        <span className="text-cyan-400 font-mono font-bold">{infraNeeds}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="100"
                                        value={infraNeeds}
                                        onChange={(e) => setInfraNeeds(e.target.value)}
                                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full hover:bg-slate-700 transition-colors"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-medium text-slate-300 mb-1 font-mono tracking-wider">
                                        AI & Agent Integration (LLM/MCP)
                                        <span className="text-violet-400 font-mono font-bold">{aiNeeds}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="100"
                                        value={aiNeeds}
                                        onChange={(e) => setAiNeeds(e.target.value)}
                                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-violet-400 [&::-webkit-slider-thumb]:rounded-full hover:bg-slate-700 transition-colors"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-medium text-slate-300 mb-1 font-mono tracking-wider">
                                        BI & Business Analytics (ROI)
                                        <span className="text-amber-400 font-mono font-bold">{biNeeds}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="100"
                                        value={biNeeds}
                                        onChange={(e) => setBiNeeds(e.target.value)}
                                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:rounded-full hover:bg-slate-700 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Candidate Match visual bar */}
                            <div className="mb-6 bg-slate-950/40 rounded-lg border border-slate-800/80 p-3 flex flex-col gap-1.5">
                                <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                                    <span>Candidate Fit Score</span>
                                    <span className="text-emerald-400 font-bold">{fitCompatibility}% Compatible</span>
                                </div>
                                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                                    <motion.div 
                                        className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 h-1.5" 
                                        animate={{ width: `${fitCompatibility}%` }}
                                        transition={{ type: "spring", stiffness: 100 }}
                                    />
                                </div>
                            </div>

                            {/* Dynamically Populated Candidate Pitch */}
                            <div className={`p-4 rounded-lg border ${recommendation.borderColor} ${recommendation.bg} transition-all duration-300 relative overflow-hidden`}>
                                <div className="absolute top-2 right-2 text-white/5 pointer-events-none">
                                    <recommendation.icon size={56} />
                                </div>
                                <div className="relative z-10">
                                    <span className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Target Role Focus</span>
                                    <h3 className={`text-base font-bold ${recommendation.color} flex items-center gap-2 mt-1 mb-1.5 font-mono`}>
                                        <recommendation.icon size={16} />
                                        {recommendation.title}
                                    </h3>
                                    <p className="text-xs text-slate-300 leading-relaxed font-light mb-2">
                                        {recommendation.story}
                                    </p>
                                    
                                    <div className="text-[10px] text-slate-400 font-mono block border-t border-white/5 pt-1.5 flex items-center gap-1">
                                        <span className="text-emerald-400 font-bold">✔ Impact:</span>
                                        <span className="truncate">{recommendation.bullet}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
