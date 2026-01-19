"use client";

import { FadeIn } from "./animations";

export function Footer() {
  return (
    <FadeIn delay={0.2} direction="up">
      <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
        <p>
          Loosely designed in{" "}
          <a
            href="https://www.figma.com/"
            className="font-medium text-foreground hover:text-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma
          </a>{" "}
          and coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            className="font-medium text-foreground hover:text-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual Studio Code
          </a>
          . Built with{" "}
          <a
            href="https://nextjs.org/"
            className="font-medium text-foreground hover:text-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-medium text-foreground hover:text-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          . Deployed with{" "}
          <a
            href="https://vercel.com/"
            className="font-medium text-foreground hover:text-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
          .
        </p>
        <p className="mt-4">
          © {new Date().getFullYear()} Khoirul Ariffin. All rights reserved.
        </p>
      </footer>
    </FadeIn>
  );
}
