import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Work', href: '/#work' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Achievements', href: '/achievements' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-border/10' : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter group">
            PORTFOLIO<span className="text-primary group-hover:text-highlight transition-colors"></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-mono uppercase tracking-widest text-text-secondary hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-mono uppercase tracking-widest transition-colors ${
                    pathname === link.href ? 'text-primary' : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { x: 0 } : { x: '100%' }}
        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {navLinks.map((link) => (
          link.href.startsWith('/#') ? (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ) : (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-bold tracking-tight transition-colors ${
                pathname === link.href ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          )
        ))}
      </motion.div>
    </>
  );
}
