"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FadeIn, ScaleIn } from "./animations";

const experiences = [
  {
    period: "Jul 2023 — Present",
    title: "Frontend Developer",
    company: "PT. NTX Solusi Teknologi",
    companyUrl: "https://www.ntxsolution.com/",
    description:
      "Transforming UI/UX designs into interactive, responsive, and user-centric web interfaces. Developing and optimizing navigation flow and user experience to align with business objectives. Executing thorough debugging, testing, and performance tuning of front-end components.",
    skills: ["JavaScript", "Vue.js", "TailwindCSS", "Responsive Design"],
  },
  {
    period: "Apr 2021 — Dec 2022",
    title: "Warehouse Administrator",
    company: "Soluchain.ID",
    companyUrl: "https://soluchain.id/",
    description:
      "Checked and reviewed inbound and outbound activities, ensuring accuracy and adherence to procedures. Generated informative reports for the Head Office. Optimized and maintained effective control measures for petty cash.",
    skills: ["Inventory Management", "Reporting", "Operations"],
  },
  {
    period: "Jul 2018 — Oct 2020",
    title: "Service Advisor → PIC Claim C1 & C2 → Warehouse Coordinator",
    company: "PT Bekasi Motor - Honda Motorcycle Wing Dealership",
    companyUrl: "https://www.linkedin.com/company/bekasimotor/",
    description:
      "Started as Service Advisor understanding customer needs and providing expert advice on motorcycle services. Promoted to PIC Claim C1 & C2 conducting comprehensive analysis of spare parts claims. Advanced to Warehouse Coordinator managing workshop activities, inventory, and logistics coordination.",
    skills: [
      "Customer Service",
      "Claims Analysis",
      "Logistics",
      "Inventory",
      "Operations",
    ],
    roles: [
      { title: "Warehouse Coordinator", period: "Mar 2019 — Oct 2020" },
      { title: "PIC Claim C1 And C2", period: "Oct 2018 — Jun 2020" },
      { title: "Service Advisor", period: "Jul 2018 — Mar 2019" },
    ],
  },
  {
    period: "Aug 2016 — Jul 2017",
    title: "Line Operator",
    company: "PT. Resin Plating Technology",
    companyUrl: "https://www.rptech.co.id/RPT/",
    description:
      "Operated the injection molding process, ensuring the proper flow and distribution of molten plastic into the mold cavities. Performed regular quality checks on molded parts, inspecting for defects, dimensional accuracy, and conformity to specifications. Implemented Kaizen principles, enhancing production efficiency through continuous improvement.",
    skills: ["Injection Molding", "Quality Control", "Kaizen", "Production"],
  },
  {
    period: "Jan 2015 — Apr 2015",
    title: "Software Engineering Technician",
    company:
      "State University of Jakarta (Universitas Negeri Jakarta) - (Intership)",
    companyUrl: "https://unj.ac.id/",
    description:
      "Entry and update various types of data into the designated databases or computer systems accurately and efficiently.",
    skills: ["Data Entry", "Database Management", "Software Engineering"],
  },
  {
    period: "Aug 2014 — Nov 2014",
    title: "Part Keeper",
    company: "PT. NOK Indonesia - (Intership)",
    companyUrl: "https://www.nokgrp.com/en/",
    description:
      "Maintained and updated spare parts inventory and ensuring accurate records.",
    skills: ["Inventory Management", "Data Entry"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="up">
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:scale-[1.02]" />
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                    aria-label={exp.period}
                  >
                    {exp.period}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-foreground">
                      <div>
                        {exp.companyUrl ? (
                          <Link
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base transition-colors duration-300"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                              {"roles" in exp
                                ? exp.company
                                : `${exp.title} · ${exp.company}`}
                              <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </Link>
                        ) : (
                          <span>
                            {exp.title} · {exp.company}
                          </span>
                        )}
                      </div>
                    </h3>
                    {"roles" in exp && exp.roles && (
                      <div className="mt-3 space-y-2">
                        {exp.roles.map((role, roleIndex) => (
                          <div
                            key={roleIndex}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <div>
                              <span className="font-medium text-foreground">
                                {role.title}
                              </span>
                              <span className="ml-2 text-xs text-muted-foreground">
                                ({role.period})
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {exp.description}
                    </p>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {exp.skills.map((skill, skillIndex) => (
                        <ScaleIn
                          key={skill}
                          delay={index * 0.15 + skillIndex * 0.05}
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
      </div>
    </section>
  );
}
