import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-stone-900 text-stone-100 border-stone-900 hover:bg-hazard hover:text-stone-900 hover:border-hazard",
  secondary:
    "bg-transparent text-stone-900 border-stone-900 hover:bg-stone-900 hover:text-stone-100",
  light:
    "bg-stone-100 text-stone-900 border-stone-100 hover:bg-hazard hover:border-hazard",
};

const base =
  "inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl border text-sm font-semibold uppercase tracking-wide transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hazard";

type ButtonProps = { variant?: Variant } & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

/** Renders a link when given an `href`, otherwise a button. */
const Button: FC<ButtonProps> = ({ variant = "primary", className, ...props }) => {
  const classes = twMerge(base, variants[variant], className);

  if (props.href !== undefined) {
    return <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }
  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
};

export default Button;
