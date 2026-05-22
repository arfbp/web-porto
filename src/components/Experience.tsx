import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { resumeData } from "../data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 w-full">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-theme-text-faint font-semibold mb-2">Experience Timeline</h2>
        </div>

        <div className="relative border-l border-theme-border ml-3 md:ml-0 pl-6 md:pl-8">
          {resumeData.workExperience.map((exp, index) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-8 md:mb-12 flex flex-col group"
              >
                {/* Timeline node */}
                <div className="absolute left-[-29px] md:left-[-37px] top-6 md:top-1.5 w-2.5 h-2.5 rounded-full bg-theme-base border border-theme-text-faint group-hover:border-brand-500 group-hover:bg-brand-500 z-10 transition-colors shadow-[0_0_8px_rgba(0,112,243,0)] group-hover:shadow-[0_0_8px_rgba(0,112,243,0.5)]" />

                <div className="bg-theme-surface border border-theme-border p-5 md:p-6 rounded-2xl group-hover:border-theme-border-hover transition-colors relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                    <div className="order-2 sm:order-1">
                      <h3 className="text-lg md:text-xl font-bold font-sans text-theme-heading mb-1 md:mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-xs md:text-sm text-theme-text-muted flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-theme-text">{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-theme-border-hover shrink-0" />
                        {exp.location}
                      </h4>
                    </div>
                    <div className="order-1 sm:order-2 flex items-center self-start gap-2 text-[10px] md:text-xs text-theme-text-faint font-mono border border-theme-border px-2.5 py-1 rounded bg-theme-base">
                      <Calendar className="w-3 h-3" />
                      {exp.date}
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-theme-text-muted leading-relaxed mt-2 md:mt-4">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
