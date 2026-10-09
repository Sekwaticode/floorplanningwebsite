import { FC } from "react";
import Button from "@/components/Button";
import SurfaceSwatch, { SurfaceVariant } from "@/components/SurfaceSwatch";
import { site } from "@/lib/site";

const sampler: { variant: SurfaceVariant; label: string }[] = [
  { variant: "epoxy", label: "Epoxy" },
  { variant: "terrazzo", label: "Terrazzo" },
  { variant: "concrete", label: "Polished concrete" },
  { variant: "metallic", label: "Decorative" },
  { variant: "pu", label: "PU" },
];

const Hero: FC = () => {
  return (
    <section id="home" className="min-h-svh flex flex-col pt-32 md:pt-40">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-600">
          {site.tagline}
        </p>
        <h1 className="mt-6 text-5xl md:text-8xl lg:text-[8.5rem] font-bold leading-[0.95] tracking-tighter max-w-[11ch]">
          Professional Floors. Built to Perform.
        </h1>
        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="text-lg md:text-xl text-stone-600 max-w-[46ch]">
            High-performance flooring systems for commercial, industrial,
            hospitality, healthcare, retail and residential environments
            across South Africa.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#contact">Request a Quote</Button>
            <Button href="#services" variant="secondary">
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Strip of finishes, like a sample board */}
      <ul className="mt-16 md:mt-20 grid grid-cols-5 flex-1 min-h-56">
        {sampler.map(({ variant, label }) => (
          <li key={variant} className="relative group overflow-hidden">
            <SurfaceSwatch
              variant={variant}
              className="absolute inset-0 size-full transition-transform duration-1000 group-hover:scale-105"
            />
            <span className="absolute left-3 bottom-3 md:left-5 md:bottom-5 rounded-full bg-stone-950 px-3 py-1 text-[11px] md:text-xs font-semibold text-stone-100 max-md:hidden">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
