import { motion } from "motion/react";
import { CheckCircle, ExternalLink } from "lucide-react";
import { resumeData } from "../data";

export function Certifications() {
  const credlyLink = "https://www.credly.com/users/arif-budi-prasetio/badges#credly";

  return (
    <section id="certifications" className="py-24 px-6 relative z-10 w-full overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="sticky top-24"
            >
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-theme-text-faint font-semibold mb-6">Certifications</h2>
              <p className="text-theme-text-muted text-sm leading-relaxed mb-6">
                Continuous learning is critical in cloud engineering. These certifications validate my expertise across major cloud providers and architectures.
              </p>
              <a 
                href={credlyLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0070f3] hover:text-[#0056b3] dark:hover:text-white transition-colors"
                aria-label="View verified credential list on Credly"
              >
                View Credential List <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-theme-surface border border-theme-border p-8 md:p-10 rounded-2xl"
            >
              <div className="flex flex-col gap-10">
                {resumeData.certifications.map((cert, idx) => (
                  <div key={idx} className={idx !== resumeData.certifications.length - 1 ? "pb-8 border-b border-theme-border/50" : ""}>
                    <h3 className="text-xl font-bold font-sans text-theme-heading mb-4">
                      {cert.issuer}
                    </h3>
                    
                    <div className="space-y-1">
                      {cert.badges.map((badge, bIdx) => {
                        return (
                          <div 
                            key={bIdx} 
                            className="flex justify-between items-center border-b border-theme-border/20 last:border-b-0 py-3 group/item hover:bg-theme-surface-hover px-4 -mx-4 rounded-lg transition-colors"
                          >
                            <span className="text-sm text-theme-text-muted group-hover/item:text-theme-heading transition-colors">
                              {badge.name}
                            </span>
                            <CheckCircle className="w-4 h-4 text-accent-green shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
