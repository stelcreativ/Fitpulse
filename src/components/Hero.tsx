import React from 'react';
import bgHeroImg from '../assets/hero-bg.jpg';



export const Hero: React.FC = () => {

    return (
        <header className="relative h-[780px] flex items-center justify-start px-6 sm:px-12 lg:px-24 w-full select-none overflow-hidden bg-zinc-950">

            {/* Immersive Full-Width Image Layer */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src={bgHeroImg}
                    alt="Athletic training performance campaign lookbook"
                    className="w-full h-full object-cover opacity-70 scale-101 grayscale-[10%]"
                />
                {/* Editorial vignette gradient overlay ensuring effortless text legibility on the left */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
            </div>

            {/* Left-Aligned Creative Content Stack */}
            <div className="relative z-10 max-w-2xl text-left space-y-6 animate-reveal text-white">
                <h1 className="text-4xl sm:text-7xl font-bold tracking-[-0.04em] uppercase leading-[1.02]">
                    Reconstruct <br />
                    your baseline.
                </h1>
                <p className="max-w-md text-xs sm:text-sm font-light text-zinc-300 leading-relaxed tracking-wide">
                    Elite online and physical biomechanical alignment frameworks curated specifically for high-performing female leaders looking to expand physical capacity.
                </p>

                {/* Updated Call To Action button layout */}
                <div className="pt-4">
                    <button
                        type="button"
                        onClick={() => alert("Launching local residency scheduling engine...")}
                        className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-sky-400 text-zinc-950 font-black text-[11px] tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl shadow-white/5 cursor-pointer"
                    >
                        Book your free assessment
                    </button>
                </div>
            </div>

        </header>

    );
}