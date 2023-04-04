import { cxm } from "~lib/helpers/cxm";
import Seo from "~ui/Seo";
import GuestbookClient from "./guestbookClient";

export default async function Guestbook() {
  return (
    <Seo
      title="Guestbook"
      description="Write a message for me and others"
      className={cxm("flex min-h-screen flex-col items-start justify-start", "py-8", "md:py-12")}
    >
      <GuestbookClient />
    </Seo>
  );
}
