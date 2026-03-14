import BranchDecoration from "./BranchDecoration";
import ScrollReveal from "./ScrollReveal";

const StorySection = () => {
  return (
    <section className="bg-wedding-cream py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Decoration */}
        <ScrollReveal className="flex justify-center mb-12">
          <BranchDecoration />
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif-wedding text-4xl md:text-5xl text-wedding-text text-center mb-12">
            Our Story
          </h2>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <p className="font-sans-wedding text-wedding-text-light leading-relaxed">
                We met in the summer of 2018 at a friend's gathering in Los Angeles. It was one of those 
                easy conversations that just kept going—about places we'd been, things we wanted to do, 
                and the kind of life we hoped to build.
              </p>
              <p className="font-sans-wedding text-wedding-text-light leading-relaxed">
                Our first real date was at a small café in Silver Lake. We stayed for hours. That 
                afternoon set the tone for everything that followed—quiet mornings, long walks, 
                and a growing sense that we'd found something worth holding onto.
              </p>
              <p className="font-sans-wedding text-wedding-text-light leading-relaxed">
                Over the years, we've traveled, adopted our dog Luna, and built a home together. 
                In the fall of 2024, on a quiet evening in Joshua Tree—a place that's always felt 
                like ours—Andres asked, and Alicia said yes.
              </p>
              <p className="font-sans-wedding text-wedding-text font-medium">
                Now we're ready to gather the people we love and begin what comes next.
              </p>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
                alt="Alicia and Andres"
                className="w-full h-[500px] object-cover rounded-sm shadow-lg"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="mt-20 max-w-4xl mx-auto">
          <ScrollReveal delay={0.4}>
            <h3 className="font-serif-wedding text-2xl md:text-3xl text-wedding-text text-center mb-12">
              Our Journey Together
            </h3>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <ScrollReveal delay={0.5}>
              <div className="p-6">
                <p className="font-serif-wedding text-3xl text-wedding-sage mb-2">2018</p>
                <p className="font-sans-wedding text-sm text-wedding-text-light">We Met</p>
                <p className="font-sans-wedding text-xs text-wedding-text-light mt-2">
                  A rooftop party in LA changed everything
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <div className="p-6">
                <p className="font-serif-wedding text-3xl text-wedding-sage mb-2">2019</p>
                <p className="font-sans-wedding text-sm text-wedding-text-light">First Trip</p>
                <p className="font-sans-wedding text-xs text-wedding-text-light mt-2">
                  Joshua Tree camping under the stars
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.7}>
              <div className="p-6">
                <p className="font-serif-wedding text-3xl text-wedding-sage mb-2">2021</p>
                <p className="font-sans-wedding text-sm text-wedding-text-light">Moved In Together</p>
                <p className="font-sans-wedding text-xs text-wedding-text-light mt-2">
                  Our little home in Venice Beach
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.8}>
              <div className="p-6">
                <p className="font-serif-wedding text-3xl text-wedding-sage mb-2">2024</p>
                <p className="font-sans-wedding text-sm text-wedding-text-light">The Proposal</p>
                <p className="font-sans-wedding text-xs text-wedding-text-light mt-2">
                  He asked, she said yes!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
