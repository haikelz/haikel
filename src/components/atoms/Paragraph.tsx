import { twMerge } from "tailwind-merge";
import { ParagraphProps } from "@/types";

export const Paragraph = ({ className, children, isCenter }: ParagraphProps) => {
  return (
    <p
      className={twMerge(
        "text-base font-normal leading-[1.75rem] tracking-wide",
        isCenter ? "text-center" : "",
        className
      )}
    >
      {children}
    </p>
  );
};
