import { twMerge } from "tailwind-merge";
import { ChildrenProps } from "~types";

type ParagraphProps = ChildrenProps & {
  className?: string;
  isCenter?: boolean;
};

export const Paragraph = ({ className, children, isCenter }: ParagraphProps) => {
  return (
    <p
      className={twMerge(
        "text-base font-normal leading-[1.75] tracking-wide",
        "md:text-lg md:leading-[1.7777778]",
        isCenter ? "text-center" : "",
        className
      )}
    >
      {children}
    </p>
  );
};
