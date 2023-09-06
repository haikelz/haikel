import { tw } from "~lib/helpers";
import { Heading, Paragraph } from "~ui/typography";

export default function About() {
  return (
    <section className="mb-12 flex w-full flex-wrap items-center justify-center">
      <div className={tw("flex w-full flex-col items-start justify-start", "md:flex-row")}>
        <div className={tw("flex flex-col items-start justify-start", "md:mt-0 md:text-start")}>
          <Heading as="h1">
            Hello, I&#39;m{" "}
            <span
              className={tw(
                "underline decoration-red decoration-dashed underline-offset-[5px]",
                "dark:gradient-dark dark:animate-text dark:bg-clip-text",
                "dark:text-transparent dark:decoration-blue-500"
              )}
            >
              Haikel
            </span>{" "}
            🌸
          </Heading>
          <Paragraph className="mt-4">
            A Frontend Crafter based in Indonesia. Familiar with Javascript/Typescript, React
            Ecosystem, and Linux(for daily use). Try to follow best practices as much as i can. I
            can work in a team or solo. In my spare time, i crafted something, go out take some
            photos, learn new things, or just improve my English.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
