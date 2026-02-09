"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  Typewriter,
  motionItem,
} from "./animations";
import { motion } from "framer-motion";

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
    href: "mailto:khoirulariffin@gmail.com",
    icon: Mail,
  },
];

export function Hero() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <SlideIn direction="left" duration={0.6}>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            <Typewriter text="Khoirul Ariffin" speed={0.1} />
          </h1>
        </SlideIn>

        <FadeIn delay={0.2} direction="up">
          <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
            Front End Developer
          </h2>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
            I build accessible, interactive digital experiences for the web with
            a passion for Automotive and Information Technology.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} direction="up">
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <MapPin className="h-4 w-4" />
            </motion.div>
            <span>Bekasi, West Java, Indonesia</span>
          </div>
        </FadeIn>

        <div className="hidden lg:block">
          <StaggerContainer
            className="mt-16 w-max"
            staggerDelay={0.1}
            delay={0.6}
          >
            <ul className="w-max" aria-label="In-page jump links">
              {navigation.map((item) => (
                <motion.li key={item.name}>
                  <motion.a
                    className="group flex items-center py-3"
                    href={item.href}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.span
                      className="mr-4 h-px bg-muted-foreground transition-colors group-hover:bg-foreground group-focus-visible:bg-foreground"
                      variants={{
                        initial: { width: 32 },
                        hover: { width: 64 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground group-focus-visible:text-foreground">
                      {item.name}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </StaggerContainer>
        </div>
      </div>

      <StaggerContainer
        className="mt-8 flex items-center gap-5 pl-4"
        aria-label="Social media"
        delay={1.2}
        staggerDelay={0.1}
      >
        {socials.map((social) => (
          <motion.li key={social.name}>
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} (opens in a new tab)`}
            >
              <motion.div
                whileHover={{ scale: 1.2, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <social.icon className="h-6 w-6" />
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </StaggerContainer>
    </header>
  );
}
