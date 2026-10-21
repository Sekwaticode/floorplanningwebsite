import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import FoldHeading from "@/components/FoldHeading";
import ImageCompare from "@/components/ui/image-compare";
import { projects } from "@/lib/content";

const pad = (n: number) => String(n).padStart(2, "0");

/** Completed surfacing jobs, each with a draggable before/after slider. */
const Projects: FC = () => {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-stone-100 py-1.5 pl-1.5 pr-4 text-[15px] font-medium">
              <span className="grid size-[26px] place-items-center rounded-full bg-hazard">
                <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v18M5 8l-3 4 3 4M19 8l3 4-3 4" />
                </svg>
              </span>
              Our Projects
            </span>
            <h2
              id="projects-title"
              className="mt-5 text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.06] tracking-tight max-w-[14ch]"
            >
              <FoldHeading text="Worn floors, resurfaced." />
            </h2>
          </div>
          <p className="text-[17px] text-stone-600 max-w-[40ch]">
            Real jobs from our crews. Drag the slider to see each floor before
            preparation and after the final coat cured.
          </p>
        </div>

        <ul className="mt-10 md:mt-14 grid md:grid-cols-2 gap-4 md:gap-6">
          {projects.map(
            ({ title, description, service, location, before, after, alt }, i) => (
              <li
                key={title}
                className="flex flex-col rounded-[20px] bg-stone-100 p-2 shadow-[0_1px_2px_rgb(0_0_0/0.04)]"
              >
                <ImageCompare
                  className="rounded-[14px] bg-stone-300"
                  aspectRatio="4 / 3"
                  label={`${title}, before and after`}
                  before={
                    <Image
                      src={before}
                      alt={`${alt} before resurfacing`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  }
                  after={
                    <Image
                      src={after}
                      alt={`${alt} after resurfacing`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  }
                />
                <div className="flex flex-1 flex-col px-3 pt-6 pb-3 md:px-4">
                  <div className="flex flex-wrap items-center gap-2 text-[13px] text-stone-600">
                    <span className="font-semibold tabular-nums text-stone-900">
                      {pad(i + 1)}
                    </span>
                    <span className="rounded-full border border-stone-300 px-3 py-1">
                      {service}
                    </span>
                    <span className="rounded-full border border-stone-300 px-3 py-1">
                      {location}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl md:text-[1.75rem] font-bold leading-tight tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-stone-600 max-w-[52ch]">
                    {description}
                  </p>
                  <Link
                    href="/services"
                    className="group/link mt-6 self-end inline-flex items-center gap-1.5 text-[15px] font-medium text-emerald-800"
                  >
                    Explore Service
                    <svg viewBox="0 0 24 24" className="size-[18px] transition-transform duration-300 group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                    <span className="sr-only">: {service}</span>
                  </Link>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
