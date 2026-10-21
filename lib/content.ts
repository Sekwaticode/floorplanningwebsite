import type { SurfaceVariant } from "@/components/SurfaceSwatch";
import type { Testimonial } from "@/components/ui/animated-testimonials";

export const services: {
  title: string;
  description: string;
  tags: string[];
  surface: SurfaceVariant;
  /** Photo for the service card; falls back to the generated surface swatch. */
  image?: string;
}[] = [
  {
    title: "Epoxy & Resin Flooring",
    description: "Durable, seamless and chemical-resistant flooring systems.",
    tags: ["Seamless", "Chemical-resistant", "Durable"],
    surface: "epoxy",
    image: "/images/services-epoxy.jpg",
  },
  {
    title: "PU Flooring",
    description:
      "High-performance solutions for demanding commercial and industrial environments.",
    tags: ["High-performance", "Commercial", "Industrial"],
    surface: "pu",
    image: "/images/services-pu_flooring.jpeg",
  },
  {
    title: "Polished Concrete",
    description: "Durable, low-maintenance and modern finishes.",
    tags: ["Low-maintenance", "Modern finish"],
    surface: "concrete",
    image: "/images/services-polished_concrete.jpg",
  },
  {
    title: "Specialised Floor Sealing",
    description: "Protective sealing for concrete, stone and other surfaces.",
    tags: ["Concrete", "Stone", "Protection"],
    surface: "sealed",
    image: "/images/services-floor_sealing.jpg",
  },
  {
    title: "Decorative Flooring",
    description:
      "Premium finishes designed to enhance commercial and residential spaces.",
    tags: ["Commercial", "Residential", "Premium"],
    surface: "metallic",
    image: "/images/services-decorative_flooring.png",
  },
  {
    title: "Terrazzo & Surface Finishing",
    description: "High-quality decorative and architectural flooring.",
    tags: ["Decorative", "Architectural"],
    surface: "terrazzo",
    image: "/images/services-Terrazzo.jpg",
  },
  {
    title: "Floor Repairs & Refurbishment",
    description: "Restoring damaged and worn surfaces.",
    tags: ["Repairs", "Restoration"],
    surface: "repair",
    image: "/images/services-floor_repairs.jpg",
  },
  {
    title: "Maintenance & Re-sealing",
    description:
      "Helping clients extend the life and appearance of their floors.",
    tags: ["Longevity", "Appearance"],
    surface: "reseal",
    image: "/images/services-resealing.jpg",
  },
];

export const values = [
  "Quality",
  "Safety",
  "Professionalism",
  "Reliability",
  "Technical Excellence",
];

export const valueDetails: Record<(typeof values)[number], string> = {
  Quality:
    "Quality materials and skilled installation, specified for each floor's performance requirements.",
  Safety:
    "Safe working practices on site, and finishes chosen for the safety needs of the space.",
  Professionalism:
    "Clear communication and a tidy, well-managed site from assessment to handover.",
  Reliability:
    "Floors built for long-term performance, backed by maintenance and re-sealing.",
  "Technical Excellence":
    "Proper surface preparation and the right system for the job, every time.",
};

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

// PLACEHOLDER: replace every entry with a real client testimonial (with the
// client's permission) before launch. Add `avatar` only with a real photo.
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Client Name",
    role: "Facilities Manager",
    company: "Client Company",
    content:
      "Sample testimonial: what the client needed, how the project went and how the new floor is performing.",
    rating: 5,
  },
  {
    id: 2,
    name: "Client Name",
    role: "Operations Manager",
    company: "Client Company",
    content:
      "Sample testimonial: replace with a real quote about an epoxy, PU or polished concrete project.",
    rating: 5,
  },
  {
    id: 3,
    name: "Client Name",
    role: "Property Owner",
    company: "Residential Project",
    content:
      "Sample testimonial: replace with a real quote about a repair, refurbishment or re-sealing job.",
    rating: 5,
  },
];


/** Completed jobs shown in the before/after project showcase. */
export const projects: {
  title: string;
  description: string;
  service: string;
  location: string;
  before: string;
  after: string;
  /** Describes the space; "before"/"after" is appended per image. */
  alt: string;
}[] = [
  {
    title: "Parquet to Metallic Marble Epoxy",
    description:
      "Lifted, water-damaged parquet was stripped back, the screed repaired and levelled, then finished in a high-gloss metallic epoxy with gold veining.",
    service: "Decorative Flooring",
    location: "Residential hallway",
    before: "/images/project_A-before.jpg",
    after: "/images/project_A-after.jpg",
    alt: "Hallway floor",
  },
  {
    title: "Bare Concrete to Flake Epoxy",
    description:
      "A stained, unsealed concrete entrance was ground, primed and coated in a seamless flake epoxy system that's easy to clean and built for foot traffic.",
    service: "Epoxy & Resin Flooring",
    location: "Home entrance",
    before: "/images/project_B_before.jpg",
    after: "/images/Project_B_After.jpg",
    alt: "Entrance floor by the front door",
  },
];
