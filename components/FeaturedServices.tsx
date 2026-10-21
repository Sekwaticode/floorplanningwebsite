import { FC } from "react";
import Link from "next/link";
import { Grid2x2, Hammer, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import FoldHeading from "@/components/FoldHeading";
import SurfaceSwatch, { SurfaceVariant } from "@/components/SurfaceSwatch";

/** Texture across the card, fading out behind the text at the bottom. */
const background = (variant: SurfaceVariant) => (
  <div className="absolute inset-0">
    <SurfaceSwatch
      variant={variant}
      className="size-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-stone-100 from-30% via-stone-100/80 via-50% to-transparent" />
  </div>
);

const features = [
  {
    Icon: Layers,
    name: "Epoxy & Resin Flooring",
    description:
      "Durable, seamless and chemical-resistant systems for warehouses, factories and workshops.",
    href: "/services",
    cta: "Learn more",
    background: background("epoxy"),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4",
  },
  {
    Icon: Sparkles,
    name: "Polished Concrete",
    description: "Durable, low-maintenance and modern finishes.",
    href: "/services",
    cta: "Learn more",
    background: background("concrete"),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: ShieldCheck,
    name: "PU Flooring",
    description: "High-performance floors for demanding environments.",
    href: "/services",
    cta: "Learn more",
    background: background("pu"),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Grid2x2,
    name: "Terrazzo",
    description: "Decorative and architectural surface finishing.",
    href: "/services",
    cta: "Learn more",
    background: background("terrazzo"),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Hammer,
    name: "Repairs & Refurbishment",
    description:
      "Restoring damaged and worn surfaces, then re-sealing to keep them looking their best.",
    href: "/contact",
    cta: "Request a quote",
    background: background("repair"),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
  },
];

const FeaturedServices: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            <FoldHeading text="What we do" />
          </h2>
          <Link
            href="/services"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide"
          >
            All services
            <svg viewBox="0 0 24 24" className="size-[18px] transition-transform duration-300 group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </Link>
        </div>

        <BentoGrid className="mt-10 md:mt-16 lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default FeaturedServices;
