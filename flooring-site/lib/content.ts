import type { SurfaceVariant } from "@/components/SurfaceSwatch";

export const services: {
  title: string;
  description: string;
  tags: string[];
  surface: SurfaceVariant;
}[] = [
  {
    title: "Epoxy & Resin Flooring",
    description: "Durable, seamless and chemical-resistant flooring systems.",
    tags: ["Seamless", "Chemical-resistant", "Durable"],
    surface: "epoxy",
  },
  {
    title: "PU Flooring",
    description:
      "High-performance solutions for demanding commercial and industrial environments.",
    tags: ["High-performance", "Commercial", "Industrial"],
    surface: "pu",
  },
  {
    title: "Polished Concrete",
    description: "Durable, low-maintenance and modern finishes.",
    tags: ["Low-maintenance", "Modern finish"],
    surface: "concrete",
  },
  {
    title: "Specialised Floor Sealing",
    description: "Protective sealing for concrete, stone and other surfaces.",
    tags: ["Concrete", "Stone", "Protection"],
    surface: "sealed",
  },
  {
    title: "Decorative Flooring",
    description:
      "Premium finishes designed to enhance commercial and residential spaces.",
    tags: ["Commercial", "Residential", "Premium"],
    surface: "metallic",
  },
  {
    title: "Terrazzo & Surface Finishing",
    description: "High-quality decorative and architectural flooring.",
    tags: ["Decorative", "Architectural"],
    surface: "terrazzo",
  },
  {
    title: "Floor Repairs & Refurbishment",
    description: "Restoring damaged and worn surfaces.",
    tags: ["Repairs", "Restoration"],
    surface: "repair",
  },
  {
    title: "Maintenance & Re-sealing",
    description:
      "Helping clients extend the life and appearance of their floors.",
    tags: ["Longevity", "Appearance"],
    surface: "reseal",
  },
];

export const values = [
  "Quality",
  "Safety",
  "Professionalism",
  "Reliability",
  "Technical Excellence",
];

export const industries = [
  "Industrial & Manufacturing",
  "Warehouses & Logistics",
  "Hotels & Hospitality",
  "Healthcare Facilities",
  "Offices & Commercial Buildings",
  "Retail & Shopping Centres",
  "Schools & Institutions",
  "Residential Properties",
];

export const processSteps: {
  step: string;
  title: string;
  text: string;
  surface: SurfaceVariant;
}[] = [
  {
    step: "Step 01",
    title: "Assess the surface",
    text: "We assess the existing surface and the conditions it has to perform in, so the system we specify suits the space.",
    surface: "repair",
  },
  {
    step: "Step 02",
    title: "Identify the system",
    text: "We identify the appropriate flooring system for the project's performance requirements, whether that's chemical resistance, heavy traffic or a decorative finish.",
    surface: "concrete",
  },
  {
    step: "Step 03",
    title: "Prepare the substrate",
    text: "A successful flooring system starts with proper preparation. We prepare the substrate correctly before any coating goes down.",
    surface: "sealed",
  },
  {
    step: "Step 04",
    title: "Apply the final finish",
    text: "We apply the required coating or finish according to the project's performance requirements, built for long-term performance.",
    surface: "epoxy",
  },
];

export const faqs = [
  {
    question: "Which flooring system is right for my space?",
    answer:
      "It depends on how the floor will be used: traffic, chemicals, hygiene requirements and the look you want. We assess the surface and recommend the system that fits the project's performance requirements.",
  },
  {
    question: "Why is surface preparation so important?",
    answer:
      "A flooring system is only as good as the surface beneath it. Correct substrate preparation helps the coating or finish bond properly and perform over the long term.",
  },
  {
    question: "Can you repair or refurbish an existing floor?",
    answer:
      "Yes. We restore damaged and worn surfaces, and offer maintenance and re-sealing to extend the life and appearance of existing floors.",
  },
  {
    question: "Do you work on residential properties?",
    answer:
      "Yes. Alongside commercial, industrial, hospitality, healthcare and retail projects, we install decorative and protective flooring for residential properties.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Get in touch to request a site assessment. We'll look at the existing surface, discuss your requirements and provide a quote for the right flooring solution.",
  },
];
