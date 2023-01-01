import clsx from "clsx";
import { ParagraphProps } from "@/types";

export const Paragraph = ({ className, children, isCenter }: ParagraphProps) => {
  return (
    <p
      className={clsx(
        "text-base font-normal leading-[1.75rem] tracking-wide",
        isCenter ? "text-center" : "",
        className
      )}
    >
      {children}
    </p>
  );
};

Paragraph.displayName = "Paragraph";
