import { useState } from "react";
import { motion } from "framer-motion";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { RevealOnScroll } from "@/components/animation";
import { Link } from "react-router-dom";

interface ContactFormProps {
  serviceContext?: string;
  ctaLabel?: string;
  successTitle?: string;
  successMessage?: string;
  returnPath?: string;
  returnLabel?: string;
}

interface TouchedState {
  name: boolean;
  email: boolean;
  message: boolean;
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-success">
      <path d="M3 7.5L5.5 10L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FloatingField({
  id, label, type = "text", required = false, value, onChange, touched, valid, error,
  ...props
}: {
  id: string; label: string; type?: string; required?: boolean;
  value: string; onChange: (v: string) => void;
  touched: boolean; valid: boolean; error?: string;
  [key: string]: any;
}) {
  const hasError = touched && required && !value.trim();
  const isEmail = type === "email";
  const emailValid = isEmail && value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const emailError = isEmail && touched && value.trim() && !emailValid;
  const showCheck = touched && valid && !hasError && !emailError;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className={`peer w-full bg-transparent border-b ${
          hasError || emailError ? "border-destructive" : "border-border"
        } pt-5 pb-2 text-foreground transition-colors duration-200 focus:border-accent focus:outline-none`}
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-5 text-sm text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]"
      >
        {label}{required ? " *" : ""}
      </label>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        {showCheck && <CheckIcon />}
      </div>
      {hasError && (
        <p className="text-[10px] text-destructive mt-1 tracking-wide">Required</p>
      )}
      {emailError && (
        <p className="text-[10px] text-destructive mt-1 tracking-wide">Please enter a valid email</p>
      )}
    </div>
  );
}

export function ContactForm({
  serviceContext = "General",
  ctaLabel = "Send Message",
  successTitle = "Thank you.",
  successMessage = "I'll be in touch within 24 hours.",
  returnPath = "/",
  returnLabel = "Return home",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState<TouchedState>({ name: false, email: false, message: false });
  const [attempted, setAttempted] = useState(false);

  const markTouched = (field: keyof TouchedState) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValid = name.trim() && email.trim() && emailValid && message.trim();
  const MAX_MSG = 1000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    setTouched({ name: true, email: true, message: true });

    if (!isValid) return;

    const subject = encodeURIComponent(`${serviceContext} Inquiry — ${name}`);
    const bodyParts = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      `\nMessage:\n${message}`,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyParts.join("\n"));
    window.location.href = `mailto:parker@parkergawryletz.com?subject=${subject}&body=${body}`;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        className="text-center py-fitz-9 relative"
      >
        {/* Diamond burst particles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="diamond-burst-particle" style={{ "--dx": "-30px", "--dy": "-40px" } as React.CSSProperties} />
          <div className="diamond-burst-particle" style={{ "--dx": "35px", "--dy": "-25px" } as React.CSSProperties} />
          <div className="diamond-burst-particle" style={{ "--dx": "-25px", "--dy": "30px" } as React.CSSProperties} />
          <div className="diamond-burst-particle" style={{ "--dx": "30px", "--dy": "35px" } as React.CSSProperties} />
        </div>

        <BreathingDiamond className="mb-fitz-7 scale-125" />
        <h2 className="mx-auto text-foreground">{successTitle}</h2>
        <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">{successMessage}</p>
        <Link
          to={returnPath}
          className="inline-flex items-center mt-fitz-7 text-sm uppercase tracking-[0.16em] story-link"
          style={{ color: "hsl(var(--gold-text))" }}
        >
          ← {returnLabel}
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="p-fitz-6 md:p-fitz-7 rounded-md border border-border/30 bg-card/80 backdrop-blur-sm">
        <form className="space-y-fitz-5" onSubmit={handleSubmit} noValidate>
          {/* Name + Email side by side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-fitz-5">
            <FloatingField
              id="cf-name" label="Name" required
              value={name} onChange={setName}
              touched={touched.name || attempted} valid={!!name.trim()}
              onBlur={() => markTouched("name")}
            />
            <FloatingField
              id="cf-email" label="Email" type="email" required
              value={email} onChange={setEmail}
              touched={touched.email || attempted} valid={emailValid && !!email.trim()}
              onBlur={() => markTouched("email")}
            />
          </div>

          <FloatingField
            id="cf-phone" label="Phone" type="tel"
            value={phone} onChange={setPhone}
            touched={false} valid={false}
          />

          {/* Message with character counter */}
          <div className="relative">
            <textarea
              id="cf-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, MAX_MSG))}
              placeholder=" "
              maxLength={MAX_MSG}
              onBlur={() => markTouched("message")}
              className={`peer w-full bg-transparent border-b ${
                (touched.message || attempted) && !message.trim() ? "border-destructive" : "border-border"
              } pt-5 pb-2 text-foreground transition-colors duration-200 focus:border-accent focus:outline-none resize-none`}
            />
            <label
              htmlFor="cf-message"
              className="pointer-events-none absolute left-0 top-5 text-sm text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0.5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.2em]"
            >
              Message *
            </label>
            <div className="flex justify-between items-center mt-1">
              {(touched.message || attempted) && !message.trim() ? (
                <p className="text-[10px] text-destructive tracking-wide">Required</p>
              ) : <span />}
              <p className={`text-[10px] tracking-wide ${
                message.length > 900 ? "text-accent" : "text-muted-foreground"
              }`}>
                {message.length} / {MAX_MSG}
              </p>
            </div>
          </div>

          <div className="pt-fitz-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-sm text-sm uppercase tracking-[0.12em] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_24px_hsl(var(--sage-deep)/0.2)] active:translate-y-0 active:shadow-[0_2px_8px_hsl(var(--sage-deep)/0.1)]"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending…
                </span>
              ) : ctaLabel}
            </button>
          </div>
        </form>
      </div>

      <RevealOnScroll delay={200}>
        <div className="flex justify-center gap-fitz-7 mt-fitz-7 text-center">
          {[
            { stat: "< 24hr", label: "Response time" },
            { stat: "100%", label: "Reply rate" },
            { stat: "Free", label: "Initial consultation" },
          ].map((s, i) => (
            <div key={s.label} className={`${i < 2 ? "pr-fitz-7 border-r border-accent/20" : ""}`}>
              <p className="font-display text-xl" style={{ color: "hsl(var(--gold-text))" }}>{s.stat}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.1em] mt-1 font-sans">{s.label}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}
