import { Paragraph, UnderlineLink } from "~ui/typography";

export default function Footer() {
  return (
    <footer className="w-full py-4">
      <div className="px-4">
        <div className="container mx-auto flex justify-between items-center max-w-2xl tracking-wide">
          <Paragraph>
            Crafted by{" "}
            <UnderlineLink href="https://github.com/haikelz">
              Haikel
            </UnderlineLink>
          </Paragraph>
        </div>
      </div>
    </footer>
  );
}
