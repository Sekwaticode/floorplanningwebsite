import { FC } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/lib/content";

const Testimonials: FC = () => (
  <AnimatedTestimonials
    badgeText="Client feedback"
    title="Floors our clients rely on"
    subtitle="From warehouses to homes, here's what clients say about working with us, from the first site assessment to the final finish."
    testimonials={testimonials}
  />
);

export default Testimonials;
