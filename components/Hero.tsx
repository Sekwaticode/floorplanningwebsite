import { FC } from "react";
import Button from "@/components/Button";
import { WorkPageHero } from "@/components/ui/work-page-hero";
import { site } from "@/lib/site";

const finishes = [
  { value: "01", label: "Epoxy" },
  { value: "02", label: "PU" },
  { value: "03", label: "Polished concrete" },
  { value: "04", label: "Terrazzo" },
  { value: "05", label: "Decorative" },
];

const Hero: FC = () => {
  return (
    <div id="home">
      <WorkPageHero
        imageSrc="/images/hero-epoxy-floor.jpg"
        imageAlt="Installer rolling a glossy self-levelling epoxy floor coating"
        topWord="floors"
        rightWord="built to"
        bottomWord="perform"
        accentColor="#f2b705"
        textColor="#f5f5f4"
        backgroundColor="#0c0a09"
        details={finishes}
      />

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-600">
            {site.tagline}
          </p>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter max-w-[13ch]">
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
      </section>
    </div>
  );
};

export default Hero;
