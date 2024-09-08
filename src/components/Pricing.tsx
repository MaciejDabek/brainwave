import { smallSphere, stars } from "../assets";
import Heading from "./ui/Heading";
import PricingList from "./PricingList";
import Section from "./ui/Section";
import Container from "./design/Container";

export default function Pricing() {
  return (
    <Section id="pricing" className="overflow-hidden">
      <Container className="relative z-10">
        <div className="relative hidden lg:flex justify-center mb-[6.5rem]">
          <img
            src={smallSphere}
            className="relative z-10"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute w-[60rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars icon"
            />
          </div>
        </div>

        <Heading
          text="Pay once, use forever"
          tag="Get started with brainwave"
          className="text-center"
        />

        <PricingList />

        <div className="text-center mt-10">
          <a
            className="font-code font-bold text-xs tracking-wider uppercase border-b text-n-1/50 hover:text-n-1 border-n-4"
            href="/"
          >
            See the full details
          </a>
        </div>
      </Container>
    </Section>
  );
}
