import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { RevealOnScroll } from "@/components/animation";
import { Link } from "react-router-dom";

interface Step {
  title: string;
  fields: FieldDef[];
}

interface FieldDef {
  label: string;
  type?: "text" | "email" | "tel" | "date" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

interface ContactWizardProps {
  steps: Step[];
  ctaLabel?: string;
  successTitle?: string;
  successMessage?: string;
  returnPath?: string;
  returnLabel?: string;
}

function fieldId(label: string) {
  return `wizard-field-${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
}

function PillSelector({ options, value, onChange, id }: { options: string[]; value: string; onChange: (v: string) => void; id: string }) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby={id}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          role="radio"
          aria-checked={value === opt}
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

export function ContactWizard({
  steps,
  ctaLabel = "Send",
  successTitle = "Thank you.",
  successMessage = "I'll be in touch within 24 hours.",
  returnPath = "/",
  returnLabel = "Return home",
}: ContactWizardProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const stepContentRef = useRef<HTMLDivElement>(null);

  const totalSteps = steps.length;
  const isLast = current === totalSteps - 1;

  const updateField = (label: string, value: string) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  useEffect(() => {
    if (submitted) return;
    const timer = setTimeout(() => {
      const firstInput = stepContentRef.current?.querySelector("input, textarea, select") as HTMLElement | null;
      firstInput?.focus();
    }, 400);
    return () => clearTimeout(timer);
  }, [current, submitted]);

  const handleSubmit = () => {
    // Build mailto with form data
    const subject = encodeURIComponent(`New Inquiry — ${formData["Service"] || "General"}`);
    const bodyParts = Object.entries(formData)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`);
    const body = encodeURIComponent(bodyParts.join("\n"));
    const mailtoUrl = `mailto:parker@parkergawryletz.com?subject=${subject}&body=${body}`;

    // Open mailto
    window.location.href = mailtoUrl;

    // Show success state after brief delay
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleNext = () => {
    const form = document.getElementById("wizard-form") as HTMLFormElement;
    if (form && !form.reportValidity()) return;
    setDirection(1);
    if (isLast) {
      handleSubmit();
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
        <Link
          to={returnPath}
          className="inline-flex items-center mt-fitz-7 text-sm uppercase tracking-[0.16em] text-sage story-link"
        >
          ← {returnLabel}
        </Link>
      </motion.div>
    );
  }

  const step = steps[current];

  return (
    <div className="max-w-xl mx-auto">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 mb-fitz-7" role="progressbar" aria-valuenow={current + 1} aria-valuemin={1} aria-valuemax={totalSteps} aria-label={`Step ${current + 1} of ${totalSteps}`}>
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
        Step {current + 1} of {totalSteps} — {step.title}
      </p>

      {/* Form */}
      <div className="p-fitz-6 md:p-fitz-7 rounded-md border border-lines/30 bg-card/80 backdrop-blur-sm">
        <form id="wizard-form" className="space-y-fitz-5" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <div ref={stepContentRef} aria-live="polite" aria-atomic="true">
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
                {step.fields.map((field) => {
                  const id = fieldId(field.label);
                  return (
                    <div key={field.label}>
                      <label htmlFor={id} className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-fitz-2 font-sans">
                        {field.label}{field.required && " *"}
                      </label>
                      {field.options ? (
                        <PillSelector
                          options={field.options}
                          value={formData[field.label] || ""}
                          onChange={(v) => updateField(field.label, v)}
                          id={id}
                        />
                      ) : field.type === "textarea" ? (
                        <textarea
                          id={id}
                          rows={4}
                          value={formData[field.label] || ""}
                          onChange={(e) => updateField(field.label, e.target.value)}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full bg-transparent input-gold-focus py-fitz-3 text-foreground resize-none"
                        />
                      ) : (
                        <input
                          id={id}
                          type={field.type || "text"}
                          value={formData[field.label] || ""}
                          onChange={(e) => updateField(field.label, e.target.value)}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full bg-transparent input-gold-focus py-fitz-3 text-foreground"
                        />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

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
              disabled={isSubmitting}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending…
                </span>
              ) : isLast ? ctaLabel : "Continue →"}
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
