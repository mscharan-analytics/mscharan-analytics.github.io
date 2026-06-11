import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Terminal, Cpu, Database, GitFork, Star, Copy, Check, Play, Sparkles } from 'lucide-react';
import { projects } from '../../data/resumeData';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [copiedIndex, setCopiedIndex] = useState(null);
    
    // MCP Simulator States
    const mcpProjects = projects.filter(p => p.category === 'mcp');
    const [selectedMcpIdx, setSelectedMcpIdx] = useState(0);
    const [activeQueryIdx, setActiveQueryIdx] = useState(0);
    const [simulationLog, setSimulationLog] = useState([]);
    const [isSimulating, setIsSimulating] = useState(false);
    const [simulatedResult, setSimulatedResult] = useState('');

    const currentMcp = mcpProjects[selectedMcpIdx] || null;
    const currentQuery = currentMcp?.mcpDemo?.queries[activeQueryIdx] || null;

    // Filter projects based on tab
    const filteredProjects = activeTab === 'all' 
        ? projects 
        : projects.filter(p => p.category === activeTab);

    const handleCopy = (text, idx) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(idx);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const runMcpSimulation = () => {
        if (!currentMcp || !currentQuery || isSimulating) return;

        setIsSimulating(true);
        setSimulatedResult('');
        setSimulationLog([]);

        const logs = [
            `[Handshake] Connecting to ${currentMcp.title} MCP Server...`,
            `[Handshake] Server verified. Declaring capabilities & schemas...`,
            `[Client] LLM requests tool execution: ${currentMcp.mcpDemo.tools[0].name}`,
            `[Query] Translating user prompt: "${currentQuery.prompt}"`,
            `[Database] Executing: ${currentQuery.sql}`,
            `[Handshake] Packaging and returning response to LLM client...`
        ];

        let logIdx = 0;
        const interval = setInterval(() => {
            if (logIdx < logs.length) {
                setSimulationLog(prev => [...prev, logs[logIdx]]);
                logIdx++;
            } else {
                clearInterval(interval);
                setSimulatedResult(currentQuery.result);
                setIsSimulating(false);
            }
        }, 600);
    };

    return (
        <section id="projects" className="py-24 bg-slate-950 relative border-b border-slate-900">
            {/* Subtle glow backdrops */}
            <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 font-mono font-semibold">Solutions</span>
                    </h2>
                    <p className="text-slate-400 text-base max-w-xl mx-auto">
                        Explore open-source Model Context Protocol servers and robust daily transaction pipelines.
                    </p>
                </motion.div>

                {/* Interactive MCP Simulator Sandbox - Highlighted Feature */}
                {currentMcp && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 md:p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-indigo-500/15 rounded-lg border border-indigo-500/35">
                                <Cpu size={20} className="text-indigo-400" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-bold text-white font-mono">MCP Connection Sandbox</h3>
                                    <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded font-mono font-semibold uppercase tracking-wider">Protocol V1.0</span>
                                </div>
                                <p className="text-xs text-slate-400">See how Sricharan's MCP server hooks LLMs directly to relational database schemas.</p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8">
                            
                            {/* Simulator Sidebar Options */}
                            <div className="lg:col-span-5 space-y-6">
                                <div>
                                    <label className="text-[10px] font-mono text-slate-400 uppercase block mb-2 font-semibold">Select MCP Server</label>
                                    <div className="flex gap-2">
                                        {mcpProjects.map((p, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setSelectedMcpIdx(idx);
                                                    setActiveQueryIdx(0);
                                                    setSimulationLog([]);
                                                    setSimulatedResult('');
                                                }}
                                                className={`flex-1 py-2 px-3 text-xs font-mono font-bold border rounded-lg transition-all ${
                                                    selectedMcpIdx === idx 
                                                        ? 'bg-indigo-600/15 text-indigo-400 border-indigo-500/40' 
                                                        : 'bg-slate-950/50 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                                                }`}
                                            >
                                                {p.title}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[10px] font-mono text-slate-400 uppercase block mb-2 font-semibold">Select Query Prompt</label>
                                    <div className="space-y-2">
                                        {currentMcp.mcpDemo.queries.map((q, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setActiveQueryIdx(idx);
                                                    setSimulationLog([]);
                                                    setSimulatedResult('');
                                                }}
                                                className={`w-full text-left p-3 text-xs border rounded-lg transition-all flex items-center justify-between ${
                                                    activeQueryIdx === idx
                                                        ? 'bg-slate-900 text-indigo-400 border-indigo-500/30'
                                                        : 'bg-slate-950/40 text-slate-300 border-slate-800/80 hover:border-slate-700 hover:text-slate-100'
                                                }`}
                                            >
                                                <span className="truncate mr-3">"{q.prompt}"</span>
                                                <Play size={10} className={activeQueryIdx === idx ? 'text-indigo-400' : 'text-slate-600'} />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={runMcpSimulation}
                                    disabled={isSimulating}
                                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800/50 text-white font-bold rounded-lg text-xs font-mono flex items-center justify-center gap-2 transition-all"
                                >
                                    <Sparkles size={14} className={isSimulating ? 'animate-spin' : ''} />
                                    {isSimulating ? 'PROCESSING HANDSHAKE...' : 'RUN LIVE DEMO HANDSHAKE'}
                                </button>
                            </div>

                            {/* Simulated Terminal Screen */}
                            <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-5 flex flex-col h-[280px] shadow-inner font-mono text-xs overflow-hidden relative">
                                <div className="absolute top-2 right-4 flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                                    <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                                </div>
                                <div className="text-[10px] text-slate-500 border-b border-slate-900 pb-2 mb-3">
                                    MCP Connection Console (Session active)
                                </div>
                                
                                <div className="flex-grow overflow-y-auto space-y-2 text-slate-400 max-h-[160px] scrollbar-thin">
                                    {simulationLog.map((log, i) => (
                                        <div key={i} className="flex gap-2">
                                            <span className="text-indigo-500">&gt;</span>
                                            <span className="text-slate-300">{log}</span>
                                        </div>
                                    ))}
                                    {simulationLog.length === 0 && (
                                        <div className="text-slate-600 italic mt-4 text-center">
                                            Select a query and click "RUN LIVE DEMO HANDSHAKE" above.
                                        </div>
                                    )}
                                </div>

                                {simulatedResult && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="border-t border-slate-900 pt-3 mt-3 max-h-[80px] overflow-y-auto"
                                    >
                                        <div className="text-[10px] text-emerald-400 font-semibold mb-1">Result output returned:</div>
                                        <pre className="text-emerald-300/95 text-[10px] leading-tight">{simulatedResult}</pre>
                                    </motion.div>
                                )}
                            </div>

                        </div>
                    </motion.div>
                )}

                {/* Project Filter Tabs */}
                <div className="flex justify-center gap-2 mb-12">
                    {[
                        { id: 'all', name: 'All Solutions' },
                        { id: 'mcp', name: 'MCP Servers' },
                        { id: 'pipeline', name: 'Production Pipelines' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2 text-xs font-mono font-bold rounded-full border transition-all ${
                                activeTab === tab.id
                                    ? 'bg-blue-600/15 border-blue-500/40 text-blue-400'
                                    : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                            }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="bg-slate-900/35 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full overflow-hidden group shadow-md"
                            >
                                {/* Simulated Github Header for MCP, simple for Pipelines */}
                                <div className="bg-slate-950/60 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        {project.category === 'mcp' ? (
                                            <Cpu size={14} className="text-indigo-400 animate-pulse" />
                                        ) : (
                                            <Database size={14} className="text-blue-400" />
                                        )}
                                        <span className="text-[11px] font-mono text-slate-400 font-semibold">{project.category === 'mcp' ? 'mcp-server' : 'data-pipeline'}</span>
                                    </div>
                                    
                                    {project.category === 'mcp' ? (
                                        <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono">
                                            <span className="flex items-center gap-1"><Star size={10} className="fill-slate-600/50" /> {project.stars}</span>
                                            <span className="flex items-center gap-1"><GitFork size={10} /> {project.forks}</span>
                                        </div>
                                    ) : (
                                        <span className="text-[9px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded font-mono uppercase font-semibold">Production</span>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Project Title */}
                                    <h3 className="text-lg font-bold text-white font-mono mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    {/* Project Description */}
                                    <p className="text-slate-400 text-xs leading-relaxed flex-grow mb-5">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[10px] font-mono text-blue-400/90 bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Footers */}
                                    <div className="pt-4 border-t border-slate-800/40 flex flex-col gap-3">
                                        {/* Clone command for MCP */}
                                        {project.category === 'mcp' && project.cloneCommand && (
                                            <div className="bg-slate-950 rounded border border-slate-800/80 p-2 flex items-center justify-between gap-2">
                                                <code className="text-[9px] font-mono text-slate-400 truncate w-full">{project.cloneCommand.split('\n')[0]}</code>
                                                <button
                                                    onClick={() => handleCopy(project.cloneCommand, idx)}
                                                    className="text-slate-500 hover:text-white transition-colors shrink-0"
                                                    title="Copy clone command"
                                                >
                                                    {copiedIndex === idx ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
                                                </button>
                                            </div>
                                        )}
                                        
                                        {/* Real-world KPIs for Pipelines */}
                                        {project.category === 'pipeline' && project.impact && (
                                            <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                                                <span className="text-emerald-400">Impact:</span>
                                                <span className="text-slate-200">{project.impact}</span>
                                            </div>
                                        )}

                                        {/* Links */}
                                        <div className="flex justify-end gap-3 mt-1">
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 hover:underline transition-all"
                                            >
                                                <Github size={12} /> github
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;
