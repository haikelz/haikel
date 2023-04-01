import { cxm } from "~lib/helpers/cxm";
import { ChildrenProps } from "~models";

interface ParagraphProps extends ChildrenProps {
  className?: string;
  isCenter?: boolean;
}

export function Paragraph({ className, children, isCenter }: ParagraphProps) {
  return (
    <p
      className={cxm(
        "text-base font-normal leading-[1.75] tracking-wide",
        "md:text-lg md:leading-[1.7777778]",
        isCenter ? "text-center" : "",
        className
      )}
    >
      {children}
    </p>
  );
}
