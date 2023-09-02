"use client";

import Main from "~components/main";
import { Heading, Paragraph, UnderlineLink } from "~ui/typography";

export default function ErrorPage() {
  return (
    <Main className="flex min-h-screen flex-col items-center justify-center text-center">
      <section className="flex flex-col items-center">
        <Heading as="h1">500 🤖</Heading>
        <Paragraph className="mt-2 font-semibold">
          Looks like there is a problem with the server. Try again!{" "}
          <UnderlineLink href="/">Back to Home</UnderlineLink>
        </Paragraph>
      </section>
    </Main>
  );
}
