"use client";

import { useState } from "react";
import {
  Pause,
  Play,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiFastapi,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiDocker,
  SiLangchain,
} from "react-icons/si";

type Skill = {
  name: string;
  Icon: IconType;
  color: string;
};

type Orbit = {
  name: string;
  duration: number;
  reverse: boolean;
  skills: Skill[];
};

const orbits: Orbit[] = [
  {
    name: "Languages",
    duration: 18,
    reverse: false,
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Java", Icon: FaJava, color: "#E76F00" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    name: "Frontend",
    duration: 26,
    reverse: true,
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    name: "Backend",
    duration: 34,
    reverse: false,
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "C# / .NET", Icon: SiDotnet, color: "#512BD4" },
    ],
  },
  {
    name: "AI & Tools",
    duration: 44,
    reverse: true,
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "LangChain", Icon: SiLangchain, color: "#1C8D76" },
      { name: "OpenAI", Icon: SiLangchain, color: "#FFFFFF" },
    ],
  },
];

const technologyDetails: Record<string, string> = {
  Python:
    "Used for backend development, automation, scripting, and AI applications.",
  Java:
    "Used to build robust backend services and enterprise applications.",
  JavaScript:
    "Powers interactive user interfaces and full-stack web applications.",
  TypeScript:
    "Adds type safety and maintainability to JavaScript projects.",
  React:
    "Builds reusable UI components and interactive web interfaces.",
  "Next.js":
    "Supports full-stack React applications, routing, and server rendering.",
  HTML5:
    "Structures the content and layout of web pages.",
  "Tailwind CSS":
    "Creates responsive, modern interfaces using utility classes.",
  "Node.js":
    "Runs JavaScript on the server for backend applications.",
  "Express.js":
    "Builds APIs and backend routes with Node.js.",
  "Spring Boot":
    "Builds Java-based REST APIs and backend services.",
  FastAPI:
    "Builds high-performance Python APIs, including AI service endpoints.",
  "C# / .NET":
    "Supports backend APIs and application development with C#.",
  PostgreSQL:
    "Stores structured data in a relational database.",
  MongoDB:
    "Stores flexible, document-oriented application data.",
  GitHub:
    "Hosts repositories and supports version control and collaboration.",
  Docker:
    "Packages applications and dependencies into portable containers.",
  LangChain:
    "Helps build applications that use language models and tools.",
  OpenAI:
    "Provides AI models for language, reasoning, and application features.",
};

export default function TechnologySolarSystem() {
  const [playing, setPlaying] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      className="solar-system"
      aria-label="My technology stack"
    >
      <div className="solar-heading">
        <span className="solar-eyebrow">
          <Code2 size={14} /> MY TECH UNIVERSE
        </span>

        <h2>
          Technologies I <span>Build With</span>
        </h2>

        <p>Explore the technologies powering my projects.</p>
      </div>

      <div
        className={`solar-stage ${playing ? "" : "solar-paused"}`}
      >
        {orbits.map((orbit, orbitIndex) => (
          <div
            className={`solar-orbit orbit-${orbitIndex + 1}`}
            key={orbit.name}
            style={
              {
                "--orbit-duration": `${orbit.duration}s`,
                "--orbit-direction": orbit.reverse
                  ? "reverse"
                  : "normal",
              } as React.CSSProperties
            }
          >
            {orbit.skills.map((skill, index) => {
              const angle =
                (360 / orbit.skills.length) * index;
              const Icon = skill.Icon;

              return (
                <button
                  key={skill.name}
                  type="button"
                  className="solar-planet"
                  style={
                    {
                      "--planet-angle": `${angle}deg`,
                    } as React.CSSProperties
                  }
                  aria-label={`Learn about ${skill.name}`}
                  aria-pressed={selected === skill.name}
                  onClick={() =>
                    setSelected(
                      selected === skill.name
                        ? null
                        : skill.name
                    )
                  }
                >
                  <span className="planet-badge">
                    <Icon
                      size={22}
                      color={skill.color}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="planet-tooltip">
                    {skill.name}
                  </span>
                </button>
              );
            })}
          </div>
        ))}

        <div className="solar-center">
          <div className="solar-photo-glow" />

          <img
            className="solar-portrait"
            src="/images/omm.jpg"
            alt="Omm Prakash Parida"
          />

          <span className="solar-online">
            <span /> Developer
          </span>
        </div>
      </div>

      {/* Selected Technology Information */}
      {selected && (
        <div className="solar-info" aria-live="polite">
          <div>
            <span>TECHNOLOGY SELECTED</span>
            <h3>{selected}</h3>
            <p>
              {technologyDetails[selected] ??
                `Explore how ${selected} can be used in software development.`}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close technology information"
          >
            ×
          </button>
        </div>
      )}

      <button
        type="button"
        className="solar-control"
        onClick={() => setPlaying(!playing)}
      >
        {playing ? (
          <Pause size={16} />
        ) : (
          <Play size={16} />
        )}

        {playing ? "Pause animation" : "Resume animation"}
      </button>

      <p className="solar-caption">
        <ArrowUpRight size={14} />
        Click any planet to explore my tech stack
      </p>
    </section>
  );
}