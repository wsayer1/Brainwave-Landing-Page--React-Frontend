import type { ReactNode } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

export interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  px?: string;
  white?: boolean;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
  "aria-label"?: string;
}

const Button = ({
  className,
  href,
  onClick,
  children,
  px = "px-7",
  white = false,
  ...ariaProps
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 focus-visible:ring-2 focus-visible:ring-color-1 focus-visible:ring-offset-2 focus-visible:ring-offset-n-8 focus-visible:outline-none ${px} ${white ? "text-n-8" : "text-n-1"} ${className ?? ""}`;
  const spanClasses = "relative z-10";

  if (href) {
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        <ButtonSvg white={white} />
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...ariaProps}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </button>
  );
};

export default Button;
