import { motion } from "motion/react";
import { resumeData } from "../data";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          <div className="w-full flex justify-start items-center mb-4 px-4">
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-bold text-theme-heading mb-1">7+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-theme-text-faint">Years Experience</div>
            </div>
          </div>
          
          <div className="bg-theme-surface border border-theme-border p-10 rounded-2xl">
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-theme-text-faint font-semibold mb-6">About Me</h2>
            <p className="text-theme-text-muted text-base leading-relaxed max-w-3xl font-mono">
              {resumeData.personalInfo.about}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
