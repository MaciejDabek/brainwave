import { cn } from "../utils/utils";

type HeadingProps = {
  text: string;
  subtext?: string;
  className?: string;
};

export default function Heading({ text, subtext, className }: HeadingProps) {
  return (
    <div className={cn("max-w-[50rem] mx-auto mb-12 lg:mb-20", className)}>
      <h2 className="h2">{text}</h2>
      {subtext && <p className="body-2 mt-4 text-n-4">{subtext}</p>}
    </div>
  );
}
