import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import React from "react";

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerMs?: number;
  threshold?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  staggerMs = 80,
  threshold = 0.15,
  className,
}: StaggerChildrenProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, triggerOnce: true });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cn("stagger-reveal", className)}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child;
        return (
          <div
            className={cn("reveal reveal--up", isVisible && "is-visible")}
            style={{ "--animation-delay": `${i * staggerMs}ms` } as React.CSSProperties}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
