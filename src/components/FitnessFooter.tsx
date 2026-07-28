import React from 'react';

export const FitnessFooter: React.FC = () => {
    return (
        <footer className="bg-zinc-950 text-zinc-400 text-xs py-16 px-6 sm:px-12 select-none border-t border-zinc-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-zinc-900">

                {/* Col 1: Brand Context */}
                <div className="space-y-4 text-left">
                    <span className="font-black tracking-tight text-base uppercase text-white">
                        AuraPulse // Core
                    </span>
                    <p className="text-zinc-500 font-medium leading-relaxed max-w-xs">
                        Elite physical performance and behavioral conditioning frameworks designed to scale capability and optimize biological velocity.
                    </p>
                </div>

                {/* Col 2: Directory */}
                <div className="space-y-3 text-left">
                    <h4 className="text-[10px] tracking-widest uppercase font-black text-white">Framework Directory</h4>
                    <ul className="space-y-2.5 font-bold uppercase text-zinc-500 text-[11px]">
                        <li><a href="#services" className="hover:text-white transition-colors">Methodologies</a></li>
                        <li><a href="#about" className="hover:text-white transition-colors">The Coach</a></li>
                        <li><a href="#pricing" className="hover:text-white transition-colors">Access Tiers</a></li>
                        <li><a href="#faq" className="hover:text-white transition-colors">Queries</a></li>
                    </ul>
                </div>

                {/* Col 3: Contact */}
                <div className="space-y-3 text-left">
                    <h4 className="text-[10px] tracking-widest uppercase font-black text-white">Communications Node</h4>
                    <ul className="space-y-2.5 font-semibold text-zinc-500">
                        <li><a href="mailto:concierge@aurapulse.com" className="hover:text-white transition-colors">concierge@fitpulse.com</a></li>
                        <li>Line 1: +1 (555) 0144 // Support</li>
                        <li className="leading-relaxed">FitPulse<br />Mayfair District, London</li>
                    </ul>
                </div>

                {/* Col 4: Operational Status */}
                <div className="space-y-3 text-left">
                    <h4 className="text-[10px] tracking-widest uppercase font-black text-white">System Diagnostics</h4>
                    <p className="text-zinc-500 font-medium leading-relaxed">
                        All localized coaching pipelines and client progress tracking networks are fully online.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full font-mono text-[10px] uppercase font-bold">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        Core Nodes Operational
                    </div>
                </div>

            </div>

            {/* Policy Baseline Copyright Row */}
            <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-black uppercase text-zinc-600 tracking-wider w-full">
                <p>© {new Date().getFullYear()} AuraPulse Athletics Inc. All Rights Reserved.</p>
                <div className="flex items-center gap-6">
                    <button onClick={() => alert("Launching Privacy Parameters Policy standard...")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 uppercase font-black text-[10px]">Privacy Policy</button>
                    <button onClick={() => alert("Launching Terms & Conditions Agreement layout...")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 uppercase font-black text-[10px]">Terms & Conditions</button>
                </div>
            </div>
        </footer>
    );
};