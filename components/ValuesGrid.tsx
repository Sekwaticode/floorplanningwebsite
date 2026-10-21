import { FC } from "react";
import FoldHeading from "@/components/FoldHeading";
import { valueDetails, values } from "@/lib/content";

const ValuesGrid: FC = () => {
  return (
    <section className="section bg-stone-950 text-stone-100">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
          <FoldHeading text="What we stand for" />
        </h2>
        <ul className="mt-10 md:mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-5 border-t border-stone-800">
          {values.map((value, i) => (
            <li
              key={value}
              className="group/value relative isolate border-b border-stone-800 lg:border-b-0 lg:border-r lg:last:border-r-0 p-6 lg:p-8 lg:min-h-80 flex flex-col justify-between gap-10"
            >
              <div className="absolute inset-x-0 bottom-0 -z-10 h-0 bg-hazard transition-all duration-700 group-hover/value:h-full"></div>
              <span className="text-sm font-semibold tabular-nums text-hazard transition-colors duration-700 group-hover/value:text-stone-900">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="transition-colors duration-700 group-hover/value:text-stone-900">
                <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
                <p className="mt-3 text-stone-400 transition-colors duration-700 group-hover/value:text-stone-900">
                  {valueDetails[value]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ValuesGrid;
