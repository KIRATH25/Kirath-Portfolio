import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-24 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={true}
            glareMaxOpacity={0.1}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-primary font-mono text-sm uppercase tracking-wider">Who I Am</h3>
                  <p className="text-text-secondary leading-relaxed">
                    I am a passionate Full Stack Engineer with a deep interest in AI and 3D web experiences. 
                    I believe technology should not just be functional, but immersive and unforgettable.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-primary font-mono text-sm uppercase tracking-wider">What I Build</h3>
                  <p className="text-text-secondary leading-relaxed">
                    From scalable enterprise architectures to interactive 3D interfaces, 
                    I bridge the gap between complex backend logic and premium frontend design.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-border/10">
                <h3 className="text-primary font-mono text-sm uppercase tracking-wider mb-4">What Drives Me</h3>
                <p className="text-text-secondary italic text-lg">
                  "The pursuit of perfection in every pixel and every line of code."
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
