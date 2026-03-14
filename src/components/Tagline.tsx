import type { ReactNode } from "react";
import brackets from "../assets/svg/Brackets";

export interface TagLineProps {
  className?: string;
  children: ReactNode;
}

/**
 * Tagline: small uppercase label with bracket decorations.
 * Used for section labels like "Get started with Brainwave".
 */
const TagLine = ({ className, children }: TagLineProps) => {
  return (
    <div className={`tagline flex items-center ${className ?? ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
