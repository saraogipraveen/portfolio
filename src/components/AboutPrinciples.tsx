"use client";

import { Github, Linkedin, Mail, Youtube, ExternalLink } from "lucide-react";

const links = [
    {
        icon: <Mail className="h-5 w-5" />,
        label: "Email",
        value: "saraogipraveenuk@gmail.com",
        href: "mailto:saraogipraveenuk@gmail.com",
    },
    {
        icon: <Linkedin className="h-5 w-5" />,
        label: "LinkedIn",
        value: "in/praveensaraogi",
        href: "https://www.linkedin.com/in/praveensaraogi/",
    },
    {
        icon: <Github className="h-5 w-5" />,
        label: "GitHub",
        value: "github.com/saraogipraveen",
        href: "https://github.com/saraogipraveen",
    },
    {
        icon: <Youtube className="h-5 w-5 text-red-500/80" />,
        label: "Creator",
        value: "500K+ Views",
        href: "https://www.youtube.com/@PraveenSaraogi360",
    },
];

export function AboutPrinciples() {
    return (
        <section
            className="bento-card w-full h-full p-6 lg:p-8 flex flex-col justify-between gap-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
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
                        Connect
                    </h2>
                    <div className="h-[1px] flex-1 bg-white/10" />
                </div>

                <div className="flex flex-col gap-3">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="group flex flex-1 items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all hover:bg-white/[0.05] hover:border-sky-500/30"
                        >
                            <div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                                {link.icon}
                                <div>
                                    <p className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-zinc-200">
                                        {link.label}
                                    </p>
                                    <p className="font-[family-name:var(--font-fira-code)] text-[10px] text-zinc-500 group-hover:text-sky-400/80">
                                        {link.value}
                                    </p>
                                </div>
                            </div>
                            <ExternalLink className="h-3 w-3 text-zinc-600 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-sky-400" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
