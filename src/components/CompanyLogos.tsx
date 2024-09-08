import { companyLogos } from "../constants";
import { cn } from "../utils/utils";

type CompanyLogosProps = {
  className?: string;
};

export default function CompanyLogos({ className }: CompanyLogosProps) {
  return (
    <div className={cn("", className)}>
      <h5 className="font-grotesk font-light text-xs tracking-widest uppercase mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="w-full flex justify-center gap-10">
        {companyLogos.map((item, index) => (
          <li key={index}>
            <img src={item} width={134} height={28} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
}
