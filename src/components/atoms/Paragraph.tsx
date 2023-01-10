import { ChildrenProps } from "@/types";
import { twMerge } from "tailwind-merge";

type ParagraphProps = ChildrenProps & {
  className?: string;
  isCenter?: boolean;
};

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
