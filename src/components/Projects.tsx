import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/portfolio';
import { ExternalLink, Github, X, BarChart3, Target, Zap, Layers, Star } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 mb-16">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-5xl font-bold tracking-tight">Selected Works</h2>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-2xl aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500" />
                
                {project.highlight && (
                  <div className="absolute top-6 left-6 px-4 py-2 bg-primary text-background font-bold rounded-full text-xs uppercase tracking-widest">
                    Featured Project
                  </div>
                )}
              </div>

              <div className="w-full lg:w-2/5 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-muted border border-border/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-text-secondary text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-primary font-bold hover:underline"
                  >
                    View Statistics <BarChart3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Statistics Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-8 md:p-12 space-y-12"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-muted" />
              </button>

              <div className="space-y-4">
                <span className="text-primary font-mono text-sm uppercase tracking-widest">Project Statistics</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{selectedProject.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Target className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-widest text-xs">Why I Chose It</h4>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{selectedProject.stats.why}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Zap className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-widest text-xs">Challenges & Solutions</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-xs font-mono text-muted uppercase mb-2">The Challenge</p>
                        <p className="text-text-secondary text-sm">{selectedProject.stats.challenges}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <p className="text-xs font-mono text-primary uppercase mb-2">The Solution</p>
                        <p className="text-text-secondary text-sm">{selectedProject.stats.solutions}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Layers className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-widest text-xs">Tech Stack</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stats.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Star className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-widest text-xs">Mentor Ratings</h4>
                    </div>
                    <div className="flex items-end gap-4">
                      <div className="text-6xl font-bold text-primary">{selectedProject.stats.mentorRating}</div>
                      <div className="pb-2">
                        <div className="text-xs font-mono text-muted uppercase tracking-widest">Overall Score</div>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < Math.floor(selectedProject.stats.mentorRating / 2) ? 'text-primary fill-primary' : 'text-muted'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
