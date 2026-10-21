"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimate } from "motion/react";
import Button from "@/components/Button";
import { navItems, site } from "@/lib/site";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navScope, navAnimate] = useAnimate();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      navAnimate(
        navScope.current,
        { scaleY: 1 },
        { duration: 0.7, ease: "easeInOut" }
      );
    } else {
      navAnimate(
        navScope.current,
        { scaleY: 0 },
        { duration: 0.5, ease: "easeInOut" }
      );
    }
  }, [isOpen, navAnimate, navScope]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Fullscreen Menu */}
      <motion.div
        ref={navScope}
        id="site-menu"
        initial={{ scaleY: 0 }}
        className="fixed top-0 left-0 w-full h-screen bg-stone-950 origin-top"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <nav className="mt-20 flex flex-col" aria-label="Main">
          {navItems.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-stone-200 border-t last:border-b border-stone-800 py-5 group/nav-item relative isolate"
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              <div className="container flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500 flex items-center gap-4">
                  {label}
                  {pathname === href && (
                    <span className="size-2.5 rounded-full bg-hazard" aria-hidden="true" />
                  )}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </Link>
          ))}
        </nav>
      </motion.div>

      {/* Top Navigation */}
      <div className="fixed top-0 left-0 w-full bg-black mix-blend-difference">
        <div className="flex justify-between items-center h-20 px-6">
          {/* Logo */}
          <Link href="/" aria-label={`${site.name} home`} onClick={() => setIsOpen(false)}>
            <span className="text-xl font-bold uppercase text-white whitespace-nowrap">
              {site.name}
            </span>
          </Link>

          {/* Menu Button */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="size-11 border border-stone-400 rounded-full flex items-center justify-center bg-stone-200 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="site-menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <motion.rect
                  x="3"
                  y="7"
                  width="18"
                  height="2"
                  fill="currentColor"
                  animate={{
                    translateY: isOpen ? 4 : 0,
                    rotate: isOpen ? 45 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: "12px 8px" }}
                />
                <motion.rect
                  x="3"
                  y="15"
                  width="18"
                  height="2"
                  fill="currentColor"
                  animate={{
                    translateY: isOpen ? -4 : 0,
                    rotate: isOpen ? -45 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: "12px 16px" }}
                />
              </svg>
            </button>
            <Button
              href="/contact"
              variant="light"
              className="hidden md:inline-flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
