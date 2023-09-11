import { HTMLAttributes } from "react";
import { tw } from "~lib/helpers";
import type { ChildrenProps } from "~types";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & ChildrenProps;

export function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <p
      className={tw(
        "text-base font-normal leading-[1.75] tracking-wide",
        "md:text-lg md:leading-[1.7777778]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
