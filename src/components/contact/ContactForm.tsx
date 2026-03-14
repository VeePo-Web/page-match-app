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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  const labelClass = "block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-fitz-2 font-sans";
  const inputClass = "w-full bg-transparent input-gold-focus py-fitz-3 text-foreground";

  return (
    <div className="max-w-xl mx-auto">
      <div className="p-fitz-6 md:p-fitz-7 rounded-md border border-lines/30 bg-card/80 backdrop-blur-sm">
        <form className="space-y-fitz-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cf-name" className={labelClass}>Name *</label>
            <input id="cf-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="cf-email" className={labelClass}>Email *</label>
            <input id="cf-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="cf-phone" className={labelClass}>Phone</label>
            <input id="cf-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="cf-message" className={labelClass}>Message *</label>
            <textarea id="cf-message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClass} resize-none`} />
          </div>
          <div className="pt-fitz-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em] disabled:opacity-60 disabled:cursor-not-allowed"
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
