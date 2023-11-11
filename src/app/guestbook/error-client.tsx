import Main from "~components/main";
import { Heading, Paragraph, UnderlineLink } from "~ui/typography";

export default function ErrorClient() {
  return (
    <Main className="flex min-h-screen flex-col items-center justify-center text-center">
      <section className="flex flex-col items-center">
        <Heading as="h1">Error!</Heading>
        <Paragraph className="mt-2 font-semibold">
          Error while fetching data!{" "}
          <UnderlineLink href="/">Back to Home</UnderlineLink>
        </Paragraph>
      </section>
    </Main>
  );
}
