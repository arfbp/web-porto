import { motion } from "motion/react";
import { FolderGit2, ExternalLink, ArrowRight } from "lucide-react";
import { resumeData } from "../data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-theme-text-faint font-semibold mb-2">Featured Projects</h2>
            <p className="text-theme-text-muted text-sm">Architectural implementations and technical solutions.</p>
          </div>
          <div className="hidden sm:block">
            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-500 hover:text-theme-text-heading text-xs font-bold uppercase tracking-widest transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {resumeData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx + 1) * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="h-full bg-theme-surface border border-theme-border rounded-2xl p-6 flex flex-col group hover:border-brand-500 hover:shadow-[0_8px_30px_rgba(0,112,243,0.12)] transition-colors overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-[10px] uppercase tracking-widest text-theme-text-faint">{project.year}</h4>
                  {(project as any).link && (
                    <a href={(project as any).link} target="_blank" rel="noreferrer" className="text-theme-text font-mono text-xs hover:text-brand-500 transition-colors"><ExternalLink className="w-4 h-4" /></a>
                  )}
                </div>
                
                <h3 className="text-xl text-theme-heading mb-2 group-hover:text-brand-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-theme-text-muted leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-mono text-theme-text-faint border-t border-theme-border pt-4">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-1 bg-theme-surface-hover border border-theme-border rounded text-theme-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
