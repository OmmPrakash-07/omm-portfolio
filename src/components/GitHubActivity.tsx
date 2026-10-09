"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const username = "OmmPrakash-07";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.08 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function GitHubActivity() {
  return (
    <section
      id="github"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Open Source
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            GitHub <span className="text-violet-400">Activity</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A look at my coding journey, public repositories, and contributions.
            Always building, learning, and improving.
          </p>
        </motion.div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-[#09090f] p-4 shadow-2xl shadow-violet-950/10 sm:p-6"
        >
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contribution Graph
          </h3>

          <img
            src="https://contribkit.app/user/OmmPrakash-07.svg?palette=catppuccin&shape=rounded&background=%23101018"
            alt="GitHub contribution activity graph"
            loading="lazy"
            className="mx-auto min-w-[600px] w-full rounded-lg"
          />
        </motion.div>

        {/* GitHub statistics */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#09090f] p-4"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=09090f&title_color=a78bfa&text_color=e4e4e7&icon_color=8b5cf6`}
              alt="GitHub profile statistics"
              loading="lazy"
              className="h-auto w-full max-w-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex min-h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#09090f] p-4"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=09090f&title_color=a78bfa&text_color=e4e4e7`}
              alt="Most-used programming languages on GitHub"
              loading="lazy"
              className="h-auto w-full max-w-md"
            />
          </motion.div>
        </div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-violet-100"
          >
            <GitHubIcon size={18} />
            Explore My GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
    