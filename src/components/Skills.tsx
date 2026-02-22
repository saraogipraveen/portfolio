"use client";

import { motion } from "framer-motion";
import { Copy, Terminal, Server, Code, Database, LayoutTemplate, Layers } from "lucide-react";

const skills = [
    { name: "TypeScript", icon: <Code className="h-4 w-4" />, level: 95 },
    { name: "React 18", icon: <LayoutTemplate className="h-4 w-4" />, level: 95 },
    { name: "NextJS", icon: <Layers className="h-4 w-4" />, level: 90 },
    { name: "Node.js", icon: <Server className="h-4 w-4" />, level: 85 },
    { name: "AG Grid", icon: <Database className="h-4 w-4" />, level: 90 },
    { name: "CI/CD & Testing", icon: <Terminal className="h-4 w-4" />, level: 85 },
];

export function Skills() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento-card w-full h-full p-6 lg:p-8 flex flex-col justify-between"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-2 w-2 rounded-full bg-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.8)]" />
                <h2 className="font-[family-name:var(--font-fira-code)] text-xs uppercase tracking-widest text-zinc-400">
                    Tech Arsenal
                </h2>
            </div>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                    <div
                        key={skill.name}
                        className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-2.5 transition-all duration-300 hover:bg-white/[0.08] hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.2)] flex items-center gap-3 shrink-0"
                    >
                        {/* Subtle background glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-full" />

                        <div className="flex items-center gap-2 text-zinc-400 group-hover:text-indigo-300 transition-colors relative z-10">
                            {skill.icon}
                            <span className="font-[family-name:var(--font-fira-code)] text-xs font-medium">
                                {skill.name}
                            </span>
                        </div>

                        {/* Progress bar visual */}
                        <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden relative z-10 shrink-0">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                                className="h-full bg-gradient-to-r from-indigo-500 to-sky-400"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
