import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { certifications } from '../data/portfolio';
import { ArrowLeft, ExternalLink, Award, X, Eye, Calendar, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-highlight/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-xs uppercase tracking-widest">Back to Portfolio</span>
        </Link>

        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-xs uppercase tracking-[0.3em]">Recognition</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Certifications <span className="text-primary italic">Wall</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl text-lg leading-relaxed"
          >
            A curated collection of professional milestones, technical validations, and continuous learning achievements from industry leaders.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer"
            >
              <div className="glass-card overflow-hidden h-full flex flex-col hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-bold text-sm scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Eye className="w-4 h-4" />
                      Preview Certificate
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Verified Achievement</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{cert.company}</span>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{cert.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl glass-card rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-background/50 hover:bg-white/10 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6 text-muted" />
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Certificate Image */}
                <div className="lg:w-2/3 aspect-[4/3] lg:aspect-auto">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title}
                    className="w-full h-full object-contain bg-white/5"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Certificate Details */}
                <div className="lg:w-1/3 p-8 md:p-12 space-y-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Award className="w-5 h-5" />
                      <span className="text-xs font-mono uppercase tracking-[0.3em]">Official Certification</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight leading-tight">{selectedCert.title}</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-muted" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-muted uppercase tracking-widest">Issued By</p>
                        <p className="font-bold text-text-primary">{selectedCert.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-muted" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-muted uppercase tracking-widest">Issue Date</p>
                        <p className="font-bold text-text-primary">{selectedCert.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
