import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Section from "./ui/Section";
import Container from "./design/Container";
import { Gradient } from "./design/Roadmap";

export default function Roadmap() {
  return (
    <Section id="roadmap" className="overflow-hidden">
      <Container className="md:mb-10">
        <Heading
          text="What we’re working on"
          tag="READY TO GET STARTED"
          className="text-center"
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-[1px] rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between  w-full px-10 mb-8 md:mb-20">
                      <div className="font-grotesk font-light text-xs tracking-tagline uppercase">
                        {item.date}
                      </div>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="font-grotesk font-light text-xs tracking-tagline uppercase">
                          {status}
                        </div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-full"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button type="colorful" href="/roadmap">
            Our roadmap
          </Button>
        </div>
      </Container>
    </Section>
  );
}
