import Link from "next/link";
import Main from "~ui/Main";
import { Heading, Paragraph } from "~ui/typography";

export default function NotFoundPage() {
  return (
    <Main className="flex min-h-screen flex-col items-center justify-center text-center">
      <section className="flex flex-col items-center justify-center">
        <Heading as="h1">404 😴</Heading>
        <Paragraph className="mt-2 font-semibold">
          Looks like the page that you want to visit is not found!{" "}
          <Link href="/" className="font-bold underline decoration-dashed underline-offset-4">
            Back to Home
          </Link>
        </Paragraph>
      </section>
    </Main>
  );
}
