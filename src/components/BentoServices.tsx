import React from 'react';
import { ArrowUpRight, Zap, Target, Apple, Shield } from 'lucide-react';

export const BentoServices: React.FC = () => {
    return (
        <section id="services" className="max-w-7xl mx-auto px-6 sm:px-12 py-32 select-none text-left">
            <div className="space-y-4 mb-16">
                <span className="text-[10px] font-black tracking-widest text-sky-500 uppercase border border-sky-400/20 bg-sky-500/5 px-3 py-1 rounded-full">Methodologies</span>
                <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.04em] text-zinc-950 uppercase leading-none">Architectural Services.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[260px] md:auto-rows-[280px]">
                {/* Box 1: Online coaching (Tall box) */}
                <div className="md:col-span-8 bg-gradient-to-br from-sky-400/10 to-indigo-500/10 border border-sky-100 p-8 rounded-[2.5rem] flex flex-col justify-between group shadow-sm">
                    <div className="w-10 h-10 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-600"><Zap className="w-4 h-4" /></div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-black text-zinc-950 uppercase">Elite Online Programming</h3>
                        <p className="text-xs text-zinc-600 font-medium tracking-tight mt-1 max-w-md">Comprehensive biometric monitoring, dynamic progressive adjustment frameworks, and daily text accountability tracking modules.</p>
                    </div>
                </div>

                {/* Box 2: In Person (Square box) */}
                <div className="md:col-span-4 bg-white border border-zinc-200 p-8 rounded-[2.5rem] flex flex-col justify-between group shadow-sm relative">
                    <div className="w-10 h-10 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-950"><Target className="w-4 h-4" /></div>
                    <div>
                        <h3 className="text-lg font-black text-zinc-950 uppercase">1:1 Private Residencies</h3>
                        <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-1">High-intensity biomechanical sessions delivered in private boutique facility nodes.</p>
                    </div>
                    <button type="button" className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-sky-500 transition-colors cursor-pointer"><ArrowUpRight className="w-3.5 h-3.5" /></button>
                </div>

                {/* Box 3: Nutrition */}
                <div className="md:col-span-4 bg-zinc-950 text-white p-8 rounded-[2.5rem] flex flex-col justify-between shadow-lg relative">
                    <div className="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center text-sky-400"><Apple className="w-4 h-4" /></div>
                    <div>
                        <h3 className="text-lg font-black text-white uppercase">Metabolic Nutrition</h3>
                        <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-1">Macro-nutrient tracking systems aligned perfectly with hormone synchronization matrices.</p>
                    </div>
                </div>

                {/* Box 4: Corporate Optimization */}
                <div className="md:col-span-8 bg-white border border-zinc-200 p-8 rounded-[2.5rem] flex flex-col justify-between group shadow-sm relative">
                    <div className="w-10 h-10 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-600"><Shield className="w-4 h-4" /></div>
                    <div>
                        <h3 className="text-xl font-black text-zinc-950 uppercase">Corporate Health Architecture</h3>
                        <p className="text-xs text-zinc-500 font-medium leading-relaxed mt-1 max-w-md">Scalable executive wellness programs engineered to decrease cognitive fatigue, increase retention metrics, and optimize corporate team output capability.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};