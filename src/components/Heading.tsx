import type { ReactNode } from "react";
import TagLine from "./Tagline";

export interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
  tag?: ReactNode;
}

/**
 * Section heading with optional tagline and description text.
 * Used for consistent section titles across the landing page.
 */
const Heading = ({ className, title, text, tag }: HeadingProps) => {
  return (
    <div
      className={`${className ?? ""} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag != null && (
        <TagLine className="mb-4 md:justify-center">{tag}</TagLine>
      )}
      {title != null && <h2 className="h2">{title}</h2>}
      {text != null && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
