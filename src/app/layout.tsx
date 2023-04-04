import { cx } from "classix";
import { ibmPlexSerif, jetbrains, naskhArabic, spaceGrotesk } from "~lib/utils/fonts";
import { ChildrenProps } from "~models";
import "~styles/index.css";
import ClientWrapper from "./clientWrapper";

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="en"
      className={cx(
        jetbrains.variable,
        spaceGrotesk.variable,
        naskhArabic.variable,
        ibmPlexSerif.variable
      )}
    >
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
