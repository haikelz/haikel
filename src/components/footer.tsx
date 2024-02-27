import { UnderlineLink } from "~components/ui/typography";

export default function Footer() {
  return (
    <footer className="w-full py-4">
      <div className="px-4">
        <div className="container mx-auto max-w-2xl tracking-wide">
          <ul className="flex justify-start items-center space-x-4">
            <li>
              <UnderlineLink href="/works">Works</UnderlineLink>
            </li>
            <li>
              <UnderlineLink href="/notes">Notes</UnderlineLink>
            </li>
            <li>
              <UnderlineLink href="/tags">Tags</UnderlineLink>
            </li>
            <li>
              <UnderlineLink href="/guestbook">Guestbook</UnderlineLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
