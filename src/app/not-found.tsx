import dynamic from "next/dynamic";
import Seo from "~ui/Seo";
import { Heading, Paragraph } from "~ui/typography";

const ErrorImage = dynamic(() => import("~ui/images/ErrorImage"));

export default function NotFoundPage() {
  return (
    <Seo
      title="404 Not Found"
      description="Halaman yang anda cari tidak ditemukan"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <ErrorImage />
      <section className="mt-6 flex flex-col items-center">
        <Heading as="h4" className="sm:text-2xl">
          404 Not Found!
        </Heading>
        <Paragraph>Halaman yang anda cari tidak ditemukan</Paragraph>
      </section>
    </Seo>
  );
}
