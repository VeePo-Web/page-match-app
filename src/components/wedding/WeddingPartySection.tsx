import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollReveal from "./ScrollReveal";

const groomsmen = [
  { name: "Julian Bernard", role: "Best Man", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400", description: "Andres' college roommate and best friend since freshman year" },
  { name: "Damien Huber", role: "Groomsman", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400", description: "Childhood friend and surfing buddy" },
  { name: "Mark Pavone", role: "Groomsman", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400", description: "Brother-in-law and hiking partner" },
  { name: "David Blaine", role: "Groomsman", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400", description: "Work colleague turned lifelong friend" },
];

const bridesmaids = [
  { name: "Sarah Mitchell", role: "Maid of Honor", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400", description: "Alicia's sister and partner in crime since birth" },
  { name: "Emma Rodriguez", role: "Bridesmaid", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400", description: "College bestie and travel companion" },
  { name: "Olivia Chen", role: "Bridesmaid", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400", description: "Yoga instructor and soul sister" },
  { name: "Maya Thompson", role: "Bridesmaid", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400", description: "Neighbor turned family" },
];

const WeddingPartySection = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Label */}
        <ScrollReveal>
          <p className="font-sans-wedding text-sm tracking-widest uppercase text-wedding-text-light text-center mb-4">
            The People We Love
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif-wedding text-4xl md:text-5xl text-wedding-text text-center mb-4">
            Our Wedding Party
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-sans-wedding text-wedding-text-light text-center max-w-2xl mx-auto mb-12">
            We are so grateful to have these amazing people standing by our side as we say "I do."
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <Tabs defaultValue="groomsmen" className="w-full max-w-5xl mx-auto">
          <ScrollReveal delay={0.3}>
            <TabsList className="flex w-full max-w-sm mx-auto bg-transparent border-b border-wedding-sage/30 mb-12 p-0 h-auto rounded-none">
              <TabsTrigger
                value="groomsmen"
                className="flex-1 font-serif-wedding text-lg py-4 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-wedding-sage data-[state=active]:bg-transparent bg-transparent text-wedding-text-light data-[state=active]:text-wedding-text data-[state=active]:shadow-none transition-all"
              >
                Groomsmen
              </TabsTrigger>
              <TabsTrigger
                value="bridesmaids"
                className="flex-1 font-serif-wedding text-lg py-4 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-wedding-sage data-[state=active]:bg-transparent bg-transparent text-wedding-text-light data-[state=active]:text-wedding-text data-[state=active]:shadow-none transition-all"
              >
                Bridesmaids
              </TabsTrigger>
            </TabsList>
          </ScrollReveal>

          <TabsContent value="groomsmen">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {groomsmen.map((person, index) => (
                <ScrollReveal key={person.name} delay={0.1 * index}>
                  <div className="text-center group">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 overflow-hidden rounded-full border-4 border-wedding-cream group-hover:border-wedding-sage transition-colors duration-300">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif-wedding text-lg text-wedding-text">{person.name}</h3>
                    <p className="font-sans-wedding text-sm text-wedding-teal font-medium">{person.role}</p>
                    <p className="font-sans-wedding text-xs text-wedding-text-light mt-2 px-2">{person.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bridesmaids">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {bridesmaids.map((person, index) => (
                <ScrollReveal key={person.name} delay={0.1 * index}>
                  <div className="text-center group">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 overflow-hidden rounded-full border-4 border-wedding-cream group-hover:border-wedding-sage transition-colors duration-300">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif-wedding text-lg text-wedding-text">{person.name}</h3>
                    <p className="font-sans-wedding text-sm text-wedding-teal font-medium">{person.role}</p>
                    <p className="font-sans-wedding text-xs text-wedding-text-light mt-2 px-2">{person.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WeddingPartySection;
