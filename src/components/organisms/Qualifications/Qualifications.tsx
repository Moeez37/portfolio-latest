"use client";

import React from "react";
import { Section } from "../../molecules/Section/Section";

interface Qualification {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "experience";
}

const DUMMY_QUALIFICATIONS: Qualification[] = [
  {
    title: "Software Engineering",
    organization: "University of Technology",
    period: "2018 - 2022",
    description: `Bachelor's degree in Software Engineering with focus on web technologies and distributed systems.`,
    type: "education",
  },
  {
    title: "Full Stack Developer",
    organization: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Developing and maintaining web applications using modern JavaScript frameworks and cloud technologies.",
    type: "experience",
  },
  {
    title: "Web Development Certification",
    organization: "Online Learning Platform",
    period: "2021",
    description:
      "Advanced certification in modern web development technologies and best practices.",
    type: "education",
  },
  {
    title: "Frontend Developer Intern",
    organization: "StartUp Co.",
    period: "2021 - 2022",
    description:
      "Worked on developing responsive user interfaces and implementing new features.",
    type: "experience",
  },
];

export const Qualifications: React.FC = () => {
  return (
    <Section title="Qualifications" id="qualifications">
      <div className="space-y-8">
        <div className="flex justify-center gap-8 mb-8">
          <button
            className="text-lg font-semibold hover:text-blue-600 transition-colors"
            onClick={() =>
              document
                .getElementById("education")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Education
          </button>
          <button
            className="text-lg font-semibold hover:text-blue-600 transition-colors"
            onClick={() =>
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience
          </button>
        </div>

        <div id="education" className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          {DUMMY_QUALIFICATIONS.filter((q) => q.type === "education").map(
            (qual, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:border-transparent hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold">{qual.title}</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {qual.period}
                  </span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  {qual.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {qual.description}
                </p>
              </div>
            ),
          )}
        </div>

        <div id="experience" className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          {DUMMY_QUALIFICATIONS.filter((q) => q.type === "experience").map(
            (qual, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:border-transparent hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold">{qual.title}</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {qual.period}
                  </span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  {qual.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {qual.description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </Section>
  );
};
