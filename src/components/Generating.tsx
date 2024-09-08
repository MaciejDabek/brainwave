import { loading } from "../assets";
import { cn } from "../utils/utils";

type GeneratingProps = {
  className?: string;
};

export default function Generating({ className = "" }: GeneratingProps) {
  return (
    <div
      className={cn(
        "flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-full text-base ",
        className
      )}
    >
      <img src={loading} className="size-5 mr-4" alt="loading" />
      AI is generating
    </div>
  );
}
