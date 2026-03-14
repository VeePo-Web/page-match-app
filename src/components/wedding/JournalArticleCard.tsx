import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";

interface Article {
  image: string;
  alt: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  pullQuote: string;
}

interface JournalArticleCardProps {
  article: Article;
  index: number;
}

const JournalArticleCard = ({ article, index }: JournalArticleCardProps) => (
  <ScrollReveal key={article.title} delay={index * 0.08}>
    <article className="group cursor-pointer">
      <ImageReveal direction={index % 2 === 0 ? "up" : "left"} delay={index * 0.04}>
        <div className="aspect-[4/5] overflow-hidden relative">
          {/* Cinematic letterbox bars — slide inward on hover */}
          <div
            className="absolute top-0 left-0 right-0 z-20 h-[6%] bg-foreground/90 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none"
          />
          <div
            className="absolute bottom-0 left-0 right-0 z-20 h-[6%] bg-foreground/90 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none"
          />

          {/* Gold shimmer sweep on hover */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/0 group-hover:border-white/15 transition-colors duration-500" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/0 group-hover:border-white/15 transition-colors duration-500" />
          <div className="absolute top-4 left-4 z-20">
            <span
              className="font-sans-wedding text-caption tracking-[0.18em] uppercase text-white/80 backdrop-blur-sm px-2.5 py-1"
              style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.25), hsl(var(--primary) / 0.2))" }}
            >
              {article.category}
            </span>
          </div>
          {/* Hover reveal */}
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
            <p className="font-serif-wedding text-xs italic text-white/40 mb-1">
              "{article.pullQuote}"
            </p>
          </div>
          {/* Reading-time circular indicator */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <div className="relative w-8 h-8 flex items-center justify-center">
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
        </div>
      </ImageReveal>

      {/* Staggered metadata reveal on hover */}
      <div className="mt-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-sans-wedding text-caption tracking-[0.12em] uppercase text-primary/60 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {article.category}
          </span>
          <span className="w-3 h-px bg-border/40 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75" />
          <span className="font-sans-wedding text-caption tracking-[0.08em] text-muted-foreground/60 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
            {article.readTime}
          </span>
        </div>
        <h3 className="font-serif-wedding text-display-sm text-foreground group-hover:text-primary transition-colors duration-500 mb-2 leading-tight relative">
          {article.title}
          <span
            className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 ease-out"
            style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.1), transparent)" }}
          />
        </h3>
        <p className="font-sans-wedding text-body-sm text-muted-foreground/60 font-light leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-sans-wedding text-caption tracking-[0.12em] uppercase text-muted-foreground/60 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-150">
            {article.date}
          </span>
          <span className="font-sans-wedding text-caption tracking-[0.1em] uppercase text-muted-foreground/0 group-hover:text-muted-foreground/60 transition-all duration-500 translate-x-2 group-hover:translate-x-0 delay-200">
            Read →
          </span>
        </div>
      </div>
    </article>
  </ScrollReveal>
);

export default JournalArticleCard;
export type { Article };
