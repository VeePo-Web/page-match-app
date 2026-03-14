import { cn } from "@/lib/utils";

interface GoldFrameProps {
  className?: string;
  animate?: boolean;
}

export function GoldFrame({ className, animate = true }: GoldFrameProps) {
  const lineClass = "absolute bg-gold/30";
  const len = "40px";
  const animStyle = animate
    ? { animationDuration: "800ms", animationTimingFunction: "cubic-bezier(0.22,0.61,0.36,1)", animationFillMode: "both" as const }
    : {};

  return (
    <div className={cn("absolute inset-0 pointer-events-none z-10", className)} aria-hidden="true">
      {/* Top-left */}
      <span className={cn(lineClass, "top-0 left-0 h-[1px]")} style={{ width: len, transformOrigin: "left", animation: animate ? "gold-frame-draw 800ms var(--ease-sacred) both" : undefined, animationDelay: "200ms", ...animStyle }} />
      <span className={cn(lineClass, "top-0 left-0 w-[1px]")} style={{ height: len, transformOrigin: "top", animation: animate ? "gold-frame-draw-y 800ms var(--ease-sacred) both" : undefined, animationDelay: "200ms", ...animStyle }} />
      {/* Top-right */}
      <span className={cn(lineClass, "top-0 right-0 h-[1px]")} style={{ width: len, transformOrigin: "right", animation: animate ? "gold-frame-draw 800ms var(--ease-sacred) both" : undefined, animationDelay: "400ms", ...animStyle }} />
      <span className={cn(lineClass, "top-0 right-0 w-[1px]")} style={{ height: len, transformOrigin: "top", animation: animate ? "gold-frame-draw-y 800ms var(--ease-sacred) both" : undefined, animationDelay: "400ms", ...animStyle }} />
      {/* Bottom-left */}
      <span className={cn(lineClass, "bottom-0 left-0 h-[1px]")} style={{ width: len, transformOrigin: "left", animation: animate ? "gold-frame-draw 800ms var(--ease-sacred) both" : undefined, animationDelay: "600ms", ...animStyle }} />
      <span className={cn(lineClass, "bottom-0 left-0 w-[1px]")} style={{ height: len, transformOrigin: "bottom", animation: animate ? "gold-frame-draw-y 800ms var(--ease-sacred) both" : undefined, animationDelay: "600ms", ...animStyle }} />
      {/* Bottom-right */}
      <span className={cn(lineClass, "bottom-0 right-0 h-[1px]")} style={{ width: len, transformOrigin: "right", animation: animate ? "gold-frame-draw 800ms var(--ease-sacred) both" : undefined, animationDelay: "800ms", ...animStyle }} />
      <span className={cn(lineClass, "bottom-0 right-0 w-[1px]")} style={{ height: len, transformOrigin: "bottom", animation: animate ? "gold-frame-draw-y 800ms var(--ease-sacred) both" : undefined, animationDelay: "800ms", ...animStyle }} />
    </div>
  );
}
