"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
{ name: "Home", href: "#home" },
{ name: "About", href: "#about" },
{ name: "Skills", href: "#skills" },
{ name: "Projects", href: "#projects" },
{ name: "Contact", href: "#contact" },
];

function GithubIcon({ size = 20 }: { size?: number }) {
return ( <svg
   viewBox="0 0 24 24"
   width={size}
   height={size}
   fill="currentColor"
   aria-hidden="true"
   focusable="false"
 > <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.88.13 3.18.77.84 1.22 1.91 1.22 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" /> </svg>
);
}

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return (
<motion.header
initial={{ y: -100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{
duration: 0.7,
ease: "easeOut",
}}
className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6"
> <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:px-5">
{/* Logo */}
<Link
href="#home"
className="group flex items-center gap-3"
onClick={() => setIsOpen(false)}
> <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-black transition-transform duration-300 group-hover:rotate-6">
OP </div>

      <span className="hidden text-sm font-semibold sm:block">
        Omm Prakash Parida
      </span>
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-1 md:flex">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
        >
          {item.name}
        </Link>
      ))}
    </div>

    {/* Desktop Actions */}
    <div className="hidden items-center gap-2 md:flex">
      <Link
        href="https://github.com/OmmPrakash-07"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-all hover:bg-white/5 hover:text-white"
        aria-label="GitHub"
        title="Visit my GitHub profile"
      >
        <GithubIcon size={20} />
      </Link>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
      >
        <Download size={16} />
        Resume
      </a>
    </div>

    {/* Mobile Menu Button */}
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-white/5 md:hidden"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  </nav>

  {/* Mobile Navigation */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: -10,
          scale: 0.98,
        }}
        transition={{ duration: 0.2 }}
        className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl md:hidden"
      >
        <div className="flex flex-col p-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </Link>
          ))}

          <div className="my-2 h-px bg-white/10" />

          <Link
            href="https://github.com/OmmPrakash-07"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/5"
          >
            <GithubIcon size={18} />
            GitHub
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.header>
);
}