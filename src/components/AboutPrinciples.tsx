"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Code2 } from "lucide-react";
import Image from "next/image";

const quickFacts = [
    { label: "Experience", value: "8.5+ years" },
    { label: "Current Base", value: "Glasgow, UK" },
];

const principles = [
    {
        icon: <Zap className="h-4 w-4 text-yellow-400" />,
        title: "Fast, not rushed",
    },
    {
        icon: <Clock className="h-4 w-4 text-emerald-400" />,
        title: "Deadline-first execution",
    },
    {
        icon: <Code2 className="h-4 w-4 text-indigo-400" />,
        title: "End-to-end ownership",
    },
];

export function AboutPrinciples() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento-card w-full h-full p-6 lg:p-8 flex flex-col justify-between gap-6"
        >
            <div>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
                        <h2 className="font-[family-name:var(--font-fira-code)] text-xs uppercase tracking-widest text-zinc-400">
                            Operation Status
                        </h2>
                    </div>
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-white/10 relative shrink-0">
                        <Image
                            src="/profile.png"
                            alt="Praveen Saraogi"
                            fill
                            className="object-cover"
                            sizes="48px"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-3">
                    {quickFacts.map((fact) => (
                        <div key={fact.label} className="rounded-xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-center">
                            <p className="font-[family-name:var(--font-fira-code)] text-[10px] uppercase text-zinc-500 mb-1">
                                {fact.label}
                            </p>
                            <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-zinc-200">
                                {fact.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-[1px] flex-1 bg-white/10" />
                    <h2 className="font-[family-name:var(--font-fira-code)] text-[10px] uppercase tracking-widest text-zinc-500">
                        Protocols
                    </h2>
                    <div className="h-[1px] flex-1 bg-white/10" />
                </div>

                <div className="space-y-3">
                    {principles.map((item) => (
                        <div key={item.title} className="group flex items-center gap-4 rounded-xl px-4 py-3 bg-white/[0.01] hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/10">
                            <div className="shrink-0 p-2 rounded-lg bg-black box-border border border-white/10 shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
