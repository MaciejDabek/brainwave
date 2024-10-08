import { ScrollParallax } from "react-just-parallax";
import { curve, heroBackground, robot } from "../assets";
import Button from "./ui/Button";
import Section from "./ui/Section";
import { heroIcons } from "../constants";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./ui/Generating";
import Notification from "./ui/Notification";
import CompanyLogos from "./CompanyLogos";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="pt-[12rem] mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
    >
      <div className="max-w-[77.5rem] xl:max-w-[87.5rem] mx-auto px-5 md:px-10 lg:px-15 relative">
        <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-16 md:mb-20 lg:mb-24">
          <h1 className="font-semibold text-4xl lg:text-6xl  mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{"  "}
            <span className="inline-block relative">
              Brainwave
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 max-w-3xl  text-n-2 mb-6 lg:mb-8 mx-auto">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button type="white" href="#pricing">
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-2xl">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40  backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img
                          src={icon}
                          width={24}
                          height={25}
                          alt={`${index} icon`}
                        />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden xl:flex absolute -right-[5.5rem] bottom-[11rem] w-[18rem]"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
}
