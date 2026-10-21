import { FC } from "react";
import FoldHeading from "@/components/FoldHeading";
import { industries } from "@/lib/content";

const Industries: FC = () => {
  return (
    <section id="industries" className="section bg-stone-100">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            <FoldHeading text="Industries we serve" />
          </h2>
          <p className="text-lg text-stone-600 max-w-[34ch]">
            Flooring systems specified for the way each environment is used.
          </p>
        </div>

        <ul className="mt-10 md:mt-16 lg:mt-20 grid md:grid-cols-2 md:gap-x-10">
          {industries.map((industry, i) => (
            <li
              key={industry}
              className="group/row relative isolate flex items-baseline gap-6 border-t border-stone-400 border-dotted py-6 md:py-8 max-md:last:border-b md:[&:nth-last-child(-n+2)]:border-b"
            >
              <div className="absolute bottom-0 left-0 -z-10 h-0 w-full bg-hazard transition-all duration-700 group-hover/row:h-full"></div>
              <span className="w-8 shrink-0 text-sm font-semibold tabular-nums text-stone-500 transition-all duration-700 group-hover/row:text-stone-900 lg:group-hover/row:pl-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-2xl md:text-3xl font-medium tracking-tight">
                {industry}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Industries;
