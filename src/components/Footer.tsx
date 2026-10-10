"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Heart, Mail } from "lucide-react";
import Link from "next/link";

function GitHubIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.44 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19 18.5h-2.97v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.7H9.76V9h2.85v1.3h.04c.4-.75 1.37-1.53 2.82-1.53 3.02 0 3.58 1.99 3.58 4.58v5.15H19Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/OmmPrakash-07",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/omm-prakash-parida/",
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/genius_omm/",
    icon: InstagramIcon,
  },
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      id="footer"
      className="border-t border-white/[0.08] bg-[#07070b] px-5 py-7 sm:px-8 sm:py-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Compact brand, navigation and social links */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <Link
            href="#home"
            aria-label="Omm Prakash Parida — back to home"
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-400/[0.08] text-sm font-bold tracking-wide text-white transition-colors group-hover:border-violet-400/50">
              OP
            </span>

            <span className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-white transition-colors group-hover:text-violet-200 sm:text-base">
                Omm Prakash Parida
              </span>
              <span className="text-xs text-zinc-500">
                Full Stack &amp; AI Developer
              </span>
            </span>
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-5 gap-y-2"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-zinc-500 transition-colors hover:text-white sm:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {socials.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.025] text-zinc-400 transition-colors hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
              >
                <Icon />
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              aria-label="Contact"
              title="Contact"
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.025] text-zinc-400 transition-colors hover:border-violet-400/40 hover:text-white"
            >
              <Mail size={18} />
            </motion.a>
          </div>
        </div>

        {/* Minimal copyright row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-5 sm:flex-row">
          <p className="text-center text-xs text-zinc-500">
            © 2026 Omm Prakash Parida. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-zinc-500">
            Made with
            <Heart size={12} className="fill-pink-500 text-pink-500" />
            <span className="text-zinc-400">Next.js</span>
          </p>

          <Link
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}