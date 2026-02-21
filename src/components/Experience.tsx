"use client";

import { motion } from "framer-motion";
import { Terminal, Calendar, ChevronRight } from "lucide-react";

const experience = [
    {
        company: "JP Morgan Chase & Co",
        role: "SDE3 Frontend",
        period: "Jun 2022 - Present",
        location: "Glasgow, UK",
        tech: ["React 18", "Node.js 20", "AG Grid", "Jest"],
        highlights: [
            "Led large-scale frontend modernisation (Angular → React 18, Node.js 14 → 20) with zero prod incidents.",
            "Optimised CI/CD pipelines, reducing runtime by ~30 mins per run via parallelization and caching.",
            "Designed complex data-heavy scenario analysis features using AG Grid v30.",
            "Consolidated multiple UI repositories into a single monorepo for leaner maintenance."
        ]
    },
    {
        company: "TELUS Digital AI Data Solutions",
        role: "SDE2 Frontend",
        period: "Aug 2021 - May 2022",
        location: "Bangalore, IN",
        tech: ["React", "Storybook", "Architecture"],
        highlights: [
            "Executed a large-scale component refactoring for Modals and Tables, affecting 100+ files.",
            "Established Storybook from scratch for UI component documentation.",
            "Mentored junior developers from project planning to deployment."
        ]
    },
    {
        company: "Paytm",
        role: "Software Engineer Frontend",
        period: "Sep 2020 - Aug 2021",
        location: "Mumbai, IN",
        tech: ["ReactJS", "Vue 3", "Forms"],
        highlights: [
            "Built reusable React components adopted across multiple products.",
            "Delivered multiple high-speed pilot launches for loan flows.",
            "Owned Vue2 to Vue3 transition and created a reusable form library."
        ],
    },
    {
        company: "Quinnox Inc",
        role: "Senior Software Engineer",
        period: "Jun 2020 - Sep 2020",
        location: "Bangalore, IN",
        tech: ["JSON UI", "Testing"],
        highlights: [
            "Developed dynamic JSON-based Form UI components.",
            "Spearheaded a daily plan status application for employee productivity.",
            "Enhanced overall test coverage from 30% to 85%."
        ],
    },
    {
        company: "Bewakoof Brands Pvt Ltd",
        role: "Software Engineer Frontend",
        period: "Apr 2019 - May 2020",
        location: "Mumbai, IN",
        tech: ["A/B Testing", "AMP", "Performance"],
        highlights: [
            "Shipped referral and loyalty capabilities and optimized checkout UX.",
            "Improved security and frontend architecture for campaign and payment surfaces."
        ],
    },
    {
        company: "Infosys Ltd",
        role: "Software Engineer",
        period: "Dec 2017 - Mar 2019",
        location: "Mysore / Bangalore / Pune, IN",
        tech: ["DraftJS", "ReactJS", "WPF"],
        highlights: [
            "Implemented a rich text editor using DraftJS in a ReactJS project.",
            "Automated various reporting and data analysis tasks.",
            "Developed a WPF Application for Knowledge Management."
        ],
    },
    {
        company: "Centillion: Amexs",
        role: "Software Developer",
        period: "May 2017 - Dec 2017",
        location: "Navi Mumbai, IN",
        tech: ["Angular 2", "Ionic"],
        highlights: [
            "Developed a Hybrid Mobile App for local job listings.",
            "Managed the migration of a web application to Angular 2.",
            "Implemented SMS OTP Functionality and utilized Google Location API."
        ],
    },
];

export function Experience() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bento-card w-full h-full p-6 lg:p-8 flex flex-col"
        >
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20">
                        <Terminal className="h-4 w-4 text-sky-400" />
                    </div>
                    <h2 className="font-[family-name:var(--font-fira-code)] text-sm uppercase tracking-widest text-zinc-300">
                        Career Trajectory
                    </h2>
                </div>
                <div className="flex gap-2 lg:gap-3 items-center">
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-[family-name:var(--font-fira-code)] text-[10px] text-zinc-500 whitespace-nowrap">
                        GLASGOW, UK
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-[family-name:var(--font-fira-code)] text-[10px] text-zinc-500 whitespace-nowrap">
                        8.5+ YEARS EXP
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-[family-name:var(--font-fira-code)] text-[10px] text-zinc-500 whitespace-nowrap">
                        {experience.length} ROLES
                    </div>
                </div>
            </div>

            {/* Horizontal scrolling list for the bento box */}
            <div className="flex-1 flex gap-4 lg:gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
                {experience.map((entry, i) => (
                    <div
                        key={entry.company}
                        className="snap-start shrink-0 w-[300px] md:w-[350px] lg:w-[420px] rounded-2xl flex flex-col border border-white/5 bg-black/40 p-6 hover:bg-white/[0.03] hover:border-white/10 transition-all group relative overflow-hidden"
                    >
                        {/* Background subtle gradient */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:bg-sky-500/10 transition-colors" />

                        <div className="flex justify-between items-start mb-6 relative">
                            <span className="font-[family-name:var(--font-fira-code)] text-[10px] text-sky-400/80 bg-sky-500/10 px-2.5 py-1 rounded">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="flex items-center gap-1.5 font-[family-name:var(--font-fira-code)] text-[10px] text-zinc-500">
                                <Calendar className="h-3 w-3" />
                                {entry.period}
                            </span>
                        </div>

                        <div className="relative">
                            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium text-zinc-100 group-hover:text-white transition-colors mb-2">
                                {entry.company}
                            </h3>
                            <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-400 mb-6 flex items-center gap-2">
                                {entry.role}
                            </p>
                        </div>

                        {/* Scrollable Description Container */}
                        <div className="flex-1 overflow-y-auto no-scrollbar mb-6 relative pr-2">
                            <ul className="space-y-3">
                                {entry.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                                        <ChevronRight className="h-4 w-4 shrink-0 text-zinc-600 mt-0.5" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-5 border-t border-white/5 relative">
                            <div className="flex flex-wrap gap-2">
                                {entry.tech.map(t => (
                                    <span key={t} className="font-[family-name:var(--font-fira-code)] text-[10px] uppercase font-medium px-2 py-1 rounded bg-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-zinc-300 transition-colors">
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
