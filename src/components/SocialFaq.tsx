import React, { useState } from 'react';
import { Star, HelpCircle } from 'lucide-react';

export const SocialFaq: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const reviews = [
        { user: 'Sarah K.', role: 'Tech Exec', text: 'I completely rebuilt my energy containment baseline. Valerie changed my body without interrupting my corporate schedule.' },
        { user: 'Dr. Elena R.', role: 'Clinical MD', text: 'The postnatal programming is medically brilliant. True structural recovery that prioritizes core longevity.' }
    ];

    const faqs = [
        { q: 'How long do I need to commit initially?', a: 'All performance capsule conditioning residencies operate on an initial 12-week adaptation structure.' },
        { q: 'Can I swap programs mid-cycle if needed?', a: 'Yes, if your metrics dictate a change in physiological focus, we adjust plans dynamically.' }
    ];

    return (
        <section className="max-w-4xl mx-auto px-6 py-22 select-none border-t border-zinc-200/60 text-left">
            {/* Testimonials */}
            <div className="mb-20 space-y-8">
                <h3 className="text-xs font-black tracking-widest text-sky-500 uppercase">Client Transcripts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-white border border-zinc-200 p-6 rounded-[1.8rem] shadow-sm space-y-3">
                            <div className="flex gap-0.5 text-sky-500"><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /></div>
                            <p className="text-xs font-medium text-zinc-600 leading-relaxed italic">"{r.text}"</p>
                            <p className="text-[10px] font-black uppercase text-zinc-950 tracking-wider">{r.user} — <span className="text-zinc-400 font-bold">{r.role}</span></p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Accordion */}
            <div id="faq" className="space-y-6">
                <h3 className="text-xs font-black tracking-widest text-sky-500 uppercase flex items-center gap-1.5"><HelpCircle className="w-4 h-4" /> Addressed Queries</h3>
                <div className="space-y-3">
                    {faqs.map((f, idx) => (
                        <div key={idx} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all">
                            <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} type="button" className="w-full px-6 py-4 flex justify-between items-center text-xs font-black text-zinc-950 uppercase focus:outline-none cursor-pointer">
                                <span>{f.q}</span> <span className="text-sky-500">{activeFaq === idx ? '−' : '＋'}</span>
                            </button>
                            <div className={`transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'max-h-24 border-t border-zinc-100 p-6 bg-zinc-50/50' : 'max-h-0'}`}>
                                <p className="text-xs text-zinc-500 font-medium leading-relaxed">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};