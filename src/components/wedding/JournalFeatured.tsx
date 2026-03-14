import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import type { Article } from "./JournalArticleCard";

interface JournalFeaturedProps {
  article: Article & { image: string };
}

const JournalFeatured = ({ article }: JournalFeaturedProps) => (
  <section className="py-section-mobile md:py-section-tablet bg-card">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ImageReveal direction="left">
            <div className="aspect-[4/5] overflow-hidden relative group">
              {/* Cinematic letterbox bars */}
              <div
                className="absolute top-0 left-0 right-0 z-20 h-[6%] bg-foreground/90 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none"
              />
              <div
                className="absolute bottom-0 left-0 right-0 z-20 h-[6%] bg-foreground/90 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none"
              />

              {/* Gold shimmer sweep */}
              <div
                className="absolute inset-0 z-10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent 0%, hsl(var(--gold) / 0.08) 40%, hsl(var(--gold) / 0.12) 50%, hsl(var(--gold) / 0.08) 60%, transparent 100%)" }}
              />

              <img
                src={article.image}
                alt={article.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 left-4 z-20">
                <span
                  className="font-sans-wedding text-caption tracking-[0.18em] uppercase text-white/80 backdrop-blur-sm px-3 py-1.5"
                  style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.3), hsl(var(--primary) / 0.2))" }}
                >
                  Featured
                </span>
              </div>

              {/* Reading-time circular indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="relative w-9 h-9 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="14" fill="none" stroke="hsl(var(--gold) / 0.1)" strokeWidth="1" />
                    <circle
                      cx="16" cy="16" r="14" fill="none"
                      stroke="hsl(var(--gold) / 0.5)"
                      strokeWidth="1"
                      strokeDasharray={`${88 * (parseInt(article.readTime) / 10)} 88`}
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-out"
                      style={{ filter: "drop-shadow(0 0 3px hsl(var(--gold) / 0.3))" }}
                    />
                  </svg>
                  <span className="absolute font-sans-wedding text-caption text-white/60 tabular-nums font-light">
                    {article.readTime.replace(" read", "").replace(" min", "")}
                  </span>
                </div>
              </div>

              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-white/0 group-hover:border-white/15 transition-colors duration-500" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-white/0 group-hover:border-white/15 transition-colors duration-500" />
            </div>
          </ImageReveal>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans-wedding text-caption tracking-[0.15em] uppercase text-primary/60">
                {article.category}
              </span>
              <span className="w-4 h-px bg-border/40" />
              <span className="font-sans-wedding text-caption tracking-[0.08em] text-muted-foreground/60">
                {article.readTime}
              </span>
            </div>
            <h2 className="font-serif-wedding text-display-lg text-foreground mb-4 leading-tight">
              {article.title}
            </h2>
            <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light mb-6">
              {article.excerpt}
            </p>
            {/* Pull-quote with gold gradient border */}
            <div
              className="pl-5 mb-8"
              style={{ borderLeft: "2px solid transparent", borderImage: "linear-gradient(180deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.08)) 1" }}
            >
              <p className="font-serif-wedding text-sm italic text-foreground/50 leading-relaxed">
                "{article.pullQuote}"
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-sans-wedding text-caption tracking-[0.12em] uppercase text-muted-foreground/60">
                {article.date}
              </span>
              {/* CTA with gold underline expand */}
              <span className="font-sans-wedding text-xs tracking-[0.1em] uppercase text-primary/50 inline-flex items-center gap-2 group/cta cursor-pointer relative">
                Read Article
                <span className="group-hover/cta:translate-x-1 transition-transform duration-200">→</span>
                <span
                  className="absolute bottom-0 left-0 h-px w-0 group-hover/cta:w-full transition-all duration-700 ease-out"
                  style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.1), transparent)" }}
                />
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default JournalFeatured;
