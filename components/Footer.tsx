import { FC } from "react";
import Button from "@/components/Button";
import SurfaceSwatch from "@/components/SurfaceSwatch";
import { navItems, site } from "@/lib/site";

const linkClass =
  "relative inline-block pb-1 text-[15px] md:text-base font-medium uppercase transition-colors duration-300 hover:text-hazard after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-hazard";

const columns = [
  { heading: "Company", links: navItems.slice(0, 4) },
  { heading: "Help", links: navItems.slice(4) },
  { heading: "Connect", links: site.socials },
];

const legal = [
  { label: "Privacy Policy", href: "#todo-privacy-policy" },
  { label: "Terms & Conditions", href: "#todo-terms-and-conditions" },
];

const Footer: FC = () => {
  return (
    <footer id="footer" className="bg-stone-950 text-stone-100 overflow-hidden">
      <div className="px-4 md:px-7 lg:px-[42px] pt-12 md:pt-16 pb-12 md:pb-16">
        {/* navigation + swatch */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-11">
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[291px_249px_auto] gap-x-6 sm:gap-x-8 lg:gap-x-0 gap-y-10 w-full sm:w-auto sm:flex-1 lg:flex-none"
          >
            {columns.map(({ heading, links }) => (
              <div key={heading}>
                <h2 className="sr-only">{heading}</h2>
                <ul className="flex flex-col items-start gap-5 md:gap-[30px]">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a className={linkClass} href={href}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="w-40 lg:w-56 aspect-square shrink-0 overflow-hidden rounded-2xl">
            <SurfaceSwatch variant="terrazzo" className="size-full" />
          </div>
        </div>

        {/* legal bar */}
        <div className="mt-12 md:mt-24 lg:mt-36 pb-7 md:pb-10 border-b border-stone-800 flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline gap-x-[72px] gap-y-4">
          {legal.map(({ label, href }) => (
            <a key={label} className={linkClass} href={href}>
              {label}
            </a>
          ))}
          <p className="pb-1 text-[15px] font-medium uppercase">
            {site.name} &copy; 2026. All rights reserved.
          </p>
        </div>

        {/* oversized wordmark + statement */}
        <div className="mt-11 md:mt-24 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          <p className="text-[19vw] lg:text-[11vw] font-bold uppercase leading-[0.85] tracking-tighter break-words lg:whitespace-nowrap">
            {site.name}
          </p>
          <div className="max-w-[440px] flex flex-col items-start gap-6">
            <p className="text-base md:text-lg font-medium leading-relaxed uppercase">
              {site.tagline}. Professional floors, built to perform, from
              preparation to final finish.
            </p>
            <Button href="#contact" variant="light" className="max-sm:w-full max-sm:h-13">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
