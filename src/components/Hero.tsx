import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const categories = [
    { id: '01', title: 'Full Stack Architecture' },
    { id: '02', title: 'AI & Machine Learning' },
    { id: '03', title: '3D Web Experiences' },
    { id: '04', title: 'Cloud Infrastructure' },
  ];

  const brands = [
    { name: 'Supa Blox', icon: '●' },
    { name: 'Hype Blox', icon: '⌛' },
    { name: 'Frame Blox', icon: '◐' },
    { name: 'Ultra Blox', icon: '◑' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      {/* Main Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-highlight/5 blur-[120px] rounded-full" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <span className="text-xl md:text-2xl font-medium text-text-primary/90">Hey, I'm</span>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-white">
                KIRATH KUMAR <br />
                SHARMA
              </h1>
            </motion.div>

            {/* Right Side: Secondary Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:pt-24 lg:pl-12 space-y-6 max-w-md"
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-highlight">
                Great code should <br />
                feel invisible.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                From architecture to interface, I build digital products that connect and scale. 
                Focusing on performance, security, and immersive user experiences.
              </p>
              
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => {
                    const projectsSection = document.getElementById('work');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-8 py-3 bg-primary text-background font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                  View Work <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Kirath.pdf';
                    link.download = 'Kirath.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                  Download CV <Download className="w-4 h-4" />
                </button>
              </div>
              <br></br>
            </motion.div>
          </div>

          {/* Bottom Row: Categories */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="space-y-1"
              >
                <span className="text-primary font-mono text-sm font-bold">#{cat.id}</span>
                <p className="text-text-secondary font-medium tracking-tight">{cat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
