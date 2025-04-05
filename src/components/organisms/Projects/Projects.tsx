"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Section } from "../../molecules/Section/Section";
import { Button } from "../../atoms/Button";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const DUMMY_PROJECTS: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring product management, cart functionality, and secure payments.",
    image: "/project-placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/project-placeholder.svg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current weather conditions and forecasts using multiple weather APIs.",
    image: "/project-placeholder.svg",
    technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
];

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <Section title="Projects" id="projects">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        {DUMMY_PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <motion.div
              className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden bg-black/[.05] dark:bg-white/[.06]"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div className="w-full md:w-1/2 space-y-4" style={{ y }}>
              <motion.h3
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full text-sm bg-black/[.05] dark:bg-white/[.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                {project.liveUrl && (
                  <Button
                    variant="primary"
                    onClickButton={() => window.open(project.liveUrl, "_blank")}
                  >
                    View Live
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="secondary"
                    onClickButton={() =>
                      window.open(project.githubUrl, "_blank")
                    }
                  >
                    View Code
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
