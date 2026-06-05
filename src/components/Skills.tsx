import { motion } from "motion/react";
import { resumeData } from "../data";

export default function Skills() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-theme-surface border border-theme-border rounded-2xl hover:border-brand-500 transition-colors overflow-hidden"
        >
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resumeData.skills.map((skillGroup, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-theme-heading mb-5 pb-4 border-b border-theme-border">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="text-sm text-theme-text hover:text-brand-100 hover:underline decoration-brand-100 underline-offset-2 transition-colors cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
