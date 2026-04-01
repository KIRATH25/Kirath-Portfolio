import { motion } from 'motion/react';
import { skills } from '../data/portfolio';
import { Monitor, Server, Cpu, Cloud, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Cpu,
  Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 border border-primary/40 rounded-full mb-6">
            <span className="text-primary font-mono text-sm uppercase tracking-widest">Services & expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            I bring to every project
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon || 'Monitor'];
            const number = (index + 1).toString().padStart(2, '0');
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 relative group flex flex-col h-full overflow-hidden"
              >
                {/* Large Background Number */}
                <div className="absolute top-4 right-6 text-8xl font-bold text-primary/5 select-none transition-colors group-hover:text-primary/10">
                  {number}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.items.map((item) => (
                      <span 
                        key={item} 
                        className="px-4 py-1.5 rounded-full border border-border/20 text-xs font-mono text-muted hover:border-primary/40 hover:text-primary transition-all cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
