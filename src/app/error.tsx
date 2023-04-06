"use client";

import dynamic from "next/dynamic";
import Seo from "~ui/Seo";
import { Heading, Paragraph } from "~ui/typography";

const ErrorImage = dynamic(() => import("~ui/images/ErrorImage"));

export default function ErrorPage() {
  return (
    <Seo
      title="Error"
      description="Sepertinya terjadi kesalahan, coba lagi nanti!"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <ErrorImage />
      <section className="mt-6 flex flex-col items-center">
        <Heading as="h3" className="text-xl sm:text-2xl">
          Error!
        </Heading>
        <Paragraph>Sepertinya terjadi kesalahan, coba lagi nanti!</Paragraph>
      </section>
    </Seo>
  );
}
