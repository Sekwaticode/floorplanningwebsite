"use client";

import { FC, useRef } from "react";
import { motion, useScroll } from "motion/react";
import SurfaceSwatch from "@/components/SurfaceSwatch";
import { processSteps } from "@/lib/content";

/**
 * Animated timeline: the line fills as you scroll, with each step's dot
 * pinned to the middle of the screen while its content passes.
 */
const Process: FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="process" className="bg-stone-950 text-stone-100">
      <div className="container py-24 md:py-32 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            From Preparation to Final Finish
          </h2>
          <p className="mt-8 text-lg md:text-xl text-stone-400">
            A successful flooring system starts with proper preparation. Every
            project follows the same careful sequence.
          </p>
        </div>
      </div>

      <div className="container pb-[30vh]">
        <div ref={timelineRef} className="relative mx-auto max-w-[1120px]">
          {/* track + fill */}
          <div className="absolute top-0 bottom-0 left-[6px] md:left-1/2 w-[3px] md:-translate-x-1/2 bg-stone-800">
            <motion.div
              className="size-full origin-top bg-gradient-to-b from-hazard to-orange-500"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          {processSteps.map(({ step, title, text, surface }) => (
            <div
              key={step}
              className="relative grid grid-cols-[64px_1fr] md:grid-cols-[1fr_180px_1fr] py-16 md:py-20"
            >
              <div className="col-start-2 md:col-start-1 md:row-start-1 md:text-right">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-hazard">
                  {step}
                </p>
                <h3 className="mt-2 mb-6 md:mb-0 text-3xl md:text-4xl font-medium leading-tight tracking-tight">
                  {title}
                </h3>
              </div>

              <div className="col-start-1 row-start-1 row-span-2 md:col-start-2 md:row-span-1 flex md:justify-center">
                <div className="sticky top-[50vh] size-[15px] rounded-full bg-stone-100 shadow-[0_0_0_8px_var(--color-stone-950)]" />
              </div>

              <div className="col-start-2 md:col-start-3 md:row-start-1">
                <p className="text-lg md:text-xl text-stone-300 mb-10 md:mb-14">
                  {text}
                </p>
                <div className="overflow-hidden rounded-xl aspect-[16/10] max-w-[480px]">
                  <SurfaceSwatch variant={surface} className="size-full" />
                </div>
              </div>
            </div>
          ))}

          {/* fade the line in and out at each end */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-stone-950 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-stone-950 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Process;
