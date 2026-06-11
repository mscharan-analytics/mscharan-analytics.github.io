import React from 'react';

const ParticleBackground = () => {
    return (
        <div className="fixed inset-0 -z-20 w-full h-full bg-slate-950 overflow-hidden pointer-events-none">
            {/* Elegant SVG grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
            
            {/* Subtle, soft grid dots */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:2rem_2rem] opacity-30"></div>

            {/* Ambient Blur Glows - Fully hardware accelerated */}
            <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/5 blur-[130px] animate-[pulse_10s_ease-in-out_infinite] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/5 blur-[130px] animate-[pulse_8s_ease-in-out_infinite_delay-2s] pointer-events-none"></div>
            <div className="absolute top-[40%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-purple-600/3 blur-[120px] animate-[pulse_12s_ease-in-out_infinite_delay-1s] pointer-events-none"></div>
            
            {/* Top gradient highlight for page depth */}
            <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
    );
};

export default ParticleBackground;
