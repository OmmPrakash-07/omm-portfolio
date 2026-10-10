"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUp,
  Heart,
  Sparkles,
  Mail,
} from "lucide-react";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function GitHubIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
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
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
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

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -12, 0],
        rotate: [0, 5, 0],
      };

  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#07070b] px-5 pb-6 pt-16 sm:px-8 sm:pt-20"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-violet-600/[0.12] blur-[110px]" />
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-500/[0.10] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.07),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-white/[0.025] px-5 py-12 sm:px-10 sm:py-16 lg:px-14">
          {/* Subtle grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
          />

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-3.5 py-2 text-xs font-medium tracking-wide text-violet-200">
                <Sparkles size={14} />
                HAVE A PROJECT IN MIND?
              </div>

              <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Let&apos;s build
                <br />
                something{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                  amazing.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
                Have an idea, a project, or an opportunity? Let&apos;s connect
                and turn great ideas into something real.
              </p>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.035 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                className="mt-8 inline-flex"
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-violet-100"
                >
                  Let&apos;s talk
                  <ArrowDownRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Animated AI orb */}
            <div className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
              <motion.div
                aria-hidden="true"
                animate={floatAnimation}
                transition={{
                  duration: 5,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-36 w-36 items-center justify-center rounded-full sm:h-44 sm:w-44"
              >
                {/* Outer glow */}
                <div className="absolute -inset-8 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="absolute -inset-4 rounded-full bg-blue-500/15 blur-2xl" />

                {/* Rotating rings */}
                <motion.div
                  className="absolute -inset-5 rounded-full border border-violet-400/30"
                  animate={shouldReduceMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(167,139,250,0.9)]" />
                </motion.div>

                <motion.div
                  className="absolute -inset-2 rounded-full border border-dashed border-blue-300/25"
                  animate={shouldReduceMotion ? {} : { rotate: -360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Orb surface */}
                <div className="absolute inset-0 overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-violet-400/80 via-indigo-600/80 to-blue-500/80 shadow-[0_0_60px_rgba(124,58,237,0.3)]">
                  <motion.div
                    className="absolute -inset-1/2 bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.5),transparent_35%)]"
                    animate={shouldReduceMotion ? {} : { rotate: 360 }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-violet-500/70 via-indigo-800/60 to-blue-500/70 backdrop-blur-sm" />
                  <div className="absolute left-[18%] top-[15%] h-12 w-12 rounded-full bg-white/20 blur-xl" />
                </div>

                <Sparkles
                  size={38}
                  strokeWidth={1.2}
                  className="relative z-10 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.65)]"
                />

                {/* Small orbiting particles */}
                <motion.span
                  className="absolute right-0 top-5 h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_16px_rgba(96,165,250,0.9)]"
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { y: [0, 12, -5, 0], x: [0, -8, 5, 0] }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.span
                  className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(232,121,249,0.9)]"
                  animate={shouldReduceMotion ? {} : { y: [0, -10, 4, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer navigation and social links */}
        <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row">
          <Link
            href="#home"
            aria-label="Omm, back to home"
            className="group text-2xl font-bold tracking-tight text-white"
          >
            Omm
            <span className="gradient-text transition-all duration-300 group-hover:text-violet-300">
              .
            </span>
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-4"
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  duration: 0.35,
                }}
              >
                <Link
                  href={item.href}
                  className="relative text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -4, scale: 1.06 }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.025] text-zinc-400 transition-colors duration-300 hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
              >
                <Icon />
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              aria-label="Go to contact section"
              title="Contact"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.025] text-zinc-400 transition-colors hover:border-violet-400/40 hover:text-white"
            >
              <Mail size={19} />
            </motion.a>
          </div>
        </div>

        {/* Premium bottom branding */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-400/40 to-blue-400/40" />

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          {/* Personal brand */}
          <motion.a
            href="#home"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            className="group flex items-center gap-3"
            aria-label="Omm Prakash Parida — back to home"
          >
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-sm font-bold tracking-wider text-white shadow-[0_0_25px_rgba(139,92,246,0.12)]">
              <span className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">OP</span>
            </span>

            <span className="flex flex-col gap-1">
              <span className="text-base font-bold tracking-tight text-white transition-colors group-hover:text-violet-200 sm:text-lg">
                Omm Prakash Parida
              </span>

              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-2.5 py-1 text-[10px] font-medium tracking-wide text-violet-200 sm:text-xs">
                <motion.span
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { opacity: [1, 0.4, 1] }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
                Full Stack &amp; AI Developer
              </span>
            </span>
          </motion.a>

          {/* Copyright and tech credit */}
          <div className="flex flex-col gap-2 sm:items-end">
            <p className="text-xs text-zinc-500 sm:text-sm">
              © 2026{" "}
              <span className="font-medium text-zinc-300">
                Omm Prakash Parida
              </span>
              <span className="text-zinc-600">. All rights reserved.</span>
            </p>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-1.5 text-xs text-zinc-600"
            >
              Designed &amp; developed with
              <motion.span
                animate={
                  shouldReduceMotion
                    ? {}
                    : { scale: [1, 1.2, 1] }
                }
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex"
              >
                <Heart
                  size={12}
                  className="fill-pink-500 text-pink-500"
                />
              </motion.span>
              <span className="text-zinc-400">Next.js</span>
            </motion.p>
          </div>

          {/* Back to top */}
          <motion.a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] text-zinc-400 transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white sm:flex"
          >
            <ArrowUp
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}