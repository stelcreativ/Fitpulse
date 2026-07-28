import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { BentoServices } from './components/BentoServices';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { SocialFaq } from './components/SocialFaq';
import { FitnessFooter } from './components/FitnessFooter';
import './index.css'

export default function App() {

  return (
    <div className="min-h-screen flex flex-col justify-between bg-transparent antialiased selection:bg-sky-400 selection:text-zinc-950">

      {/* Dynamic navbar adapting seamlessly during scrolls */}
      <Navbar />

      <main>
        {/* Render selected Hero arrangement path layout */}
        <Hero />
        {/* Core retention data analytics block matrix */}
        <Metrics />
        {/* Asymmetrical capabilities Bento grid box */}
        <BentoServices />
        {/* Dual column bio-profile presentation wrapper */}
        <About />
        {/* Recurring pricing table configurations grid */}
        <Pricing />
        {/* Social Proof transcripts & interactive FAQ accordions */}
        <SocialFaq />

      </main>

      {/* Baseline Footer Strip */}
      <FitnessFooter />

    </div>
  );
}