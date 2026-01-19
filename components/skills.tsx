"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn, ScaleIn } from "./animations";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Vue.js",
      "Next.js",
      "React Native",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Redux",
      "Pinia",
    ],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Postman"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Customer Service",
      "Team Coordination",
      "Problem Solving",
      "Communication",
      "Inventory Management",
    ],
  },
];

const certifications = [
  {
    title: "Database Design and Database Programming",
    issuer: "Oracle",
    date: "Aug 2019",
  },
  {
    title: "Java Fundamental",
    issuer: "Oracle",
    date: "Jan 2019",
  },
  {
    title: "Desktop Application Training Professional Level",
    issuer: "Ebiz Education Enterprise",
    date: "Jun 2017",
  },
  {
    title: "Belajar Membuat Front-End Web Untuk Pemula",
    issuer: "Dicoding Academy",
    date: "Oct 2023",
  },
  {
    title: "Belajar Dasar Pemrogaman Javascript",
    issuer: "Dicoding Academy",
    date: "Oct 2022",
  },
  {
    title: "Memulai Pemrograman Dengan Kotlin",
    issuer: "Dicoding Academy",
    date: "Nov 2021",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills and certifications"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Skills
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <FadeIn key={category.title} delay={categoryIndex * 0.15} direction="up">
            <div>
              <h3 className="mb-3 text-sm font-medium text-foreground">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <ScaleIn key={skill} delay={categoryIndex * 0.15 + skillIndex * 0.03}>
                    <li>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </li>
                  </ScaleIn>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Certifications */}
      <FadeIn delay={0.6} direction="up">
        <div className="mt-12">
          <h3 className="mb-6 text-lg font-semibold text-foreground">
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <ScaleIn key={index} delay={0.7 + index * 0.1}>
                <div className="group relative rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:bg-secondary/50 hover:scale-[1.02] hover:shadow-lg hover:border-primary/30">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h4 className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
