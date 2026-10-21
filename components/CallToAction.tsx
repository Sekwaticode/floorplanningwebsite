import { FC } from "react";
import FoldHeading from "@/components/FoldHeading";
import HazardStripe from "@/components/HazardStripe";
import { QuoteForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

type CallToActionProps = {
  title?: string;
  text?: string;
};

/** Yellow quote section that closes each page, with the quote form built in. */
const CallToAction: FC<CallToActionProps> = ({
  title = "Ready for a floor that performs?",
  text = "Request a site assessment and we'll recommend the right flooring system for your space.",
}) => {
  return (
    <section id="quote" className="bg-hazard">
      <HazardStripe />
      <div className="container py-16 md:py-24 grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] gap-10 lg:gap-16 lg:items-start">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tighter max-w-[16ch]">
            <FoldHeading text={title} />
          </h2>
          <p className="mt-5 text-lg max-w-[44ch]">{text}</p>
          <dl className="mt-10 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.14em]">Email</dt>
              <dd className="mt-1 text-xl">
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.14em]">Phone</dt>
              <dd className="mt-1 text-xl">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <QuoteForm className="bg-stone-100 shadow-[0_10px_30px_rgb(0_0_0/0.08)]" />
      </div>
    </section>
  );
};

export default CallToAction;
