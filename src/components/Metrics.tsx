import React from 'react';

export const Metrics: React.FC = () => {
    const stats = [
        { value: '98.4%', label: 'Retention Score', sub: 'Client satisfaction threshold' },
        { value: '1,400+', label: 'Transformations', sub: 'Verified structural results' },
        { value: '14.2%', label: 'Avg Fat Reduction', sub: 'In initial 12-week cycles' },
        { value: '2.4x', label: 'Energy Multiplier', sub: 'Biometric baseline growth' }
    ];

    return (
        <section className="bg-zinc-950 text-white py-16 px-6 sm:px-12 select-none border-y border-zinc-900">
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((s, idx) => (
                    <div key={idx} className="text-left space-y-1">
                        <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none uppercase bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">{s.value}</h3>
                        <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400 pt-1">{s.label}</p>
                        <p className="text-[10px] font-medium text-zinc-600 tracking-tight">{s.sub}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};