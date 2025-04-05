"use client";

import React from "react";
import { Section } from "../../molecules/Section/Section";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description: string;
}

const DUMMY_SKILLS: Skill[] = [
  {
    name: "React",
    level: "Expert",
    description:
      "Building modern web applications with React and its ecosystem",
  },
  {
    name: "TypeScript",
    level: "Advanced",
    description:
      "Developing type-safe applications with enhanced developer experience",
  },
  {
    name: "Node.js",
    level: "Advanced",
    description: "Creating scalable backend services and REST APIs",
  },
  {
    name: "Next.js",
    level: "Advanced",
    description:
      "Developing full-stack applications with server-side rendering",
  },
  {
    name: "TailwindCSS",
    level: "Intermediate",
    description: "Crafting responsive and modern user interfaces",
  },
  {
    name: "GraphQL",
    level: "Intermediate",
    description: "Building efficient APIs with precise data fetching",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const getProgressWidth = (level: Skill["level"]) => {
  const levels = {
    Beginner: "25%",
    Intermediate: "50%",
    Advanced: "75%",
    Expert: "90%",
  };
  return levels[level];
};

export const Skills: React.FC = () => {
  return (
    <Section title="Skills" id="skills">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {DUMMY_SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:border-transparent hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {skill.level}
                </span>
              </div>
              <div className="w-full h-2 bg-black/[.05] dark:bg-white/[.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: getProgressWidth(skill.level) }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
                />
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
