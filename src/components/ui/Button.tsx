import { ReactNode } from "react";
import { cn } from "../../utils/utils";
import { ButtonSvg } from "../../assets/svg/ButtonSvg";

type ButtonProps = {
  children: ReactNode;
  type: "white" | "colorful";
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  type,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex h-11 items-center justify-center px-7 transition-colors",
        "font-code text-xs font-bold uppercase tracking-wider hover:text-color-1",
        type === "white" && "text-n-8",
        type === "colorful" && "text-n-1",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <ButtonSvg white={type === "white"} />
    </button>
  );
}
