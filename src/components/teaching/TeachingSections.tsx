import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { SectionDivider } from "@/components/SectionDivider";
import { Link } from "react-router-dom";
import teachingLanguageBg from "@/assets/teaching-language-bg.jpg";
import teachingPillarsBg from "@/assets/teaching-pillars-bg.jpg";
import teachingMethodologyBg from "@/assets/teaching-methodology-bg.jpg";
import teachingThresholdBg from "@/assets/teaching-threshold-bg.jpg";
import teachingCrossingBg from "@/assets/teaching-crossing-bg.jpg";

export default function TeachingSections() {
  return (
    <>
      {/* The Language */}
      <Section id="exhale" backgroundImage={teachingLanguageBg}>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <p className="overline mb-fitz-3">The Approach</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <h2 className="mx-auto">Music is not a skill. It is a language.</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              I teach piano the way I play it — with intention, patience, and deep respect for the student's own musical voice. Whether you're a complete beginner or a returning player, my lessons are built around who you are and what you want to say through music.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={360}>
            <BreathingDiamond className="mt-fitz-7" />
          </RevealOnScroll>
        </div>
      </Section>

      {/* Three Pillars */}
      <Section dark id="pillars" backgroundImage={teachingPillarsBg}>
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <p className="overline mb-fitz-3">Three Pillars</p>
            <h2 className="mx-auto">Technique. Expression. Devotion.</h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-fitz-6 mt-fitz-9">
            {[
              { title: "Technique", desc: "Strong foundations — posture, fingering, sight-reading, theory. The craft that supports the art." },
              { title: "Expression", desc: "Dynamics, phrasing, emotional interpretation. Learning to make the piano sing, not just sound." },
              { title: "Devotion", desc: "Consistent practice habits, performance confidence, and the patience to grow at your own pace." },
            ].map((pillar, i) => (
              <RevealOnScroll key={pillar.title} delay={i * 100}>
                <div className="p-fitz-6 rounded-md text-left" style={{ borderLeft: "2px solid hsl(var(--gold) / 0.3)" }}>
                  <h3 className="text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground mt-fitz-3 text-sm leading-relaxed font-light">{pillar.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* Methodology */}
      <Section id="methodology" backgroundImage={teachingMethodologyBg}>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <p className="overline mb-fitz-3">How It Works</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <h2 className="mx-auto">Every lesson is a conversation.</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              We begin with a conversation — not about music theory, but about you. What draws you to the piano? What do you hope to express? From there, I build a curriculum that balances technical growth with the joy of playing music that matters to you.
            </p>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Threshold */}
      <Section dark id="threshold" backgroundImage={teachingThresholdBg}>
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <p className="overline mb-fitz-3 text-center">Common Concerns</p>
            <h2 className="mx-auto text-center">You might be wondering.</h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-fitz-6 mt-fitz-9">
            {[
              { q: "Am I too old to start?", a: "There is no age limit on self-expression. Some of my most devoted students began in their 40s, 50s, and 60s." },
              { q: "I tried before and quit.", a: "That's not a failure — it's information. We'll find the approach that makes you want to keep coming back." },
              { q: "How long before I can play something real?", a: "Most students play recognizable pieces within the first month. Beautiful ones within three." },
              { q: "Do I need a piano at home?", a: "A keyboard with weighted keys is ideal. I can recommend affordable options that sound beautiful." },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="p-fitz-6 rounded-md" style={{ borderLeft: "2px solid hsl(var(--gold) / 0.3)" }}>
                  <p className="font-display text-lg italic mb-fitz-3" style={{ color: "hsl(var(--gold))" }}>"{item.q}"</p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* Offering */}
      <Section id="offering">
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <p className="overline mb-fitz-3">Investment</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <h2 className="mx-auto">$60 per hour.</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              Weekly lessons in Calgary. All ages, all levels. Each session is tailored to your goals and progress.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={360}>
            <Link to="/teaching/pricing" className="inline-flex items-center mt-fitz-5 text-sm tracking-[0.16em] uppercase text-sage story-link">
              View what's included
            </Link>
          </RevealOnScroll>
        </div>
      </Section>

      <SectionDivider />

      {/* Other Services */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <p className="overline mb-fitz-3">Other Services</p>
          </RevealOnScroll>
          <div className="flex justify-center gap-fitz-7 mt-fitz-5">
            <RevealOnScroll delay={100}>
              <Link to="/weddings" className="text-sm tracking-[0.16em] uppercase text-sage story-link">Weddings</Link>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <Link to="/events" className="text-sm tracking-[0.16em] uppercase text-sage story-link">Events</Link>
            </RevealOnScroll>
          </div>
        </div>
      </Section>

      {/* The Crossing */}
      <Section dark id="crossing" backgroundImage={teachingCrossingBg}>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <BreathingDiamond className="mb-fitz-5" />
          </RevealOnScroll>
          <RevealOnScroll>
            <h2 className="mx-auto">Ready to begin?</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">Every musician starts with a single note.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <Link
              to="/teaching/contact"
              className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-gold text-sage-deep rounded-sm shadow-cta hover:shadow-cta-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]"
            >
              Begin the Conversation.
            </Link>
          </RevealOnScroll>
        </div>
      </Section>
    </>
  );
}
