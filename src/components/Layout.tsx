import React, { useState, useEffect } from "react";
import { ArrowUp, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { GlobalBackground } from "./GlobalBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#0070f3] z-[60]"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <GlobalBackground theme={theme} />
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass-panel border-x-0 border-t-0 flex items-center justify-between rounded-none shadow-none bg-theme-base/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center font-display font-bold text-theme-heading text-xl">
            AP.
          </div>
          <span className="font-mono font-semibold text-theme-text-muted tracking-widest uppercase text-[10px] hidden sm:inline-block">
            Arif Budi Prasetio
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-6 lg:gap-8 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-semibold text-theme-text-faint">
          <a href="#about" className="hover:text-theme-heading transition-colors">About</a>
          <a href="#experience" className="hover:text-theme-heading transition-colors">Experience</a>
          <a href="#projects" className="hover:text-theme-heading transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-theme-heading transition-colors">Certifications</a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-theme-border text-theme-text-muted hover:text-theme-heading hover:border-theme-border-hover transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a href="#contact" className="px-4 py-2 sm:px-5 sm:py-2.5 bg-theme-inverted text-theme-inverted-text font-bold uppercase text-[9px] sm:text-[10px] tracking-widest hover:bg-[#0070f3] hover:text-white transition-all text-center whitespace-nowrap">
            Contact Me
          </a>
        </div>
      </nav>

      <main className="flex-1 flex flex-col w-full pt-20">{children}</main>

      <footer className="py-12 mt-20 border-t border-theme-border flex flex-col items-center justify-center gap-4 text-center relative z-10 glass-panel border-x-0 border-b-0">
        <div className="text-[10px] uppercase tracking-widest text-theme-text-faint">
          © {new Date().getFullYear()} Arif Budi Prasetio. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-theme-text-faint">
          <span className="text-[10px] font-mono">/usr/bin/portfolio</span>
          <span className="text-[10px] font-mono">rev_v4.2.1</span>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale:  0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-theme-inverted text-theme-inverted-text hover:bg-[#0070f3] hover:text-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,112,243,0.3)] transition-all group cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
