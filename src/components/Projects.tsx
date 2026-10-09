"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "DevTeam AI",
    category: "AI & Agentic AI",
    description:
      "An AI-powered development team exploring automated project planning and multi-agent workflows to streamline software development.",
    tech: ["Python", "FastAPI", "LangGraph", "OpenAI"],
    github: "https://github.com/OmmPrakash-07/DevTeam-AI",
    demo: "https://devteam-ai.vercel.app/",
  },
  {
    title: "SmartServiceX",
    category: "Full Stack",
    description:
      "A smart service and bug management system for complaint tracking, employee assignment, issue classification, and resolution workflows.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "PHP",
    ],
    github: "https://github.com/OmmPrakash-07/SmartServiceX",
    demo: null,
  },
  {
    title: "AI Resume Analyzer",
    category: "AI & Machine Learning",
    description:
      "An AI-powered resume analysis application designed to help users review resumes and explore insights relevant to their career goals.",
    tech: ["Python", "Streamlit", "AI"],
    github: "https://github.com/OmmPrakash-07/ai-resume-analyzer",
    demo: "https://ai-resume-analyzer-ommprakash07.streamlit.app/",
  },
  {
    title: "Restaurant Ordering App",
    category: "Full Stack Web Development",
    description:
      "A restaurant ordering application with menu browsing, cart management, and an order flow for a smoother online food-ordering experience.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/OmmPrakash-07/restaurant-ordering-app",
    demo: "https://restaurant-ordering-app-xi.vercel.app/",
  },
  {
    title: "Bike Rental",
    category: "Full Stack Web Development",
    description:
      "A bike rental web application built to showcase an interactive rental experience and modern web development skills.",
    tech: ["React", "CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/OmmPrakash-07/Bike-Rental",
    demo: "https://bike-rental-phi.vercel.app/",
  },
];

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
            My work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-zinc-400">
            From full-stack applications to intelligent AI solutions, explore
            the projects I have been building.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className={`glass rounded-2xl p-6 sm:p-8 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <p className="mb-4 text-sm text-violet-300">
                {project.category}
              </p>

              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              {/* Technology badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm transition hover:border-white/20 hover:bg-white/10"
                >
                  <GitHubIcon />
                  GitHub
                  <ArrowUpRight size={16} />
                </Link>

                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live demo of ${project.title}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-400"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                    <ArrowUpRight size={16} />
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}