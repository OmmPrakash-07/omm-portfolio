"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import Link from "next/link";

const contactLinks = [
  {
    label: "Email",
    value: "ommprakashparida114@gmail.com",
    href: "mailto:ommprakashparida114@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/omm-prakash-parida/",
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "Explore my projects",
    href: "https://github.com/OmmPrakash-07",
    icon: GitHubIcon,
  },
];

function GitHubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
            Have an interesting idea, a project opportunity, or just want to
            talk about technology and AI? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass mx-auto max-w-4xl rounded-3xl p-6 sm:p-10"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={
                      item.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-violet-400/40 hover:bg-white/[0.05]"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/20">
                      <Icon size={22} />
                    </div>

                    <h3 className="font-semibold">{item.label}</h3>

                    <p className="mt-2 break-words text-sm leading-6 text-zinc-400">
                      {item.value}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-violet-300">
                      Connect
                      <ArrowUpRight
                        size={16}
                        className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="my-8 h-px bg-white/10" />

          <div className="text-center">
            <h3 className="text-2xl font-semibold">
              Have a project in mind?
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              Let&apos;s turn your idea into a useful digital experience.
            </p>

            <motion.a
              href="mailto:ommprakashparida114@gmail.com?subject=Project%20Inquiry"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-400"
            >
              <Send size={18} />
              Let&apos;s Talk
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Usually excited to connect with developers, recruiters, and people
          building interesting things.
        </p>
      </div>
    </section>
  );
}