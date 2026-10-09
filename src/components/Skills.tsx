
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "Interfaces & experiences",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    subtitle: "APIs & application logic",
    icon: Server,
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "Java", "Spring Boot", "REST APIs"],
  },
  {
    title: "Databases",
    subtitle: "Data & persistence",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "AI & Agentic AI",
    subtitle: "Intelligent applications",
    icon: BrainCircuit,
    skills: ["LLM Applications", "RAG", "LangChain", "LangGraph", "AI Agents", "Prompt Engineering"],
  },
  {
    title: "Tools & Platforms",
    subtitle: "Development workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
            What I work with
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="gradient-text">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
            From building full-stack applications to exploring AI-powered
            systems, these are the technologies I work with and continue to learn.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 transition-colors hover:border-white/20"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{group.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}