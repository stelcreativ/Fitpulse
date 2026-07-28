import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';



export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Structural visual alignment rules based on scroll depth or hero selections
    const useWhiteDesignMode = !isScrolled;

    return (
        <div className="fixed top-6 left-0 w-full z-50 px-4 sm:px-8 select-none transition-all duration-300">
            <nav className={`max-w-7xl mx-auto rounded-full px-6 py-3.5 transition-all duration-500 border ${isScrolled
                ? 'bg-white/80 backdrop-blur-md border-zinc-200/50 shadow-sm'
                : useWhiteDesignMode
                    ? 'bg-white/10 backdrop-blur-md border-white/10 shadow-lg' // Clean, soft visible contrast capsule for Option A
                    : 'bg-zinc-950/5 border-zinc-950/5'
                }`}>
                <div className="flex items-center justify-between">

                    {/* Logo element without icons */}
                    <div className={`font-bold tracking-tight text-sm uppercase transition-colors duration-300 ${useWhiteDesignMode ? 'text-white' : 'text-zinc-950'
                        }`}>
                        <span>FitPulse</span>
                    </div>

                    {/* Links Row */}
                    <div className={`hidden md:flex items-center gap-1 text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${useWhiteDesignMode ? 'text-white/60' : 'text-zinc-950/60'
                        }`}>
                        <a href="#services" className={`px-4 py-2 rounded-full transition-colors ${useWhiteDesignMode ? 'hover:bg-white/10 hover:text-white' : 'hover:bg-zinc-950/5 hover:text-zinc-950'}`}>Services</a>
                        <a href="#about" className={`px-4 py-2 rounded-full transition-colors ${useWhiteDesignMode ? 'hover:bg-white/10 hover:text-white' : 'hover:bg-zinc-950/5 hover:text-zinc-950'}`}>About</a>
                        <a href="#pricing" className={`px-4 py-2 rounded-full transition-colors ${useWhiteDesignMode ? 'hover:bg-white/10 hover:text-white' : 'hover:bg-zinc-950/5 hover:text-zinc-950'}`}>Tiers</a>
                        <a href="#faq" className={`px-4 py-2 rounded-full transition-colors ${useWhiteDesignMode ? 'hover:bg-white/10 hover:text-white' : 'hover:bg-zinc-950/5 hover:text-zinc-950'}`}>FAQ</a>
                    </div>

                    {/* Primary Action */}
                    <button type="button" className={`hidden md:block px-5 py-2.5 rounded-full text-[10px] tracking-widest font-black uppercase transition-all duration-300 cursor-pointer ${useWhiteDesignMode
                        ? 'bg-white text-zinc-950 hover:bg-sky-400'
                        : 'bg-zinc-950 text-white hover:bg-sky-500'
                        }`}>
                        Apply Now
                    </button>

                    {/* Hamburger Icon */}
                    <button onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        aria-label="Toggle mobile menu"
                        className={`md:hidden p-1 rounded-full cursor-pointer ${useWhiteDesignMode ? 'text-white' : 'text-zinc-950'}`}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile menu sheet drawer */}
                {isOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-zinc-200/20 flex flex-col gap-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-950 px-2">
                        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#pricing" onClick={() => setIsOpen(false)}>Tiers</a>
                        <button type="button" className="w-full py-3 bg-zinc-950 text-white rounded-full mt-2 text-[10px] tracking-widest font-black">Apply Now</button>
                    </div>
                )}
            </nav>
        </div>
    );
};