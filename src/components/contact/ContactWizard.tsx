import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { RevealOnScroll } from "@/components/animation";

interface Step {
  title: string;
  fields: FieldDef[];
}

interface FieldDef {
  label: string;
  type?: "text" | "email" | "tel" | "date" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[]; // pill selector
}

interface ContactWizardProps {
  steps: Step[];
  ctaLabel?: string;
  successTitle?: string;
  successMessage?: string;
}

function PillSelector({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.12em] font-sans border transition-all duration-fast ${
            value === opt
              ? "bg-sage-deep text-warm-white border-sage-deep"
              : "bg-transparent text-muted-foreground border-lines/40 hover:border-sage/40"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function ContactWizard({ steps, ctaLabel = "Send", successTitle = "Thank you.", successMessage = "I'll be in touch within 24 hours." }: ContactWizardProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const totalSteps = steps.length;
  const isLast = current === totalSteps - 1;

  const updateField = (label: string, value: string) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  const handleNext = () => {
    // Basic HTML5 validation on current step
    const form = document.getElementById("wizard-form") as HTMLFormElement;
    if (form && !form.reportValidity()) return;
    setDirection(1);
    if (isLast) {
      setSubmitted(true);
    } else {
      setCurrent((p) => p + 1);
    }
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrent((p) => Math.max(0, p - 1));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        className="text-center py-fitz-9"
      >
        <BreathingDiamond className="mb-fitz-7" />
        <h2 className="mx-auto text-foreground">{successTitle}</h2>
        <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">{successMessage}</p>
      </motion.div>
    );
  }

  const step = steps[current];

  return (
    <div className="max-w-xl mx-auto">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 mb-fitz-7">
        {steps.map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-default ${
                i <= current ? "bg-gold" : "bg-lines/40"
              }`}
            />
            {i < totalSteps - 1 && (
              <div
                className={`w-8 h-[1px] transition-all duration-default ${
                  i < current ? "bg-gold" : "bg-lines/30"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step title */}
      <p className="overline text-center mb-fitz-5">
        Step {current + 1} — {step.title}
      </p>

      {/* Form */}
      <div className="p-fitz-6 md:p-fitz-7 rounded-md border border-lines/30 bg-card/80 backdrop-blur-sm">
        <form id="wizard-form" className="space-y-fitz-5" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              className="space-y-fitz-5"
            >
              {step.fields.map((field) => (
                <div key={field.label}>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-fitz-2 font-sans">
                    {field.label}{field.required && " *"}
                  </label>
                  {field.options ? (
                    <PillSelector
                      options={field.options}
                      value={formData[field.label] || ""}
                      onChange={(v) => updateField(field.label, v)}
                    />
                  ) : field.type === "textarea" ? (
                    <textarea
                      rows={4}
                      value={formData[field.label] || ""}
                      onChange={(e) => updateField(field.label, e.target.value)}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent input-gold-focus py-fitz-3 text-foreground resize-none"
                    />
                  ) : (
                    <input
                      type={field.type || "text"}
                      value={formData[field.label] || ""}
                      onChange={(e) => updateField(field.label, e.target.value)}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent input-gold-focus py-fitz-3 text-foreground"
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-fitz-3">
            {current > 0 ? (
              <button
                type="button"
                onClick={handleBack}
                className="text-sm uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors duration-fast font-sans"
              >
                ← Back
              </button>
            ) : (
              <span />
            )}
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]"
            >
              {isLast ? ctaLabel : "Continue →"}
            </button>
          </div>
        </form>
      </div>

      {/* Trust stats */}
      <RevealOnScroll delay={200}>
        <div className="flex justify-center gap-fitz-7 mt-fitz-7 text-center">
          {[
            { stat: "< 24hr", label: "Response time" },
            { stat: "100%", label: "Reply rate" },
            { stat: "Free", label: "Initial consultation" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-xl" style={{ color: "hsl(var(--sage))" }}>{s.stat}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.1em] mt-1 font-sans">{s.label}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}
