import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./ui/Button";

export default function PricingList() {
  return (
    <ul className="flex gap-6 max-lg:flex-wrap">
      {pricing.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-start border border-n-4 rounded-[2rem] px-6 py-6 even:scale-105 even:ring-1 even:ring-color-1"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 text-n-1/50 min-h-[4rem]">{item.description}</p>

          <div className="flex h-[5.5rem] items-center mb-4">
            {item.price && (
              <>
                <span className="h3">$</span>
                <span className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </span>
              </>
            )}
          </div>

          <Button
            type={item.price ? "colorful" : "white"}
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((featureItem) => (
              <li className="flex items-start gap-4 border-t border-n-3 px-1 py-4 mx-4">
                <img src={check} />
                <span className="">{featureItem}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
