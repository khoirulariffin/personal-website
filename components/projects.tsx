"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";
import { FadeIn, ScaleIn } from "./animations";

const projects = [
  {
    title: "Vue Excel App",
    description:
      "A feature-rich, spreadsheet application built with Vue 3, TypeScript, and TailwindCSS. Supports importing/exporting .xlsx files, cell formatting, shapes, formulas, and a multi-mode workflow (Designer, Operator, Manual).",
    url: "https://github.com/khoirulariffin/vue-excel",
    demoUrl: "https://excel-khoirulariffin.vercel.app/",
    contributions: 4,
    skills: ["Vue.js", "Excel", "Spreadsheet", "exceljs"],
  },
  {
    title: "Vue Drawing App",
    description:
      "A modern drawing application built with Vue 3, Fabric.js, and TypeScript, following the Feature-Sliced Design (FSD) architecture.",
    url: "https://github.com/khoirulariffin/drawing",
    demoUrl: "https://drawing-khoirulariffin.vercel.app/",
    contributions: 1,
    skills: ["Vue.js", "Fabric.js", "TypeScript", "FSD"],
  },
  {
    title: "Vue Leaflet GeoManager & Routing Optimization",
    description:
      "A modern Geographic Information System (GIS) application built with Vue 3, Leaflet, and Turf.js. This project is designed for area management (polygons), school location mapping, and logistics distribution optimization (Public Kitchen) using the Dijkstra algorithm (via OSRM).",
    url: "https://github.com/khoirulariffin/leaflet-geoman",
    demoUrl: "https://khoirulariffin.github.io/vue-leaflet/#/",
    contributions: 13,
    skills: ["Vue.js", "Leaflet", "Turf.js", "OSRM", "Dijkstra"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.12} direction="up">
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:scale-[1.02]" />
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                        <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 group/star">
                        <Star className="h-3 w-3 transition-all duration-300 group-hover/star:text-yellow-400 group-hover/star:fill-yellow-400 group-hover/star:scale-125" />
                        {project.contributions} contributions
                      </span>
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition-colors duration-300"
                      >
                        <Github className="h-3 w-3" />
                        View on GitHub
                      </Link>
                    </div>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {project.skills.map((skill, skillIndex) => (
                        <ScaleIn
                          key={skill}
                          delay={index * 0.12 + skillIndex * 0.05}
                        >
                          <li className="mr-1.5 mt-2">
                            <Badge
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                            >
                              {skill}
                            </Badge>
                          </li>
                        </ScaleIn>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
        <FadeIn delay={0.8} direction="up">
          <div className="mt-12">
            <Link
              href="https://github.com/khoirulariffin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium leading-tight text-foreground group"
            >
              <span>
                <span className="border-b border-transparent pb-px transition-all duration-300 group-hover:border-primary">
                  View Full Project Archive on GitHub
                </span>
                <span className="whitespace-nowrap">
                  <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </span>
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
