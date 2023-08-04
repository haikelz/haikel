import { ChildrenProps } from "~interfaces";
import { cxm } from "~lib/helpers";

interface ParagraphProps extends ChildrenProps {
  className?: string;
}

export function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={cxm(
        "text-base font-normal leading-[1.75] tracking-wide",
        "md:text-lg md:leading-[1.7777778]",
        className
      )}
    >
      {children}
    </p>
  );
}
