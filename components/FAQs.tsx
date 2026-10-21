"use client";

import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import FoldHeading from "@/components/FoldHeading";
import { faqs } from "@/lib/content";

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
          <FoldHeading text="FAQS" />
        </h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted last:border-b relative isolate group/faq"
            >
              <div
                className={twMerge(
                  "absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 transition-all duration-700 group-hover/faq:h-full",
                  faqIndex === selectedIndex ? "h-full" : ""
                )}
              ></div>

              <button
                type="button"
                className={twMerge(
                  "w-full py-6 md:py-8 flex items-center justify-between gap-4 text-left cursor-pointer transition-all duration-700 group-hover/faq:lg:px-8 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-stone-900",
                  faqIndex === selectedIndex && "lg:px-8"
                )}
                onClick={() =>
                  setSelectedIndex(faqIndex === selectedIndex ? null : faqIndex)
                }
                aria-expanded={faqIndex === selectedIndex}
                aria-controls={`faq-answer-${faqIndex}`}
              >
                <span className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </span>
                <span
                  className={twMerge(
                    "inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-700",
                    faqIndex === selectedIndex ? "rotate-45" : ""
                  )}
                >
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
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                    id={`faq-answer-${faqIndex}`}
                    className="overflow-hidden lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-xl pb-6 md:pb-8 max-w-[60ch]">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
