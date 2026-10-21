import { FC } from "react";
import Link from "next/link";
import FoldHeading from "@/components/FoldHeading";
import SurfaceSwatch from "@/components/SurfaceSwatch";
import { services } from "@/lib/content";

type ServicesGridProps = {
  title?: string;
  /** Show only the first `limit` services */
  limit?: number;
};

/** Compact card grid of services, linking through to the full services page. */
const ServicesGrid: FC<ServicesGridProps> = ({
  title = "What we do",
  limit = services.length,
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            <FoldHeading text={title} />
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

        <ul className="mt-10 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.slice(0, limit).map(({ title, description, surface }) => (
            <li key={title}>
              <Link
                href="/services"
                className="group flex h-full flex-col rounded-[20px] border border-stone-300 bg-stone-100 p-2.5 transition-colors duration-300 hover:border-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hazard"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[14px]">
                  <SurfaceSwatch
                    variant={surface}
                    className="size-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="px-3 pt-5 pb-3">
                  <h3 className="text-xl font-bold leading-tight tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-[15px] text-stone-600">{description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesGrid;
