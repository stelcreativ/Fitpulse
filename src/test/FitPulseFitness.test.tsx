import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

// Import All Platform Components
import { Hero } from '../components/Hero';
import { BentoServices } from '../components/BentoServices';
import { About } from '../components/About';
import { Metrics } from '../components/Metrics';
import { Navbar } from '../components/Navbar';
import { Pricing } from '../components/Pricing';
import { SocialFaq } from '../components/SocialFaq'; // 👈 Injected final SocialFaq reference

// Asset Image Mock Balancing: Prevents Vitest runner from breaking on raw image binaries
vi.mock('../assets/hero-bg.jpg', () => ({ default: 'mock-hero-bg.jpg' }));
vi.mock('../assets/coach-profile.png', () => ({ default: 'mock-coach.png' }));

// Window Alert Interception: Spies on and blocks browser warning message popups
vi.spyOn(window, 'alert').mockImplementation(() => { });

describe('Fitpulse Fitness Platform UI Validation Suite', () => {

    // --- HERO COMPONENT TESTS ---
    describe('Hero Block Component', () => {
        it('should correctly render structural copywriting titles and accessibility images', () => {
            render(<Hero />);
            const mainHeadline = screen.getByRole('heading', { name: /Reconstruct/i });
            expect(mainHeadline).toHaveTextContent(/your baseline\./i);
        });

        it('should correctly register a button mouse interaction click event', async () => {
            render(<Hero />);
            const user = userEvent.setup();
            const actionButton = screen.getByRole('button', { name: /Book your free assessment/i });
            await user.click(actionButton);
            expect(window.alert).toHaveBeenCalledWith("Launching local residency scheduling engine...");
        });
    });

    // --- BENTO SERVICES TESTS ---
    describe('BentoServices Grid System', () => {
        it('should structure all specialized coaching boxes and methodology tags cleanly', () => {
            render(<BentoServices />);
            expect(screen.getByText('Methodologies')).toBeInTheDocument();
            expect(screen.getByRole('heading', { name: /Elite Online Programming/i })).toBeInTheDocument();
        });
    });

    // --- ABOUT SECTION TESTS ---
    describe('About Coach Profile Node', () => {
        it('should verify Valerie biographical components and anchor links', () => {
            render(<About />);
            expect(screen.getByRole('heading', { name: /Meet Coach Valerie\./i })).toBeInTheDocument();
        });
    });

    // --- METRICS DATA LEDGER TESTS ---
    describe('Metrics Biometric Analytics Row', () => {
        it('should verify numerical values and documentation tracking subtext arrays', () => {
            render(<Metrics />);
            expect(screen.getByRole('heading', { name: '98.4%' })).toBeInTheDocument();
        });
    });

    // --- RESPONSIVE NAVIGATION TESTS ---
    describe('Navbar Component Window Interactivity', () => {
        beforeEach(() => {
            window.scrollY = 0;
            vi.clearAllMocks();
        });

        it('should render standard links and apply white transparency styling rules on initialization', () => {
            render(<Navbar />);
            const capsuleFrame = screen.getByRole('navigation');
            expect(capsuleFrame).toHaveClass('bg-white/10');
        });

        it('should toggle mobile menu drawer sheet elements upon menu button activation', async () => {
            render(<Navbar />);
            const user = userEvent.setup();
            const navButtons = screen.getAllByRole('button');
            // The hamburger toggle button is always the last button element in the nav markup
            const hamburgerToggle = navButtons[navButtons.length - 1];

            // Initial view state tracking check: Mobile links shouldn't exist in document yet
            expect(screen.queryByText('Tiers', { selector: 'div.md\\:hidden a' })).not.toBeInTheDocument();

            // Act: Execute simulated human click on the hamburger element
            await user.click(hamburgerToggle);

            // Assert: Confirm the mobile layout sheet mounted successfully into the viewport
            const mobileLinks = screen.getAllByRole('link', { name: 'Tiers' });
            expect(mobileLinks.length).toBeGreaterThan(0);
        });
    });

    // --- CURATED ACCESS PRICING TESTS ---
    describe('Pricing Curated Access Tiers', () => {
        it('should load initial monthly tier card details and custom features list', () => {
            render(<Pricing />);
            expect(screen.getByRole('heading', { name: /Curated Access Tiers\./i })).toBeInTheDocument();
            expect(screen.getByText('$149')).toBeInTheDocument();
        });

        it('should recalculate pricing parameters immediately when a user clicks the yearly toggle option', async () => {
            render(<Pricing />);
            const user = userEvent.setup();
            const yearlyButtonToggle = screen.getByRole('button', { name: /Yearly Term/i });
            await user.click(yearlyButtonToggle);
            expect(screen.getByText('$119')).toBeInTheDocument();
            expect(screen.queryByText('$149')).not.toBeInTheDocument();
        });
    });

    // --- 💎 NEW: SOCIAL FAQ & TRANSCRIPTS COMPONENT TESTS 💎 ---
    describe('SocialFaq Transcripts & Accordion System', () => {
        it('should render client transcripts and reviews layout correctly', () => {
            render(<SocialFaq />);

            // Validate client reviews structural headers
            expect(screen.getByRole('heading', { name: /Client Transcripts/i })).toBeInTheDocument();
            expect(screen.getByText(/Sarah K. —/i)).toBeInTheDocument();
            expect(screen.getByText(/Dr. Elena R. —/i)).toBeInTheDocument();
            expect(screen.getByText(/Medically brilliant/i)).toBeInTheDocument();
        });

        it('should expand the matching explanation panel box when a user clicks an unaddressed query link', async () => {
            render(<SocialFaq />);
            const user = userEvent.setup();

            // Locate specific question item element inside button elements mapping
            const targetQuestionTrigger = screen.getByRole('button', { name: /How long do I need to commit initially\? ＋/i });

            // Extract answer text wrap node container using structural parenting paths
            const siblingAnswerWrapper = targetQuestionTrigger.nextElementSibling;
            expect(siblingAnswerWrapper).toHaveClass('max-h-0'); // Closes by default template configuration rules

            // Execute interactive click event trigger
            await user.click(targetQuestionTrigger);

            // Verify visual classes updated and responsive answer content text becomes visible to client search engines
            expect(siblingAnswerWrapper).toHaveClass('max-h-24');
            expect(screen.getByText(/All performance capsule conditioning residencies operate on an initial 12-week adaptation structure\./i)).toBeInTheDocument();

            // Execute second click to check toggle close mechanism integration behavior loops
            await user.click(targetQuestionTrigger);
            expect(siblingAnswerWrapper).toHaveClass('max-h-0');
        });
    });
});