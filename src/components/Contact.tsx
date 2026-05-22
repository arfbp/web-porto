import { motion } from "motion/react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { resumeData } from "../data";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-theme-surface border border-theme-border rounded-2xl p-10 md:p-16 text-center"
        >
          <div className="mb-4">
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-theme-text-faint font-semibold mb-6">Initiate Connection</h2>
            <h3 className="text-4xl md:text-5xl font-light text-theme-heading mb-6">Let's <span className="font-bold italic">Collaborate</span>.</h3>
          </div>
          
          <p className="text-theme-text-muted text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question, a project proposal, or just want to engineer some infrastructure solutions together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href={`mailto:${resumeData.personalInfo.email}`}
              className="w-full sm:w-auto px-8 py-4 bg-theme-inverted text-theme-inverted-text font-bold uppercase text-xs tracking-widest hover:bg-brand-500 hover:text-white transition-all text-center flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Say Hello
            </a>
            <a 
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-theme-border-hover hover:border-[#0A66C2] hover:text-[#0A66C2] text-theme-text-muted font-bold uppercase text-xs tracking-widest transition-all text-center flex items-center justify-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-theme-text-faint">
            <span className="flex items-center gap-2 text-xs font-mono">
              <MapPin className="w-4 h-4" />
              {resumeData.personalInfo.location}
            </span>
            <span className="flex items-center gap-2 text-xs font-mono">
              <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              STATUS: ONLINE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
