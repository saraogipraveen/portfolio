"use client";

import { motion } from "framer-motion";
import { Youtube, Users, Sparkles } from "lucide-react";

const additionalDetails = [
    {
        icon: <Youtube className="h-4 w-4 text-red-400" />,
        title: "Content Creator",
        desc: "500K+ views helping professionals navigate UK visas.",
    },
    {
        icon: <Users className="h-4 w-4 text-emerald-400" />,
        title: "Community Builder",
        desc: "Run a weekly badminton club across Glasgow.",
    },
    {
        icon: <Sparkles className="h-4 w-4 text-indigo-400" />,
        title: "AI Advocate & Mentor",
        desc: "Top 10 AI tool user at JPMC Glasgow; former C/C++ tutor.",
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
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    <h2 className="font-[family-name:var(--font-fira-code)] text-xs uppercase tracking-widest text-zinc-400">
                        About Me
                    </h2>
                </div>

                <div className="text-zinc-400 text-sm leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                    <p className="mb-3">
                        Versatile frontend engineer with deep expertise in transforming legacy monoliths into ultra-fast, modern architectures using <span className="text-zinc-200 font-medium">TypeScript, React, and NextJS</span>.
                    </p>
                    <p>
                        I excel at building complex, data-heavy enterprise applications, particularly within FinTech, Trading, and E-commerce domains.
                    </p>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-[1px] flex-1 bg-white/10" />
                    <h2 className="font-[family-name:var(--font-fira-code)] text-[10px] uppercase tracking-widest text-zinc-500">
                        Beyond the Code
                    </h2>
                    <div className="h-[1px] flex-1 bg-white/10" />
                </div>

                <div className="space-y-3">
                    {additionalDetails.map((item) => (
                        <div key={item.title} className="group flex items-start gap-4 rounded-xl px-4 py-3 bg-white/[0.01] hover:bg-white/[0.04] transition-colors border border-transparent hover:border-white/10">
                            <div className="shrink-0 p-2 rounded-lg bg-black box-border border border-white/10 shadow-inner mt-0.5">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-zinc-300 group-hover:text-white transition-colors mb-0.5">
                                    {item.title}
                                </h3>
                                <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
