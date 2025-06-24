"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroItemVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const heroButtonsVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const profileImageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="container flex flex-col items-center justify-center text-center min-h-[80vh] md:min-h-[calc(100vh-64px)] py-16 md:py-32 overflow-hidden relative bg-gradient-to-b from-background to-background/95"
    >
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <motion.div
          className="max-w-2xl text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
        >
          <motion.h1
            className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
            variants={heroItemVariant}
          >
            Hi, I’m Manasi 👋
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl font-medium"
            variants={heroItemVariant}
          >
            Aspiring Software Engineer | Full-Stack Developer | AI & ML Enthusiast
          </motion.p>
          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
            variants={heroButtonsVariant}
          >
            <Link href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary/90 hover:shadow-lg"
              >
                View My Work
                <ArrowDown className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/resume/manasi_resume.pdf" download="manasi_resume.pdf">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary/10 hover:shadow-lg border-2"
              >
                Download Resume
                <Download className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 md:mt-0 md:ml-12"
          initial="hidden"
          animate="visible"
          variants={profileImageVariant}
        >
          <div className="relative w-56 h-56 md:w-80 md:h-80 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/project-images/manasi.jpg" // Replace with your actual image path
              alt="Manasi Patil Profile"
              className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <Link
          href="#about"
          onClick={(e) => scrollToSection(e, "about")}
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-10 w-10 text-primary cursor-pointer hover:text-primary/80 transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}




