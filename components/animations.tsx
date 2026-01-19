"use client";

import React from "react"

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: FadeInProps) {
  const [ref, isInView] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: once,
  });

  const directionStyles = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isInView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionStyles[direction]}`,
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const [ref, isInView] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={
        {
          "--stagger-delay": `${staggerDelay}s`,
          "--is-visible": isInView ? "1" : "0",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.4,
}: ScaleInProps) {
  const [ref, isInView] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95",
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
  duration?: number;
}

export function SlideIn({
  children,
  className,
  delay = 0,
  direction = "left",
  duration = 0.5,
}: SlideInProps) {
  const [ref, isInView] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isInView
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${direction === "left" ? "-translate-x-12" : "translate-x-12"}`,
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function Typewriter({
  text,
  className,
  delay = 0,
  speed = 50,
}: TypewriterProps) {
  const [ref, isInView] = useScrollAnimation<HTMLSpanElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={cn(
            "inline-block transition-opacity duration-100",
            isInView ? "opacity-100" : "opacity-0"
          )}
          style={{
            transitionDelay: isInView ? `${delay + index * (speed / 1000)}s` : "0s",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
