"use client";

import { FC, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Button from "@/components/Button";
import SurfaceSwatch from "@/components/SurfaceSwatch";
import { services } from "@/lib/content";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Sticky scroll showcase: the left column holds still while the service
 * cards scroll past on the right, with a progress bar tracking the section.
 */
const Services: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // the active card is the last one whose top has crossed the viewport middle
  useMotionValueEvent(scrollYProgress, "change", () => {
    const middle = window.innerHeight / 2;
    let current = 0;
    cardRefs.current.forEach((card, i) => {
      if (card && card.getBoundingClientRect().top < middle) current = i;
    });
    setActive(current);
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      aria-labelledby="services-title"
      className="container grid lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-14"
    >
      {/* LEFT: sticky column */}
      <div className="relative">
        <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center items-start pt-16 pb-2 lg:pt-24 lg:pb-10">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-stone-100 py-1.5 pl-1.5 pr-4 text-[15px] font-medium">
            <span className="grid size-[26px] place-items-center rounded-full bg-hazard">
              <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
              </svg>
            </span>
            Our Services
          </span>

          <h2
            id="services-title"
            className="mt-5 text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.06] tracking-tight max-w-[12ch]"
          >
            Flooring systems for every surface.
          </h2>

          <p className="mt-5 text-[17px] text-stone-600 max-w-[36ch]">
            From seamless epoxy to terrazzo and polished concrete, we install,
            repair and maintain floors that are built to perform.
          </p>

          <Button href="#contact" className="mt-8">
            Request a Quote
          </Button>

          {/* progress indicator */}
          <div
            className="mt-12 hidden lg:flex items-center gap-3.5 text-[13px] font-semibold tabular-nums text-stone-500"
            aria-hidden="true"
          >
            <span className="text-stone-900">{pad(active + 1)}</span>
            <span className="relative h-0.5 w-36 overflow-hidden rounded bg-stone-300">
              <motion.span
                className="absolute inset-0 origin-left bg-stone-900"
                style={{ scaleX: scrollYProgress }}
              />
            </span>
            <span>{pad(services.length)}</span>
          </div>
        </div>
      </div>

      {/* RIGHT: scrolling service cards */}
      <div className="flex flex-col gap-6 lg:gap-10 pt-10 pb-20 lg:pt-24 lg:pb-32">
        {services.map(({ title, description, tags, surface }, i) => (
          <motion.article
            key={title}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="group rounded-[20px] border border-stone-300 bg-stone-100 p-2.5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-stone-300">
              <SurfaceSwatch
                variant={surface}
                className="size-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 bottom-4 rounded-full bg-stone-950/85 px-3.5 py-1.5 text-[13px] font-semibold text-stone-100 tabular-nums">
                {pad(i + 1)} / {pad(services.length)}
              </span>
            </div>
            <div className="px-4 pt-6 pb-4 md:px-[18px]">
              <h3 className="text-2xl md:text-[2rem] font-bold leading-[1.15] tracking-tight">
                {title}
              </h3>
              <p className="mt-2.5 text-base text-stone-600 max-w-[52ch]">
                {description}
              </p>
              <div className="mt-9 flex flex-col items-start sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
                <ul className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-stone-300 px-3 py-1 text-[12.5px] text-stone-600 whitespace-nowrap"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="group/link inline-flex items-center gap-2 text-[15.5px] font-semibold"
                >
                  Get a quote
                  <svg viewBox="0 0 24 24" className="size-[18px] transition-transform duration-300 group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                  <span className="sr-only">for {title}</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Services;
