import { motion } from "motion/react";
import { TerminalSquare, ShieldCheck, Database, Layers } from "lucide-react";
import { resumeData } from "../data";

export function Skills() {
  const categoryIcons: Record<string, React.ReactNode> = {
    "Cloud Platforms": <div className="w-8 h-8 rounded-lg bg-theme-surface-hover text-brand-500 flex items-center justify-center border border-theme-border"><Database className="w-4 h-4" /></div>,
    "Infrastructure": <div className="w-8 h-8 rounded-lg bg-theme-surface-hover text-brand-500 flex items-center justify-center border border-theme-border"><Layers className="w-4 h-4" /></div>,
    "OS & Virtualization": <div className="w-8 h-8 rounded-lg bg-theme-surface-hover text-brand-500 flex items-center justify-center border border-theme-border"><TerminalSquare className="w-4 h-4" /></div>,
    "IT Ops & Support": <div className="w-8 h-8 rounded-lg bg-theme-surface-hover text-brand-500 flex items-center justify-center border border-theme-border"><ShieldCheck className="w-4 h-4" /></div>,
  };

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-theme-text-faint font-semibold mb-2">Technical Core</h2>
          <p className="text-theme-text-muted text-sm max-w-xl">Mastering the tools needed to build, secure, and scale modern infrastructure operations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx + 1) * 0.1, duration: 0.5 }}
              className="bg-theme-surface border border-theme-border p-6 rounded-2xl flex flex-col group hover:border-brand-500 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                {categoryIcons[skillGroup.category]}
                <h3 className="text-xl font-bold font-sans text-theme-heading group-hover:text-brand-500 transition-colors">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 border border-theme-border-hover rounded-full text-xs text-theme-text-muted hover:border-brand-500 hover:text-theme-text transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
