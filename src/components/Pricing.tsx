import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const tiers = [
        { title: 'Lean & Toned', price: isAnnual ? 119 : 149, features: ['Kinetic toning programming', 'Metabolic baseline testing', 'Bi-weekly check-in sequences', 'Digital video review library'] },
        { title: 'Hormonal Balance', price: isAnnual ? 159 : 199, features: ['Cortisol & thyroid sync trackers', 'Cycle-mapped workout metrics', 'Custom baseline macro profiles', 'Direct message priority support'] },
        { title: 'Postnatal Restoration', price: isAnnual ? 199 : 249, features: ['Pelvic floor stability blocks', 'Diastasis recti safe exercises', 'Sleep management framework', '1:1 video consultation node'] }
    ];

    return (
        <section id="pricing" className="max-w-7xl mx-auto px-6 sm:px-12 py-32 border-t border-zinc-200/60 select-none">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.04em] text-zinc-950 uppercase">Curated Access Tiers.</h2>

                {/* Toggle Switch */}
                <div className="inline-flex bg-zinc-100 p-1 rounded-full border border-zinc-200">
                    <button onClick={() => setIsAnnual(false)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors ${!isAnnual ? 'bg-zinc-950 text-white' : 'text-zinc-600'}`}>Monthly</button>
                    <button onClick={() => setIsAnnual(true)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors ${isAnnual ? 'bg-zinc-950 text-white' : 'text-zinc-600'}`}>Yearly Term</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tiers.map((t, idx) => (
                    <div key={idx} className="bg-white border border-zinc-200 rounded-[2.5rem] p-8 flex flex-col justify-between text-left shadow-sm relative hover:border-sky-400 transition-colors">
                        <div className="space-y-4">
                            <h3 className="text-xl font-black text-zinc-950 uppercase tracking-tight">{t.title}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-zinc-950">${t.price}</span>
                                <span className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest">/ Month</span>
                            </div>
                            <ul className="space-y-3 pt-4 border-t border-zinc-100">
                                {t.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-xs text-zinc-600 font-medium tracking-tight">
                                        <Check className="w-3.5 h-3.5 text-sky-500 shrink-0" /> <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button type="button" className="w-full py-3.5 bg-zinc-950 hover:bg-sky-500 text-white font-black text-[11px] tracking-widest uppercase rounded-full mt-8 transition-colors cursor-pointer text-center">Select Program</button>
                    </div>
                ))}
            </div>
        </section>
    );
};