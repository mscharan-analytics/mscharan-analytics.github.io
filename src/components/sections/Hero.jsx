import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Database, Play, Cpu, Activity, Server, Zap, Layers, BarChart, ExternalLink, Globe, Briefcase } from 'lucide-react';
import { personalDetails } from '../../data/resumeData';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Building Intelligence with Data...";
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [showMatrix, setShowMatrix] = useState(true);

    // Solution Simulator State
    const [dataVolume, setDataVolume] = useState(30);
    const [insightSpeed, setInsightSpeed] = useState(40);
    const [recommendation, setRecommendation] = useState({
        title: "Standard ETL Pipeline",
        desc: "A reliable foundation for your data needs.",
        story: "I usually recommend starting here to establish clean data flows.",
        icon: Database,
        color: "text-blue-400",
        bg: "bg-blue-500/20"
    });

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                setIsTypingComplete(true);
                setTimeout(() => setShowMatrix(false), 2000);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    // Dynamic Recommendation Logic
    useEffect(() => {
        const score = (parseInt(dataVolume) + parseInt(insightSpeed)) / 2;

        if (score < 30) {
            setRecommendation({
                title: "Lean Data Pipeline",
                desc: "Efficient and plenty fast to get started.",
                story: "Perfect for early-stage startups or specific analysis tasks. We can build this quickly!",
                icon: Layers,
                color: "text-cyan-400",
                bg: "bg-cyan-500/20"
            });
        } else if (score < 60) {
            setRecommendation({
                title: "Scalable Data Lakehouse",
                desc: "Unified storage for all your analytics.",
                story: "Great for growing teams. I'll help you unify your data so everyone is on the same page.",
                icon: Server,
                color: "text-blue-400",
                bg: "bg-blue-500/20"
            });
        } else if (score < 85) {
            setRecommendation({
                title: "Real-time Streaming Grid",
                desc: "Low-latency insights for instant action.",
                story: "When every second counts. I can engineer a system that reacts faster than the competition.",
                icon: Zap,
                color: "text-purple-400",
                bg: "bg-purple-500/20"
            });
        } else {
            setRecommendation({
                title: "Predictive AI Ecosystem",
                desc: "Autonomous decision-making at scale.",
                story: "The ultimate goal. Let's train models that anticipate your users' needs before they do.",
                icon: Cpu,
                color: "text-pink-400",
                bg: "bg-pink-500/20"
            });
        }
    }, [dataVolume, insightSpeed]);

    const handleDeploy = () => {
        window.location.href = '#contact';
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-12 lg:pt-0 lg:pb-0">
            {/* Matrix Data Rain Effect (Entrance) - Subtle */}
            <AnimatePresence>
                {showMatrix && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-0 pointer-events-none flex justify-center gap-1 opacity-10"
                    >
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: -1000, opacity: 0 }}
                                animate={{ y: 2000, opacity: 1 }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "linear"
                                }}
                                className="text-blue-500 font-mono text-xs hidden md:block"
                                style={{ width: '20px' }}
                            >
                                {Array.from({ length: 50 }).map((_, j) => (
                                    <div key={j} className="my-1">{Math.random() > 0.5 ? '1' : '0'}</div>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Left Content */}
                <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">

                    {/* NEW: Blog / Article Ticker */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-lg mb-8"
                    >
                        <a href="https://substack.com/" target="_blank" rel="noopener noreferrer" className="block group">
                            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-3 flex items-center justify-between hover:border-blue-500/30 transition-colors">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="p-1.5 bg-blue-500/10 rounded-md text-blue-400 shrink-0">
                                        <Globe size={14} />
                                    </div>
                                    <div className="flex flex-col text-left overflow-hidden">
                                        <span className="text-[10px] text-blue-400 font-bold tracking-wider uppercase">Latest Insight</span>
                                        <span className="text-sm text-slate-300 truncate group-hover:text-white transition-colors">
                                            The Future of Enterprise AI Stacks: A Deep Dive
                                        </span>
                                    </div>
                                </div>
                                <ExternalLink size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors ml-2 shrink-0" />
                            </div>
                        </a>
                    </motion.div>

                    {/* Updated Avatar Frame - Minimalist Professional */}
                    <div className="flex items-center gap-6 mb-8 w-full max-w-lg justify-center lg:justify-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative w-24 h-24 shrink-0"
                            onClick={handleDeploy}
                        >
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                            {/* Abstract Geometric Avatar */}
                            <div className="relative w-full h-full rounded-full border border-blue-400/30 overflow-hidden bg-slate-900 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-blue-500/10"></div>
                                {/* Center Node */}
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg rotate-45 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10"></div>
                                {/* Orbiting Particles */}
                                <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                                    <div className="absolute top-2 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                                    <div className="absolute bottom-4 right-4 w-1 h-1 bg-purple-400 rounded-full"></div>
                                </div>
                                <div className="absolute inset-0 border border-blue-500/20 rounded-full scale-75"></div>
                            </div>
                        </motion.div>

                        {/* Explicit Hiring Signal */}
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-2">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                                ACTIVELY SEEKING OPPORTUNITIES
                            </div>
                            <p className="text-slate-400 text-sm leading-snug">
                                Available for Senior Data Engineering & <br className="hidden sm:block" />AI Infrastructure roles.
                            </p>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                        <span className="block text-slate-400 text-xl md:text-2xl font-mono mb-2 h-8">
                            &gt; {text}<span className="animate-pulse">_</span>
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                            {personalDetails.name}
                        </span>
                    </h1>

                    <p className="text-slate-300 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-light">
                        {personalDetails.summary}
                        <span className="block mt-4 text-sm text-slate-400 font-medium">
                            I architect systems that turn raw enterprise data into competitive intelligence.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full sm:w-auto">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25 group"
                        >
                            <Briefcase size={18} />
                            Hiring? Let's Talk
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-3 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all border border-slate-700 hover:border-blue-500/50"
                        >
                            <Terminal size={18} />
                            View Projects
                        </a>
                    </div>
                </div>

                {/* Right Content: Solution Simulator */}
                <div className="order-1 lg:order-2 flex justify-center perspective-1000 w-full mb-12 lg:mb-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-md"
                    >
                        {/* Card Design */}
                        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 md:p-8 shadow-2xl relative overflow-hidden group">
                            {/* Decorative Top Bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-white font-bold tracking-wide text-sm md:text-base">
                                    <Activity className="text-blue-500 animate-pulse" size={18} />
                                    SOLUTION_SIMULATOR
                                </div>
                                <div className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded font-mono border border-slate-700">
                                    INTERACTIVE
                                </div>
                            </div>

                            {/* Sliders */}
                            <div className="space-y-6 mb-8">
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                                        Data Complexity
                                        <span className="text-blue-400 font-mono">{dataVolume > 70 ? 'HIGH' : dataVolume > 30 ? 'MEDIUM' : 'LOW'}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] text-slate-500 font-mono">Simple</span>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={dataVolume}
                                            onChange={(e) => setDataVolume(e.target.value)}
                                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gradient-to-tr [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-cyan-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125 hover:bg-slate-700 transition-colors"
                                        />
                                        <span className="text-[10px] text-slate-500 font-mono">Complex</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                                        Insight Velocity
                                        <span className="text-purple-400 font-mono">{insightSpeed > 70 ? 'REAL-TIME' : insightSpeed > 30 ? 'DAILY' : 'BATCH'}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] text-slate-500 font-mono">Slow</span>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={insightSpeed}
                                            onChange={(e) => setInsightSpeed(e.target.value)}
                                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gradient-to-tr [&::-webkit-slider-thumb]:from-purple-500 [&::-webkit-slider-thumb]:to-pink-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125 hover:bg-slate-700 transition-colors"
                                        />
                                        <span className="text-[10px] text-slate-500 font-mono">Instant</span>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Bar Graph */}
                            <div className="mb-6 bg-slate-950/50 rounded-lg border border-slate-800 p-4 h-32 relative overflow-hidden flex items-end justify-between gap-1">
                                <div className="absolute top-2 right-2 text-[10px] text-slate-500 font-mono flex items-center gap-1">
                                    <BarChart size={10} /> ESTIMATED_THROUGHPUT
                                </div>
                                {/* Bars */}
                                {[0.2, 0.4, 0.6, 0.5, 0.7, 0.9, 0.8, 0.6, 0.8, 1.0].map((multiplier, i) => {
                                    const baseHeight = ((parseInt(dataVolume) + parseInt(insightSpeed)) / 200) * 100;
                                    const height = Math.min(100, Math.max(10, baseHeight * multiplier)); // Ensure min height
                                    return (
                                        <motion.div
                                            key={i}
                                            animate={{ height: `${height}%` }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className={`w-full rounded-t-sm ${height > 80 ? 'bg-pink-500/80' : height > 50 ? 'bg-purple-500/80' : 'bg-blue-500/80'}`}
                                        />
                                    );
                                })}
                            </div>

                            {/* Result Card */}
                            <motion.div
                                className={`p-4 rounded-xl border border-slate-700 bg-slate-950/50 mb-6 relative overflow-hidden transition-colors duration-300`}
                                initial={false}
                                animate={{
                                    borderColor: recommendation.color.replace('text-', '') === 'blue-400' ? '#60A5FA' :
                                        recommendation.color.replace('text-', '') === 'cyan-400' ? '#22D3EE' :
                                            recommendation.color.replace('text-', '') === 'purple-400' ? '#C084FC' : '#F472B6'
                                }}
                            >
                                <div className={`absolute top-0 right-0 p-2 opacity-10`}>
                                    <recommendation.icon size={64} />
                                </div>

                                <div className="relative z-10">
                                    <div className="text-xs text-slate-500 font-mono mb-1">RECOMMENDATION</div>
                                    <h3 className={`text-lg font-bold ${recommendation.color} mb-2 flex items-center gap-2`}>
                                        <recommendation.icon size={18} />
                                        {recommendation.title}
                                    </h3>
                                    <p className="text-sm text-slate-300 leading-relaxed mb-2">
                                        "{recommendation.story}"
                                    </p>
                                    <div className="text-xs text-slate-500 italic">
                                        Note: {recommendation.desc}
                                    </div>
                                </div>
                            </motion.div>

                            <button
                                onClick={handleDeploy}
                                className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)] group/btn text-sm"
                            >
                                Contact Me for Projects
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute -z-10 inset-0 bg-blue-500/10 blur-[80px] rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
