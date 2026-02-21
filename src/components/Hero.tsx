"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, FileText, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bento-card w-full h-full flex flex-col justify-center p-8 lg:p-12"
        >
            <div className="flex-1 flex flex-col md:flex-row gap-8 lg:gap-12 items-start md:items-center">
                <div className="flex-1 flex flex-col justify-center">
                    <p className="w-max mb-6 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-[family-name:var(--font-fira-code)] text-xs text-sky-400">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                        Senior UI Engineer
                    </p>

                    <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] text-zinc-100 tracking-tight">
                        Engineering modern web <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">experiences at scale</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400/90 sm:text-lg">
                        I'm a Senior Frontend Engineer specializing in building complex, data-heavy applications.
                        From architectural modernizations to optimizing CI/CD pipelines, I focus on end-to-end ownership and high-performance delivery.
                    </p>
                </div>

                <div className="shrink-0 relative w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_-15px_rgba(14,165,233,0.3)] mt-4 md:mt-0 transition-transform duration-500 hover:scale-105">
                    <img
                        src="/profile.png"
                        alt="Praveen Saraogi"
                        className="w-full h-full object-cover block"
                    />
                </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                    href="mailto:saraogipraveenuk@gmail.com"
                    className="group flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 font-[family-name:var(--font-fira-code)] text-sm font-medium text-zinc-900 transition-all hover:bg-white hover:scale-105 active:scale-95"
                >
                    Email Me
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                    href="https://www.linkedin.com/in/praveensaraogi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/50 px-5 py-2.5 font-[family-name:var(--font-fira-code)] text-sm font-medium text-zinc-200 transition-all hover:border-zinc-500 hover:bg-zinc-700 hover:scale-105 active:scale-95"
                >
                    <Briefcase className="h-4 w-4" />
                    LinkedIn
                </a>
                <a
                    href="/praveen-saraogi-cv.pdf"
                    download="PraveenSaraogi_CV.pdf"
                    className="relative group flex items-center gap-2 rounded-xl px-5 py-2.5 font-[family-name:var(--font-fira-code)] text-sm font-medium text-white transition-all hover:scale-105 active:scale-95 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                    <span className="relative z-10 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Download CV
                    </span>
                </a>
            </div>
        </motion.section>
    );
}
