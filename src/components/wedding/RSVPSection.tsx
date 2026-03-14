import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ScrollReveal from "./ScrollReveal";
import BranchDecoration from "./BranchDecoration";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const rsvpSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .max(20, "Phone must be less than 20 characters")
    .optional()
    .or(z.literal("")),
  attending: z.enum(["accept", "decline"], {
    required_error: "Please let us know if you'll be attending",
  }),
  message: z
    .string()
    .trim()
    .max(1000, "Message must be less than 1000 characters")
    .optional()
    .or(z.literal("")),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

const RSVPSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      attending: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (data.attending === "accept") {
      toast.success("Thank you for your RSVP!", {
        description: "We can't wait to celebrate with you.",
      });
    } else {
      toast.success("Thank you for letting us know", {
        description: "We'll miss you, but appreciate your response.",
      });
    }
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="bg-wedding-cream py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Decoration */}
        <ScrollReveal className="flex justify-center mb-12">
          <BranchDecoration />
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif-wedding text-4xl md:text-5xl text-wedding-text text-center mb-4">
            Join Us
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-sans-wedding text-wedding-text-light text-center max-w-xl mx-auto mb-4 leading-relaxed">
            We'd love to have you there. Let us know if you can make it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-serif-wedding text-lg text-wedding-sage text-center mb-12">
            <span className="italic">Please RSVP by</span>{" "}
            <span className="font-semibold">January 15, 2025</span>
          </p>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans-wedding text-wedding-sage">
                          First Name <span className="text-wedding-sage">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white border-wedding-sage/30 focus:border-wedding-sage focus:ring-wedding-sage/20 font-sans-wedding"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage className="font-sans-wedding text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans-wedding text-wedding-sage">
                          Last Name <span className="text-wedding-sage">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white border-wedding-sage/30 focus:border-wedding-sage focus:ring-wedding-sage/20 font-sans-wedding"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage className="font-sans-wedding text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans-wedding text-wedding-sage">
                          Email <span className="text-wedding-sage">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="bg-white border-wedding-sage/30 focus:border-wedding-sage focus:ring-wedding-sage/20 font-sans-wedding"
                            placeholder=""
                          />
                        </FormControl>
                        <FormMessage className="font-sans-wedding text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans-wedding text-wedding-sage">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            className="bg-white border-wedding-sage/30 focus:border-wedding-sage focus:ring-wedding-sage/20 font-sans-wedding"
                            placeholder="(555) 555-5555"
                          />
                        </FormControl>
                        <FormMessage className="font-sans-wedding text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Attendance */}
                <FormField
                  control={form.control}
                  name="attending"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans-wedding text-wedding-sage">
                        Will you be attending? <span className="text-wedding-sage">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-wrap gap-6 mt-3"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="accept"
                              id="accept"
                              className="border-wedding-sage text-wedding-sage"
                            />
                            <Label
                              htmlFor="accept"
                              className="font-sans-wedding text-wedding-sage cursor-pointer"
                            >
                              Joyfully Accept
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="decline"
                              id="decline"
                              className="border-wedding-sage text-wedding-sage"
                            />
                            <Label
                              htmlFor="decline"
                              className="font-sans-wedding text-wedding-sage cursor-pointer"
                            >
                              Regretfully Decline
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage className="font-sans-wedding text-sm" />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans-wedding text-wedding-sage">
                        Message for the Couple (optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="bg-white border-wedding-sage/30 focus:border-wedding-sage focus:ring-wedding-sage/20 font-sans-wedding min-h-[120px] resize-none"
                          placeholder="Share your well wishes..."
                        />
                      </FormControl>
                      <FormMessage className="font-sans-wedding text-sm" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block border-2 border-wedding-sage text-wedding-sage font-sans-wedding text-sm tracking-widest uppercase px-12 py-4 hover:bg-wedding-sage hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit RSVP"}
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </ScrollReveal>

        {/* Contact Note */}
        <ScrollReveal delay={0.5}>
          <p className="font-sans-wedding text-xs text-wedding-text-light text-center mt-12">
            Questions? Reach out at{" "}
            <a
              href="mailto:sales@hickoryandrose.com"
              className="text-wedding-teal hover:underline"
            >
              sales@hickoryandrose.com
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RSVPSection;
