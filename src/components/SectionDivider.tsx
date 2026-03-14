export function SectionDivider() {
  return (
    <div
      className="h-px w-full"
      style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--gold) / 0.15), transparent)' }}
      aria-hidden="true"
    />
  );
}
