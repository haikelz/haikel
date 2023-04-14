"use client";

import dynamic from "next/dynamic";
import Main from "~ui/Main";
import { Heading, Paragraph } from "~ui/typography";

const ErrorImage = dynamic(() => import("~ui/images/ErrorImage"));

export default function ErrorPage() {
  return (
    <Main className="flex min-h-screen flex-col items-center justify-center text-center">
      <ErrorImage />
      <section className="mt-6 flex flex-col items-center">
        <Heading as="h4" className="sm:text-2xl">
          Error!
        </Heading>
        <Paragraph>Sepertinya terjadi kesalahan, coba lagi nanti!</Paragraph>
      </section>
    </Main>
  );
}
