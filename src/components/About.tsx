import React from 'react';
import coachImg from '../assets/coach-profile.png';

export const About: React.FC = () => {
    return (
        <section id="about" className="max-w-7xl mx-auto px-6 sm:px-12 py-24 select-none bg-transparent">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Left column image grid wrapper */}
                <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[360px] aspect-[3/4] bg-zinc-200 rounded-[2.5rem] overflow-hidden shadow-xl border border-zinc-200/60 group">
                        <img src={coachImg} alt="Head Female Coach Profile" className="w-full h-full object-cover grayscale-[10%] group-hover:scale-102 transition-transform duration-[1500ms]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                    </div>
                </div>

                {/* Right column copy metrics text */}
                <div className="lg:col-span-7 text-left space-y-6">
                    <span className="text-[10px] font-black tracking-widest text-sky-500 uppercase">The Architect</span>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.04em] text-zinc-950 uppercase leading-none">Meet Coach Valerie.</h2>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-600 leading-relaxed max-w-xl">
                        With over a decade of high-performance physical calibration metrics, Valerie has spent her career breaking clients out of the exhaustion loop. Her unique combination of kinetic biomechanics, cellular nutrition tracking, and hormonal lifecycle alignment helps high-achieving female leaders build bodies that can effortlessly support their professional ambitions.
                    </p>
                    <div className="pt-2">
                        <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 bg-zinc-950 text-white font-black text-[11px] tracking-widest uppercase rounded-full hover:bg-sky-500 transition-colors">Learn Our Methodology</a>
                    </div>
                </div>

            </div>
        </section>
    );
};