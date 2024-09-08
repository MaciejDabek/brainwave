import { socials } from "../constants";
import Section from "./Section";
import Container from "./design/Container";

export default function Footer() {
  return (
    <Section id="footer" crosses className="!px-0 !py-10">
      <Container>
        <div className="flex items-center gap-x-20 gap-y-4 flex-wrap justify-center sm:justify-between">
          <p className="text-xs text-n-4">
            &copy; {new Date().getFullYear()}. All rights reserved
          </p>

          <ul className="flex gap-5">
            {socials.map((item) => (
              <a
                key={item.id}
                className="flex justify-center items-center size-10 p-3 rounded-full bg-n-7  hover:bg-n-6 transition-colors"
              >
                <img
                  src={item.iconUrl}
                  height={16}
                  width={16}
                  className="w-full"
                  alt={`${item.title} logo`}
                />
              </a>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
