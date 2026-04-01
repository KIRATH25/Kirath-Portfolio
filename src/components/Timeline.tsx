import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timeline } from '../data/portfolio';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="experience" className="py-24 px-6 md:px-24 bg-card/10 relative">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <div className="space-y-2 mb-24 text-center">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Journey</span>
          <h2 className="text-5xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/20" />
          <div 
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-highlight origin-top" 
          />

          <div className="space-y-32">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-[45%] space-y-4"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                    <span className="text-primary font-mono font-bold text-xl">{item.year} — {item.title}</span>
                    <h3 className="text-2xl font-bold mt-1">{item.company}</h3>
                  </div>
                  
                  <p className={`text-text-secondary leading-relaxed ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {item.description}
                  </p>
                </motion.div>

                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10 shadow-[0_0_10px_rgba(216,191,118,0.5)]" />

                {/* Spacer */}
                <div className="w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
