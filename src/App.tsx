import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Github, Linkedin, Instagram, Facebook, Mail, MessageCircle, AtSign, 
  Code, Cpu, Terminal, BookOpen, Download, Trophy 
} from 'lucide-react';

function LandingPage() {
  return (
    <div className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      
      {/* Stats Section */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { label: "Projects Worked on", value: "15+" },
              { label: "Awards and Certificates Earned", value: "15+" },
              { label: "UI/UX Designs Created", value: "20+" },
              { label: "Innovation Milestones Achieved", value: "10+" },
              { label: "Hands on AI", value: "10+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-2 p-6 glass-card hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Button */}
          <div className="flex justify-center pt-8">
            <Link to="/achievements">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 glass-card overflow-hidden transition-all flex items-center gap-4 border-primary/30 hover:border-primary/60"
              >
                <Trophy className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">View my Achievements (Certifications Wall)</span>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <main className="relative min-h-screen bg-background selection:bg-primary selection:text-background overflow-hidden">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/achievements" element={<Certifications />} />
        </Routes>

        {/* New Footer Design */}
        <footer className="relative pt-32 pb-0 px-6 md:px-24 overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
              {/* Connect Section */}
              <div className="space-y-10">
                <h3 className="text-primary font-mono text-xs uppercase tracking-[0.3em]">Connect with me</h3>
                <div className="flex flex-wrap gap-8">
                  {[
                    { icon: MessageCircle, name: 'Whatsapp', url: 'https://wa.me/919557890339' },
                    { icon: Mail, name: 'Gmail', url: 'mailto:kirath259@gmail.com' },
                    { icon: Linkedin, name: 'Linkedin', url: 'https://www.linkedin.com/in/kirath-sharma/' },
                    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/kirath_kumar_sharma/' },
                    { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/kirath-sharma/' },
                    { icon: AtSign, name: 'Threads', url: 'https://www.threads.com/kirath_kumar_sharma/' }
                  ].map((social) => (
                    <div key={social.name} className="flex flex-col items-center gap-2">
                      <motion.a 
                        href={social.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-500 group relative"
                        title={social.name}
                      >
                        <social.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                        <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                      <span className="text-primary font-mono text-xs font-bold text-center">{social.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hustles Section */}
              <div className="space-y-10">
                <h3 className="text-primary font-mono text-xs uppercase tracking-[0.3em]">Visit my Hustles</h3>
                <div className="flex flex-wrap gap-8">
                  {[
                    { icon: Code, name: 'Leetcode', url: 'https://leetcode.com/u/Kirath__Kumar__Sharma/' },
                    { icon: Cpu, name: 'InterviewBits', url: 'https://www.interviewbit.com/profile/kirath-sharma/' },
                    { icon: Terminal, name: 'HackerRank', url: 'https://www.hackerrank.com/profile/kirath259' },
                    { icon: BookOpen, name: 'GFG', url: 'https://www.geeksforgeeks.org/profile/kirattd2p' },
                    { icon: Github, name: 'GITHUB', url: 'https://www.github.com/KIRATH25' }
                  ].map((hustle) => (
                    <div key={hustle.name} className="flex flex-col items-center gap-2">
                      <motion.a 
                        href={hustle.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-500 group relative"
                        title={hustle.name}
                      >
                        <hustle.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                        <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                      <span className="text-primary font-mono text-xs font-bold text-center">{hustle.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CV Section */}
              <div className="flex flex-col justify-center items-start lg:items-end">
                <motion.button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Kirath.pdf';
                    link.download = 'Kirath.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-6 glass-card overflow-hidden transition-all flex items-center gap-4 border-primary/20 hover:border-primary/50"
                >
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Download My CV</span>
                  <Download className="w-6 h-6 text-primary group-hover:translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </div>
            </div>

            {/* FEELFINITY Text Overlay - Image Inspired */}
            <div className="relative select-none pointer-events-none mt-20">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5" />
              <h2 className="text-[15vw] font-serif bold font-black leading-[0.8] text-white/[0.08] tracking-[-0.05em] whitespace-nowrap -mb-[2vw] -ml-[3vw]">
                FEELFINITY
              </h2>
              
              {/* Integrated Bottom Bar */}
              <div className="absolute bottom-12 left-0 w-full px-4 flex justify-between items-center z-20">
                <div className="text-muted/60 text-[10px] font-mono uppercase tracking-[0.4em]">
                  &copy; {new Date().getFullYear()} Kirath Kumar Sharma
                </div>
                <div className="text-muted/60 text-[10px] font-mono uppercase tracking-[0.4em]">
                  Designed for the future
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Noise Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </main>
    </AnimatePresence>
  );
}
