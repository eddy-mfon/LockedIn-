/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, FocusMonolithScene } from './components/QuantumScene';
import { FocusGridDiagram, AIWorkflowDiagram, ProductivityChart } from './components/Diagrams';
import { ArrowDown, Menu, X, Lock, CheckCircle, Smartphone, Zap, Terminal } from 'lucide-react';

const TestimonialCard = ({ name, role, quote, delay }: { name: string, role: string, quote: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up p-8 bg-tech-zinc/40 backdrop-blur-sm rounded-none border border-zinc-800 hover:border-white transition-all duration-300 w-full max-w-sm" style={{ animationDelay: delay }}>
      <div className="mb-4 text-white font-mono text-xs tracking-widest">[ RATING: 5.0 ]</div>
      <p className="text-zinc-300 font-sans text-sm leading-relaxed mb-6 font-light">"{quote}"</p>
      <div className="mt-auto border-t border-zinc-800 pt-4">
        <h3 className="font-mono text-white text-sm uppercase tracking-wide">{name}</h3>
        <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mt-1">{role}</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-tech-black text-white selection:bg-white selection:text-black font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-tech-black/90 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <Lock size={16} strokeWidth={3} />
            </div>
            <span className={`font-mono font-bold text-lg tracking-widest transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              LOCKED<span className="text-zinc-500">IN</span>_
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-mono font-medium tracking-widest text-zinc-400">
            <a href="#features" onClick={scrollToSection('features')} className="hover:text-white transition-colors cursor-pointer uppercase">:: Features</a>
            <a href="#how-it-works" onClick={scrollToSection('how-it-works')} className="hover:text-white transition-colors cursor-pointer uppercase">:: System</a>
            <a href="#results" onClick={scrollToSection('results')} className="hover:text-white transition-colors cursor-pointer uppercase">:: Metrics</a>
            <a href="#testimonials" onClick={scrollToSection('testimonials')} className="hover:text-white transition-colors cursor-pointer uppercase">:: Logs</a>
            <a 
              href="#" 
              className="px-5 py-2 bg-white text-black text-xs font-bold rounded-none hover:bg-zinc-200 transition-colors cursor-pointer border border-transparent hover:border-zinc-400"
            >
              INITIALIZE_ACCESS
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-tech-black flex flex-col items-center justify-center gap-8 text-xl font-mono animate-fade-in border border-zinc-800 m-4">
            <a href="#features" onClick={scrollToSection('features')} className="hover:text-white transition-colors cursor-pointer uppercase">[Features]</a>
            <a href="#how-it-works" onClick={scrollToSection('how-it-works')} className="hover:text-white transition-colors cursor-pointer uppercase">[System]</a>
            <a href="#results" onClick={scrollToSection('results')} className="hover:text-white transition-colors cursor-pointer uppercase">[Metrics]</a>
            <a 
              href="#" 
              onClick={() => setMenuOpen(false)} 
              className="px-6 py-3 bg-white text-black font-bold uppercase"
            >
              Initialize Access
            </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <HeroScene />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-[10px] tracking-[0.2em] uppercase font-mono backdrop-blur-sm">
            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
            System Operational v2.4
          </div>
          <h1 className="font-mono text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8 text-white tracking-tighter">
            LOCKED<span className="text-zinc-600">IN</span>
            <br/>
            <span className="font-sans font-thin text-zinc-400 text-2xl md:text-4xl block mt-6 tracking-normal">
              Execute Deep Work Protocol
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-zinc-500 font-light leading-relaxed mb-12 font-mono">
            > Eliminating distractions...<br/>
            > Optimizing workflow...<br/>
            > Neural state: <span className="text-white">FLOW</span>
          </p>
          
          <div className="flex justify-center">
             <a href="#features" onClick={scrollToSection('features')} className="group flex flex-col items-center gap-4 text-xs font-mono text-zinc-500 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">
                <span>Scroll to Initialize</span>
                <span className="p-2 border border-zinc-800 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowDown size={14} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction / Problem */}
        <section id="features" className="py-24 bg-tech-black border-b border-zinc-900 relative">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <div className="inline-block mb-3 text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase border-b border-zinc-800 pb-1">01 // The Glitch</div>
              <h2 className="font-mono text-3xl mb-6 leading-tight text-white uppercase tracking-tighter">
                Signal<br/>Interruption
              </h2>
            </div>
            <div className="md:col-span-8 text-lg text-zinc-400 leading-relaxed space-y-8 font-light">
              <p>
                <span className="text-white font-mono text-xl mr-2">> ERROR:</span>
                Modern cognitive throughput is throttled. Constant interrupts fragment the execution thread, causing context-switching latency that degrades output quality.
              </p>
              <p>
                The average operator is interrupted every 660 seconds. <strong className="text-white font-mono">LOCKED_IN</strong> is an algorithmic defense layer for your attention. We employ adaptive heuristics to filter noise and preserve processing power.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 border border-zinc-800 bg-zinc-900/30">
                      <div className="text-2xl font-mono text-white mb-1">11m</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">Avg. Focus Span</div>
                  </div>
                  <div className="p-4 border border-zinc-800 bg-zinc-900/30">
                      <div className="text-2xl font-mono text-white mb-1">23m</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">Recovery Time</div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 1: Focus Shield */}
        <section id="how-it-works" className="py-24 bg-zinc-950 border-b border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-white text-[10px] font-mono font-bold tracking-widest uppercase mb-6 border border-zinc-800">
                            <Terminal size={12}/> 02 // Core Architecture
                        </div>
                        <h2 className="font-mono text-3xl md:text-4xl mb-6 text-white uppercase tracking-tighter">The Focus Grid</h2>
                        <p className="text-base text-zinc-400 mb-6 leading-relaxed font-light">
                           Visualizing temporal data as a protected matrix. Activating a "Deep Block" deploys a system-wide interrupt handler.
                        </p>
                        <ul className="space-y-4 mb-8 font-mono text-sm text-zinc-500">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-white"></span>
                                Notification Suppression
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-white"></span>
                                Asynchronous Batching
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-white"></span>
                                Cognitive Load Balancing
                            </li>
                        </ul>
                    </div>
                    <div>
                        <FocusGridDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* Feature 2: AI Workflow */}
        <section className="py-24 bg-tech-black text-white overflow-hidden relative border-b border-zinc-900">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="order-2 lg:order-1">
                        <AIWorkflowDiagram />
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-zinc-300 text-[10px] font-mono font-bold tracking-widest uppercase mb-6 border border-zinc-800">
                            03 // Intelligence Layer
                        </div>
                        <h2 className="font-mono text-3xl md:text-4xl mb-6 text-white uppercase tracking-tighter">Workflow Protocol</h2>
                        <p className="text-base text-zinc-400 mb-6 leading-relaxed font-light">
                            <span className="font-mono text-white">LOCKED_IN</span> interfaces with external APIs (Calendar, Slack, Email) to parse incoming requests.
                        </p>
                        <p className="text-base text-zinc-400 leading-relaxed font-light">
                            The Algorithm engine classifies inputs by urgency and context, scheduling deep work blocks and auto-generating responses for low-priority interruptions.
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* Results */}
        <section id="results" className="py-24 bg-zinc-950 border-b border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                     <div className="inline-block mb-3 text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">04 // Performance Data</div>
                    <h2 className="font-mono text-3xl md:text-4xl mb-6 text-white uppercase tracking-tighter">System Output</h2>
                    <p className="text-zinc-400 font-light">
                        Beta telemetry indicates significant gains in cognitive throughput.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <ProductivityChart />
                </div>
            </div>
        </section>

        {/* Visual / Impact */}
        <section className="py-24 bg-tech-black border-b border-zinc-900">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 relative">
                    <div className="aspect-square bg-zinc-900 rounded-none overflow-hidden relative border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)_inset]">
                        <FocusMonolithScene />
                        <div className="absolute bottom-4 left-4 font-mono text-[10px] text-zinc-500">FIG 2.0: OBSIDIAN_STATE</div>
                    </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-block mb-3 text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">05 // Philosophy</div>
                    <h2 className="font-mono text-3xl mb-6 text-white uppercase tracking-tighter">Reclaim Processing Power</h2>
                    <p className="text-lg text-zinc-400 mb-6 leading-relaxed font-light">
                        Technology should optimize the mind, not fragment it. We provide the infrastructure for sustainable high-performance computing of the human brain.
                    </p>
                    
                    <div className="p-6 bg-zinc-900/50 border border-zinc-800 border-l-2 border-l-white">
                        <p className="font-mono text-sm text-zinc-300 mb-4 leading-relaxed">
                            "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy."
                        </p>
                        <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">:: Cal Newport, Deep Work</span>
                    </div>
                </div>
             </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-tech-black relative">
             <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>
           <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">06 // User Logs</div>
                    <h2 className="font-mono text-3xl md:text-4xl mb-4 text-white uppercase tracking-tighter">Verified Users</h2>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center flex-wrap">
                    <TestimonialCard 
                        name="S. Jenkins" 
                        role="CTO :: NEXUS AI" 
                        quote="Recouped approx 15h/week. Latency reduced. Output quality maximized."
                        delay="0s" 
                    />
                    <TestimonialCard 
                        name="D. Chen" 
                        role="SYS_ARCHITECT" 
                        quote="The visualization of temporal blocks changed my operating logic. Essential tooling."
                        delay="0.1s" 
                    />
                    <TestimonialCard 
                        name="E. Rodriguez" 
                        role="AUTHOR :: VOL 4" 
                        quote="Finally, software that respects the difference between 'busy' and 'processing'."
                        delay="0.2s" 
                    />
                </div>
                <div className="text-center mt-20">
                     <button className="px-10 py-4 bg-white text-black font-mono text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Initialize Free Trial
                     </button>
                     <p className="mt-6 text-[10px] text-zinc-600 font-mono">NO CREDIT CARD REQUIRED FOR 14-DAY EVALUATION.</p>
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-zinc-950 text-zinc-500 py-16 border-t border-zinc-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <Lock size={16} className="text-white"/>
                    <div className="text-white font-mono font-bold text-lg tracking-widest">LOCKED<span className="text-zinc-600">IN</span>_</div>
                </div>
                <p className="text-[10px] font-mono uppercase tracking-wider">Design your time. Master your focus.</p>
            </div>
            <div className="flex gap-8 text-[10px] font-mono font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Privacy_Protocol</a>
                <a href="#" className="hover:text-white transition-colors">Terms_of_Use</a>
                <a href="#" className="hover:text-white transition-colors">Network</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
        </div>
        <div className="text-center mt-12 text-[10px] text-zinc-700 font-mono">
            © 2024 LockedIn Inc. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default App;