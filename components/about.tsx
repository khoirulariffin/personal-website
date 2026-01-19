"use client";

import { FadeIn } from "./animations";

export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>
      <div className="space-y-4 text-muted-foreground">
        <FadeIn delay={0} direction="up">
          <p>
            A confident person with experienced customer service and warehouse
            development with a keen interest in{" "}
            <span className="font-medium text-foreground transition-colors hover:text-primary">Automotive</span> and{" "}
            <span className="font-medium text-foreground transition-colors hover:text-primary">
              Information Technology
            </span>
            . Currently working as a{" "}
            <span className="font-medium text-foreground">Frontend Developer</span>{" "}
            at{" "}
            <a
              href="https://www.linkedin.com/company/ntx-solusi-teknologi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline underline-offset-4 transition-all"
            >
              PT. NTX Solusi Teknologi
            </a>
            .
          </p>
        </FadeIn>
        
        <FadeIn delay={0.1} direction="up">
          <p>
            With over{" "}
            <span className="font-medium text-foreground">7 years</span> of total
            professional experience, I transitioned from warehouse operations and
            customer service to software development. I completed an intensive{" "}
            <span className="font-medium text-foreground">
              Full Stack Developer
            </span>{" "}
            program at{" "}
            <a
              href="https://www.hacktiv8.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline underline-offset-4 transition-all"
            >
              Hacktiv8 Indonesia
            </a>{" "}
            in 2023, where I mastered JavaScript, React.js, Vue.js, Express.js, and
            React Native.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} direction="up">
          <p>
            I specialize in transforming UI/UX designs into{" "}
            <span className="font-medium text-foreground transition-colors hover:text-primary">
              interactive, responsive, and user-centric
            </span>{" "}
            web interfaces. My diverse background gives me a unique perspective on
            building products that truly serve users and business objectives.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3} direction="up">
          <p>
            When {"I'm"} not coding, {"you'll"} find me exploring my passion for{" "}
            <span className="font-medium text-foreground transition-colors hover:text-primary">motorcycles</span> or
            keeping up with the latest in technology.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
