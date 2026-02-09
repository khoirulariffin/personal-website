"use client";

import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { FadeIn, ScaleIn } from "./animations";

const volunteering = [
  {
    role: "Internal Division",
    organization: "Faktabahasa Bekasi",
    description:
      "Coordinated each internal event such as the enrollment process for new members and tutors, outings, as well as consultation sessions.",
    skills: ["Knowledge Sharing", "Mentoring", "Community Building"],
  },
];

export function Volunteering() {
  return (
    <section
      id="volunteering"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Volunteering"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Volunteering
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {volunteering.map((vol, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="up">
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:scale-[1.02]" />
                  <div className="z-10 mb-2 mt-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                    <Heart className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-125" />
                    <span>Volunteer</span>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-foreground">
                      <div>
                        <span className="inline-flex items-baseline font-medium leading-tight text-foreground text-base">
                          {vol.role} · {vol.organization}
                        </span>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {vol.description}
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Skills">
                      {vol.skills.map((skill, skillIndex) => (
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
