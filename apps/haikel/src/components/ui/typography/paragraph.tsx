import { tw } from "~lib/helpers";
import type { ChildrenProps } from "~types";

interface ParagraphProps extends ChildrenProps {
  className?: string;
}

export function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={tw(
        "text-base font-normal leading-[1.75] tracking-wide",
        "md:text-lg md:leading-[1.7777778]",
        className
      )}
    >
      {children}
    </p>
  );
}
