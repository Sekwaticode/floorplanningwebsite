import { FC } from "react";
import Button from "@/components/Button";
import FoldHeading from "@/components/FoldHeading";
import HazardStripe from "@/components/HazardStripe";
import { site } from "@/lib/site";

const Contact: FC = () => {
  return (
    <section id="contact" className="bg-hazard">
      <HazardStripe />
      <div className="container py-24 md:py-32 lg:py-40">
        <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.92] tracking-tighter max-w-[12ch]">
          <FoldHeading text="Let's Transform Your Floor" />
        </h2>
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-10 md:gap-16 items-end">
          <p className="text-lg md:text-xl max-w-[48ch]">
            Whether you need a durable industrial floor, a sophisticated
            commercial finish or specialised protection for an existing
            surface, our team can help you identify the right flooring
            solution.
          </p>
          <div className="md:justify-self-end">
            <p className="text-sm font-semibold uppercase tracking-[0.14em]">
              Request a site assessment or quote today
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={`mailto:${site.email}?subject=Site%20assessment%20request`}>
                Email {site.email}
              </Button>
              <Button href={`tel:${site.phone.replace(/\s/g, "")}`} variant="secondary">
                Call {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
