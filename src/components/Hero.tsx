import { motion } from "motion/react";
import { ChevronDown, MapPin, Mail, Terminal, Cloud, Download } from "lucide-react";
import { resumeData } from "../data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6">
      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-start md:flex-row md:items-center gap-12 text-left">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-3 h-3 rounded-full bg-accent-green animate-pulse shadow-[0_0_8px_var(--color-accent-green)]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent-green font-mono">System Online / Available</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-theme-heading leading-[0.9] mb-4"
          >
            ARIF<br/>BUDI<br/>PRASETIO
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-theme-text-muted font-mono text-sm tracking-wide mb-10"
          >
            {resumeData.personalInfo.title}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-theme-border flex items-center justify-center hover:border-brand-500 hover:text-theme-heading text-theme-text-muted font-bold uppercase text-xs tracking-widest transition-all text-center"
            >
              Explore Projects
            </a>
            <a 
              href="https://drive.mocina.my.id/api/fs/public/L2xvY2FsL0FyaWYgQnVkaSBQcmFzZXRpby1yZXN1bWUucGRmOjA6NE50YVlwMVV1R2NzRFZTc0pGd0dfQzhWaEx2TlNYbFJnUnEzM2JSZEVjND0=" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-theme-inverted border border-theme-inverted flex items-center justify-center gap-2 hover:bg-[#0070f3] hover:border-[#0070f3] hover:text-white text-theme-inverted-text font-bold uppercase text-xs tracking-widest transition-all text-center"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </motion.div>
        </div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.7, delay: 0.2 }}
           className="relative flex-1 bg-theme-surface border border-theme-border rounded-2xl p-8 lg:p-12 flex flex-col justify-end overflow-hidden min-h-[400px] w-full"
        >
          <div className="absolute top-0 right-0 p-8">
            <svg width="240" height="240" viewBox="0 0 100 100" className="opacity-10 stroke-theme-heading">
              <circle cx="50" cy="50" r="45" fill="none" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="35" fill="none" strokeWidth="0.5" strokeDasharray="2 2" />
              <path d="M50 5 L50 95 M5 50 L95 50" strokeWidth="0.2" />
            </svg>
          </div>
          <div className="z-10 mt-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-theme-heading mb-4 leading-tight italic">
              Designing resilient <span className="font-bold not-italic">Cloud Architectures</span> that scale with human ambition.
            </h2>
            <p className="text-theme-text-muted max-w-lg text-sm leading-relaxed">
              Specializing in infrastructure management and managed services. I build and maintain environments that don't just work—they perform reliably.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-theme-text-faint hover:text-theme-heading transition-colors animate-bounce"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
}
