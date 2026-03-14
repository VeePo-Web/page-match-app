export function BreathingDiamond({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <div
        className="w-2 h-2 bg-gold/60"
        style={{
          transform: "rotate(45deg)",
          animation: "diamond-breathe 4s ease-in-out infinite",
        }}
      />
    </div>
  );
}
