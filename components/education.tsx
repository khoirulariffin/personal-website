"use client";

import { ExternalLink, GraduationCap } from "lucide-react";
import Link from "next/link";
import { FadeIn, ScaleIn } from "./animations";

const education = [
  {
    period: "2023",
    degree: "Full Stack Developer",
    school: "Hacktiv8 Indonesia",
    schoolUrl: "https://www.hacktiv8.com/",
    location: "Jakarta Selatan, DKI Jakarta",
    grade: "B+",
    description:
      "Intensive bootcamp covering JavaScript fundamentals, PostgreSQL database management, Express.js backend development, Vue.js and React.js frontend development, Redux state management, and React Native mobile development.",
    highlights: [
      "Mastered Basic JavaScript Logic",
      "Utilized PostgreSQL for Database Management",
      "Created Web Applications using Express and Vue.js",
      "Developed Single-Page Applications with React.js",
      "Built Cross-Platform Mobile Applications with React Native",
    ],
  },
  {
    period: "2013 — 2016",
    degree: "High School Diploma, Software Engineering",
    school: "SMK Al-Muhadjirin",
    location: "Indonesia",
    description:
      "Vocational high school education specializing in software engineering, providing foundational knowledge in programming and computer systems.",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Education
        </h2>
      </div>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <ScaleIn key={index} delay={index * 0.2}>
            <div className="group relative rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:bg-secondary/50 hover:scale-[1.02] hover:shadow-lg hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <GraduationCap className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">{edu.degree}</h3>
                      {edu.schoolUrl ? (
                        <Link
                          href={edu.schoolUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:underline underline-offset-4 transition-all"
                        >
                          {edu.school}
                          <ExternalLink className="ml-1 h-3 w-3 transition-transform duration-300 hover:-translate-y-0.5 hover:translate-x-0.5" />
                        </Link>
                      ) : (
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                      )}
                      <p className="text-xs text-muted-foreground">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-muted-foreground">
                        {edu.period}
                      </span>
                      {edu.grade && (
                        <p className="text-xs text-primary font-medium">
                          Grade: {edu.grade}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                  {edu.highlights && (
                    <ul className="mt-3 space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <FadeIn key={i} delay={index * 0.2 + i * 0.05} direction="left">
                          <li className="text-xs text-muted-foreground flex items-start gap-2 transition-colors duration-300 hover:text-foreground">
                            <span className="text-primary mt-1">•</span>
                            {highlight}
                          </li>
                        </FadeIn>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </ScaleIn>
        ))}
      </div>
    </section>
  );
}
