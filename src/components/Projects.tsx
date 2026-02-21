"use client";

import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
    {
        title: "Enterprise Monorepo Migration",
        metrics: ["100% Regression Coverage", "0 Prod Incidents"],
        desc: "Led complex migration from Angular to React 18, consolidating multiple UI repositories into a unified architecture.",
        tech: ["React 18", "Nx", "Webpack Federation"],
    },
    {
        title: "Scenario Analysis Engine",
        metrics: ["Real-time Impact", "High-Volume Data"],
        desc: "Engineered a data-heavy 'What-If' trading tool using AG Grid v30 to manage millions of rows seamlessly.",
        tech: ["AG Grid", "TypeScript", "Node.js 20"],
    },
    {
        title: "CI/CD Pipeline Optimization",
        metrics: ["-30 mins runtime", "Parallel Execution"],
        desc: "Revamped build pipelines with Develocity caching and parallelized E2E testing, massively boosting team velocity.",
        tech: ["Jest", "Cypress", "Jenkins"],
    },
];

export function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bento-card w-full h-full p-6 lg:p-8 flex flex-col"
        >
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                        <FolderGit2 className="h-4 w-4 text-orange-400" />
                    </div>
                    <h2 className="font-[family-name:var(--font-fira-code)] text-sm uppercase tracking-widest text-zinc-300">
                        Featured Architectural Wins
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 flex-1">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group relative flex flex-col rounded-2xl border border-white/5 bg-black/40 p-5 lg:p-6 transition-all hover:bg-white/[0.03] hover:border-orange-500/30 overflow-hidden"
                    >
                        {/* Hover Glow */}
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />

                        <div className="flex items-start justify-between mb-4 relative z-10">
                            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                                {project.title}
                            </h3>
                            <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                            {project.metrics.map((m) => (
                                <span key={m} className="flex items-center gap-1 font-[family-name:var(--font-fira-code)] text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                                    <CheckCircle2 className="h-3 w-3" />
                                    {m}
                                </span>
                            ))}
                        </div>

                        <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-zinc-400 leading-relaxed mb-6 flex-1 relative z-10">
                            {project.desc}
                        </p>

                        <div className="mt-auto relative z-10 pt-4 border-t border-white/5">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="font-[family-name:var(--font-fira-code)] text-[10px] uppercase px-2 py-1 rounded bg-white/5 text-zinc-400"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
