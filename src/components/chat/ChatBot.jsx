import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Settings, Sparkles } from 'lucide-react';
import { chatKnowledgeBase, defaultAnswer } from './chatKnowledgeBase';
import { initializeGemini, getGeminiResponse } from '../../utils/gemini';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hello! I am Sricharan's career assistant. Feel free to ask me about his experience, core skills, or projects!" }
    ]);
    const [input, setInput] = useState('');
    const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || '');
    const [isModelReady, setIsModelReady] = useState(false);
    const [showKeyInput, setShowKeyInput] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        // Auto-initialize if key is present in env
        if (import.meta.env.VITE_GEMINI_API_KEY && !isModelReady) {
            if (initializeGemini(import.meta.env.VITE_GEMINI_API_KEY)) {
                setIsModelReady(true);
            }
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(scrollToBottom, 100);
        }
    }, [messages, isTyping, showKeyInput, isOpen]);

    const handleInitializeAI = (e) => {
        e.preventDefault();
        if (initializeGemini(apiKey)) {
            setIsModelReady(true);
            setShowKeyInput(false);
            setMessages(prev => [...prev, { type: 'bot', text: "AI Mode Active! I am now powered by Google Gemini to answer detailed questions about Sricharan's background." }]);
        } else {
            alert("Could not initialize. Please check your Gemini API key.");
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { type: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);

        const currentInput = input.toLowerCase();
        const originalInput = input;
        setInput('');
        setIsTyping(true);

        if (isModelReady) {
            const response = await getGeminiResponse(originalInput);
            setMessages((prev) => [...prev, { type: 'bot', text: response }]);
            setIsTyping(false);
        } else {
            // Local fallback logic (responsive simulated delay)
            setTimeout(() => {
                let botResponse = defaultAnswer;
                for (const entry of chatKnowledgeBase) {
                    if (entry.keywords.some(keyword => currentInput.includes(keyword))) {
                        botResponse = entry.answer;
                        break;
                    }
                }
                setMessages((prev) => [...prev, { type: 'bot', text: botResponse }]);
                setIsTyping(false);
            }, 500);
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-indigo-600/30 transition-all flex items-center justify-center border border-indigo-500/25"
            >
                {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.96 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-[380px] bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px]"
                    >
                        {/* Header */}
                        <div className="bg-slate-950/80 px-4 py-3 flex items-center justify-between border-b border-slate-800/60">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-500/20 relative">
                                    <Bot size={18} className={isModelReady ? "text-indigo-400" : "text-blue-400"} />
                                    {isModelReady && (
                                        <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-indigo-500 rounded-full flex items-center justify-center border border-slate-950">
                                            <Sparkles size={6} className="text-white fill-white" />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-xs sm:text-sm font-mono flex items-center gap-1.5">
                                        Portfolio Assistant
                                        {isModelReady && <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-1 py-0.2 rounded font-semibold uppercase">AI</span>}
                                    </h3>
                                    <p className="text-[10px] text-slate-400 flex items-center gap-1">
                                        <span className={`w-1.5 h-1.5 rounded-full ${isModelReady ? 'bg-indigo-400' : 'bg-blue-400 animate-pulse'}`}></span>
                                        {isModelReady ? 'Gemini Mode Active' : 'Local Knowledge Mode'}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowKeyInput(!showKeyInput)}
                                className={`p-1.5 rounded-lg border transition-colors ${showKeyInput ? 'bg-slate-800 text-white border-slate-700' : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-950/40'}`}
                                title="Configure AI Integration"
                            >
                                <Settings size={15} />
                            </button>
                        </div>

                        {/* Messages Box */}
                        <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-950/40 scrollbar-thin">
                            
                            {showKeyInput && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl mb-2 text-xs"
                                >
                                    <h4 className="text-slate-200 font-bold mb-1 flex items-center gap-1.5 font-mono">
                                        <Sparkles size={12} className="text-indigo-400" /> Supercharge with Gemini
                                    </h4>
                                    <p className="text-slate-400 mb-3 font-light leading-relaxed">
                                        By default, this chatbot uses a local database query to answer questions. Paste your Gemini API key to enable a live LLM chat.
                                    </p>
                                    <form onSubmit={handleInitializeAI} className="flex gap-2">
                                        <input
                                            type="password"
                                            value={apiKey}
                                            onChange={(e) => setApiKey(e.target.value)}
                                            placeholder="Paste API Key here..."
                                            className="flex-grow bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white text-[11px] focus:border-indigo-500 focus:outline-none font-mono"
                                        />
                                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors font-mono">
                                            Enable
                                        </button>
                                    </form>
                                    <p className="text-[9px] text-slate-500 mt-2 text-center">
                                        API keys are parsed client-side and never saved.
                                    </p>
                                </motion.div>
                            )}

                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex gap-2.5 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.type === 'bot' && (
                                        <div className="w-6 h-6 bg-slate-900 rounded-md border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                                            <Bot size={12} className="text-blue-400" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[78%] p-3 rounded-xl text-xs leading-relaxed ${msg.type === 'user'
                                                ? 'bg-blue-600 text-white rounded-tr-none'
                                                : 'bg-slate-900 text-slate-300 rounded-tl-none border border-slate-800/80'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                    {msg.type === 'user' && (
                                        <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                                            <User size={12} className="text-white" />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex gap-2.5 justify-start">
                                    <div className="w-6 h-6 bg-slate-900 rounded-md border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                                        <Bot size={12} className="text-blue-400" />
                                    </div>
                                    <div className="bg-slate-900/50 p-3 rounded-xl rounded-tl-none border border-slate-800 flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Form */}
                        <form onSubmit={handleSend} className="p-3 bg-slate-950/80 border-t border-slate-800 flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={isModelReady ? "Ask Gemini anything about Sricharan..." : "Ask a career question..."}
                                className="flex-grow bg-slate-900 border border-slate-800 rounded-lg py-2 px-3 text-white text-xs focus:outline-none focus:border-blue-500 transition-colors"
                                disabled={isTyping}
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                            >
                                <Send size={14} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
