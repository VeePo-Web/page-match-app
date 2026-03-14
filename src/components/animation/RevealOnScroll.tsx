import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import React from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  variant?: "up" | "scale" | "blur";
  delay?: number;
  threshold?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function RevealOnScroll({
  children,
  variant = "up",
  delay = 0,
  threshold = 0.15,
  className,
  as: Tag = "div",
}: RevealOnScrollProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, delay, triggerOnce: true });

  return (
    <Tag
      ref={ref as React.RefObject<any>}
      className={cn(
        "reveal",
        variant === "up" && "reveal--up",
        variant === "scale" && "reveal--scale",
        variant === "blur" && "reveal--blur",
        isVisible && "is-visible",
        className
      )}
      style={{ "--animation-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
