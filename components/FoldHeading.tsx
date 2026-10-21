import { FC } from "react";
import FoldText, { FoldTextProps } from "@/components/ui/fold-text";

/**
 * Heading text that folds into place as it scrolls into view. Goes inside an
 * h1/h2, which keeps control of the size, weight, leading and tracking.
 */
const FoldHeading: FC<FoldTextProps & { text: string }> = (props) => (
  <FoldText
    trigger="scroll"
    splitBy="char"
    stagger={0.03}
    fontSize="inherit"
    fontWeight="inherit"
    style={{ lineHeight: "inherit", letterSpacing: "inherit" }}
    {...props}
  />
);

export default FoldHeading;
