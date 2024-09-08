import { cn } from "../utils/utils";

type HeadingProps = {
  text: string;
  className?: string;
};

export default function Heading({ text, className }: HeadingProps) {
  return (
    <div className={cn("max-w-[50rem] mx-auto mb-12 lg:mb-20", className)}>
      <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight">
        {text}
      </h2>
    </div>
  );
}
