import { FC } from "react";
import { values } from "@/lib/content";

const About: FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-600">
          About Us
        </p>
        <p className="mt-6 text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-[22ch] md:max-w-[26ch]">
          We are a South African specialist flooring and surface-solutions
          company providing high-performance flooring systems.
        </p>

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 md:gap-16 border-t border-stone-400 border-dotted pt-10">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">
              Our expertise
            </h2>
            <p className="mt-4 text-lg md:text-xl text-stone-700">
              Epoxy flooring, polyurethane (PU) flooring, polished concrete,
              specialised floor sealing, decorative coatings, terrazzo and
              floor refurbishment for commercial, industrial, hospitality,
              healthcare, retail and residential environments.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">
              Why choose us?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-stone-700">
              We combine technical expertise, quality materials, professional
              surface preparation and skilled installation to deliver flooring
              systems designed for long-term performance.
            </p>
          </div>
        </div>
      </div>

      {/* Values marquee */}
      <div className="mt-16 md:mt-24 overflow-hidden border-y border-stone-900 bg-hazard py-5">
        <p className="sr-only">Our approach is built around: {values.join(", ")}.</p>
        <div className="flex w-max animate-marquee" aria-hidden="true">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0">
              {[...values, ...values].map((value, i) => (
                <li
                  key={i}
                  className="flex items-center text-2xl md:text-4xl font-bold uppercase tracking-tight"
                >
                  <span className="px-6 md:px-10">{value}</span>
                  <span className="text-stone-900/50">●</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
