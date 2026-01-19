import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Volunteering } from "@/components/volunteering";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-primary px-4 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Hero />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Volunteering />
          <Projects />
          <Skills />
          <Education />
          <Footer />
        </main>
      </div>
    </div>
  );
}
