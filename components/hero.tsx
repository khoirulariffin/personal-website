"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { FadeIn, SlideIn, Typewriter } from "./animations";

const navigation = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "VOLUNTEERING", href: "#volunteering" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/khoirulariffin",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khoirul-ariffin",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:contact@khoirulariffin.dev",
    icon: Mail,
  },
];

export function Hero() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <SlideIn direction="left" duration={0.6}>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            <Typewriter text="Khoirul Ariffin" speed={80} />
          </h1>
        </SlideIn>
        
        <FadeIn delay={0.8} direction="up">
          <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
            Front End Developer
          </h2>
        </FadeIn>
        
        <FadeIn delay={1} direction="up">
          <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
            I build accessible, interactive digital experiences for the web with
            a passion for Automotive and Information Technology.
          </p>
        </FadeIn>
        
        <FadeIn delay={1.2} direction="up">
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 animate-bounce" />
            <span>Bekasi, West Java, Indonesia</span>
          </div>
        </FadeIn>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navigation.map((item, index) => (
              <FadeIn key={item.name} delay={1.4 + index * 0.1} direction="left">
                <li>
                  <a
                    className="group flex items-center py-3"
                    href={item.href}
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none" />
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground group-focus-visible:text-foreground">
                      {item.name}
                    </span>
                  </a>
                </li>
              </FadeIn>
            ))}
          </ul>
        </nav>
      </div>

      <FadeIn delay={1.8} direction="up">
        <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
          {socials.map((social, index) => (
            <li key={social.name} className="animate-fade-in-up" style={{ animationDelay: `${1.9 + index * 0.1}s` }}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-125 hover:-translate-y-1"
                aria-label={`${social.name} (opens in a new tab)`}
              >
                <social.icon className="h-6 w-6" />
              </Link>
            </li>
          ))}
        </ul>
      </FadeIn>
    </header>
  );
}
