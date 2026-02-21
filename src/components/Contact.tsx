"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink, FileText, Youtube } from "lucide-react";

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
        icon: <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.964H5.078z"></path></svg>,
        label: "X (Twitter)",
        value: "@saraogipraveen",
        href: "https://x.com/saraogipraveen",
    },
    {
        icon: <Youtube className="h-5 w-5 text-red-500/80" />,
        label: "Creator",
        value: "500K+ Views",
        href: "https://www.youtube.com/@PraveenSaraogi360",
    },
];

export function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card w-full h-full p-6 lg:p-8 flex flex-col"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                <h2 className="font-[family-name:var(--font-fira-code)] text-xs uppercase tracking-widest text-zinc-400">
                    Connect
                </h2>
            </div>

            <div className="flex-1 flex flex-col justify-between gap-3">
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
        </motion.section>
    );
}
