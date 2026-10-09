
"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Rocket, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive web applications, REST APIs, and database-driven solutions.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Agentic Systems",
    description:
      "Exploring LLM applications, intelligent workflows, and AI-powered automation.",
  },
  {
    icon: Rocket,
    title: "Real-World Projects",
    description:
      "Turning ideas into practical software through projects and continuous experimentation.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Learning new technologies, improving problem-solving, and growing as a developer.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
            A developer passionate about building useful software and exploring
            how artificial intelligence can make digital experiences smarter.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-300">
              My journey
            </p>

            <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">
              I love turning complex ideas into useful digital products.
            </h3>

            <div className="mt-6 space-y-4 leading-7 text-zinc-400">
              <p>
                I'm a Computer Science engineering student focused on full-stack
                development, modern web technologies, and AI-powered
                applications.
              </p>

              <p>
                I enjoy building end-to-end projects, connecting frontends with
                backend services, working with databases, and exploring how
                LLMs and agentic workflows can solve practical problems.
              </p>

              <p>
                My goal is to keep learning, build meaningful products, and
                grow into a versatile software developer who can work across
                both full-stack engineering and AI.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 transition-colors hover:border-white/20"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="mb-2 font-semibold">{item.title}</h3>

                  <p className="text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}