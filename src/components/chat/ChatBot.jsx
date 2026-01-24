import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Key, Sparkles } from 'lucide-react';
import { chatKnowledgeBase, defaultAnswer } from './chatKnowledgeBase';
import { initializeGemini, getGeminiResponse } from '../../utils/gemini';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi! I'm Sricharan's AI assistant. Ask me anything about his experience, skills, or why you should hire him!" }
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
        scrollToBottom();
    }, [messages, isTyping, showKeyInput]);

    const handleInitializeAI = (e) => {
        e.preventDefault();
        if (initializeGemini(apiKey)) {
            setIsModelReady(true);
            setShowKeyInput(false);
            setMessages(prev => [...prev, { type: 'bot', text: "Supercharged with Gemini AI! I can now answer complex questions about Sricharan." }]);
        } else {
            alert("Invalid API Key or initialization failed.");
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const userMessage = { type: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);

        const currentInput = input.toLowerCase();
        const originalInput = input;
        setInput('');
        setIsTyping(true);

        if (isModelReady) {
            // Use Gemini
            const response = await getGeminiResponse(originalInput);
            setMessages((prev) => [...prev, { type: 'bot', text: response }]);
            setIsTyping(false);
        } else {
            // Use Fallback (Keyword Match)
            setTimeout(() => {
                let botResponse = defaultAnswer;
                // Simple keyword matching logic
                for (const entry of chatKnowledgeBase) {
                    if (entry.keywords.some(keyword => currentInput.includes(keyword))) {
                        botResponse = entry.answer;
                        break;
                    }
                }
                setMessages((prev) => [...prev, { type: 'bot', text: botResponse }]);
                setIsTyping(false);
            }, 600);
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-blue-600/50 hover:bg-blue-500 transition-all"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-slate-800 p-4 flex items-center justify-between border-b border-slate-700">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mr-3 relative">
                                    <Bot size={20} className={isModelReady ? "text-purple-400" : "text-blue-400"} />
                                    {isModelReady && (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute -top-1 -right-1"
                                        >
                                            <Sparkles size={12} className="text-yellow-400 fill-yellow-400" />
                                        </motion.div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Assistant {isModelReady && <span className="text-xs text-purple-400 font-normal border border-purple-500/30 px-1 rounded">AI</span>}</h3>
                                    <p className="text-xs text-green-400 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        Online
                                    </p>
                                </div>
                            </div>

                            {!isModelReady && (
                                <button
                                    onClick={() => setShowKeyInput(!showKeyInput)}
                                    className="text-slate-400 hover:text-white transition-colors"
                                    title="Enable AI Mode"
                                >
                                    <Key size={18} />
                                </button>
                            )}
                        </div>

                        {/* Messages */}
                        <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-950/50">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.type === 'user'
                                                ? 'bg-blue-600 text-white rounded-tr-none'
                                                : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700 flex gap-1">
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}

                            {showKeyInput && !isModelReady && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-xl mb-4"
                                >
                                    <h4 className="text-purple-300 text-sm font-bold mb-2 flex items-center gap-2">
                                        <Sparkles size={14} /> Enable AI Intelligence
                                    </h4>
                                    <p className="text-slate-400 text-xs mb-3">
                                        Enter your Google Gemini API Key to enable real conversational AI based on Sricharan's resume.
                                    </p>
                                    <form onSubmit={handleInitializeAI} className="flex gap-2">
                                        <input
                                            type="password"
                                            value={apiKey}
                                            onChange={(e) => setApiKey(e.target.value)}
                                            placeholder="Paste API Key here"
                                            className="flex-grow bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:border-purple-500 focus:outline-none"
                                        />
                                        <button className="bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors">
                                            Start
                                        </button>
                                    </form>
                                    <p className="text-[10px] text-slate-500 mt-2 text-center">
                                        Keys are not stored permanently.
                                    </p>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 bg-slate-800 border-t border-slate-700 flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={isModelReady ? "Ask AI anything..." : "Ask something..."}
                                className="flex-grow bg-slate-900 border border-slate-700 rounded-full py-2 px-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                disabled={isTyping}
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
