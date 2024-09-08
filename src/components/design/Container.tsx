import { ReactNode } from "react";
import { cn } from "../../utils/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
