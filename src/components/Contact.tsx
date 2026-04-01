import { motion } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-primary font-mono text-sm uppercase tracking-widest">Get in touch</span>
              <h2 className="text-6xl font-bold tracking-tight">Let's build <br /> <span className="text-gradient">something great.</span></h2>
            </div>
            
            <p className="text-text-secondary text-lg max-w-md">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">kirath259@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">Book a discovery call</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-background/50 border border-border/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-background/50 border border-border/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-background/50 border border-border/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <button className="w-full py-4 bg-primary text-background font-bold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
