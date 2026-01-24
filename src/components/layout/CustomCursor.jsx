import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Check for hoverable elements (links, buttons, interactive items)
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.closest('.interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Probe Cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    rotate: isHovering ? 45 : 0
                }}
                transition={{ type: "spring", stiffness: 800, damping: 28 }}
            >
                {/* Crosshair Scanner */}
                <div className={`w-8 h-8 border border-blue-400 rounded-full flex items-center justify-center relative transition-colors duration-200 ${isHovering ? 'border-cyan-400 border-2' : 'border-blue-500'}`}>
                    <div className="w-1 h-3 bg-blue-500 absolute top-[-4px]"></div>
                    <div className="w-1 h-3 bg-blue-500 absolute bottom-[-4px]"></div>
                    <div className="w-3 h-1 bg-blue-500 absolute left-[-4px]"></div>
                    <div className="w-3 h-1 bg-blue-500 absolute right-[-4px]"></div>
                    <div className={`w-1 h-1 bg-white rounded-full ${isHovering ? 'bg-cyan-300' : ''}`}></div>
                </div>
            </motion.div>

            {/* Coordinate Readout */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block"
                animate={{
                    x: mousePosition.x + 20,
                    y: mousePosition.y + 20,
                    opacity: 1
                }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            >
                <div className="bg-slate-900/80 backdrop-blur text-[10px] font-mono text-blue-400 px-2 py-1 rounded border border-blue-500/30 whitespace-nowrap">
                    X: {mousePosition.x} | Y: {mousePosition.y}
                    {isHovering && <span className="text-cyan-400 ml-2">[TARGET_LOCKED]</span>}
                </div>
            </motion.div>
        </>
    );
};

export default CustomCursor;
