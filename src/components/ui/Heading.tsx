import { Brackets } from "../../assets/svg/Brackets";
import { cn } from "../../utils/utils";

type HeadingProps = {
  text: string;
  tag?: string;
  subtext?: string;
  className?: string;
};

export default function Heading({
  text,
  tag,
  subtext,
  className,
}: HeadingProps) {
  return (
    <div className={cn("max-w-[50rem] mx-auto mb-12 lg:mb-20", className)}>
      {tag && (
        <p className="font-grotesk font-light justify-center text-xs tracking-tagline uppercase flex items-center">
          <Brackets position="left" />
          {tag}
          <Brackets position="right" />
        </p>
      )}
      <h2 className="h2">{text}</h2>
      {subtext && <p className="body-2 mt-4 text-n-4">{subtext}</p>}
    </div>
  );
}
