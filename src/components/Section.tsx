import { ReactNode } from "react";
import { cn } from "../utils/utils";
import { SectionSvg } from "../assets/svg/SectionSvg";

type SectionProps = {
  children: ReactNode;
  id: string;
  crosses?: boolean;
  crossesOffset?: string;
  className?: string;
};

export default function Section({
  children,
  id,
  crosses = false,
  crossesOffset = "",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-10 lg:py-16 xl:py-20",
        crosses && "lg:py-32 xl:py-32",
        className
      )}
    >
      {children}

      <div className="hidden absolute top-0 left-5 lg:left-7 xl:left-10 w-[1px] h-full bg-stroke-1 pointer-events-none md:block " />

      <div className="hidden absolute top-0 right-5 lg:right-7 xl:right-10 w-[1px] h-full bg-stroke-1 pointer-events-none md:block " />

      {crosses && (
        <>
          <div className="hidden lg:block absolute top-0 left-7 xl:left-10 right-7 xl:right-10 h-0.25 bg-stroke-1 pointer-events-none "></div>
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
}
