"use client";

import InfiniteScroll from "@/components/infinite-scroll";
import Image from "next/image";
import Link from "next/link";
import Projects from "@/components/projects";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="text-xs tracking-[0.2em] uppercase"
        style={{ color: "var(--accent-color)", fontFamily: "var(--font-geist-mono)" }}
      >
        {children}
      </span>
      <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-y-24 pt-20 pb-16">
      {/* Hero */}
      <section>
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-y-4"
        >
          <motion.div custom={0} variants={fadeUp}>
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--accent-color)", fontFamily: "var(--font-geist-mono)" }}
            >
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="leading-none"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700 }}
          >
            Hi, I&apos;m Theo
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-lg max-w-xl"
            style={{ color: "var(--muted-foreground)" }}
          >
            Passionate about building things that solve real problems.
          </motion.p>
        </motion.div>
      </section>

      {/* About */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <SectionLabel>About Me</SectionLabel>
        <div
          className="border-l-2 pl-6"
          style={{ borderColor: "var(--accent-color)" }}
        >
          <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            I love building stuff that solves people&apos;s pain points. I keep a blog
            about programming and maths, and occasionally post YouTube videos
            about programming.
          </p>

          <div className="flex gap-x-6 mt-6 items-center">
            <Link
              href="https://www.linkedin.com/in/fedor-selenskiy/"
              target="_blank"
              className="opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <Image src="linkedin.svg" width={24} height={24} alt="linkedin" />
            </Link>
            <Link
              href="https://medium.com/@fedor.selenskiy"
              target="_blank"
              className="opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              <Image src="medium.svg" width={24} height={24} alt="medium" />
            </Link>
            <Link
              href="https://www.youtube.com/@AquilexTalent"
              target="_blank"
              className="opacity-60 hover:opacity-100 transition-opacity duration-200 h-fit"
            >
              <Image src="youtube.svg" width={24} height={24} alt="youtube" className="h-fit" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
      >
        <SectionLabel>Tech Stack</SectionLabel>
        <InfiniteScroll />
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <SectionLabel>Projects</SectionLabel>
        <Projects />
      </motion.section>
    </div>
  );
}
