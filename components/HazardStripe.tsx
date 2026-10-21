import { FC } from "react";
import { twMerge } from "tailwind-merge";

/** Black-and-yellow safety-tape edge used to open hazard-coloured sections. */
const HazardStripe: FC<{ className?: string }> = ({ className }) => (
  <div
    className={twMerge(
      "h-3 bg-[repeating-linear-gradient(-45deg,var(--color-stone-950)_0_14px,transparent_14px_28px)]",
      className
    )}
    aria-hidden="true"
  />
);

export default HazardStripe;
