import { cn } from "@/helpers/cn";
import { ParagraphProps } from "@/types";

export const Paragraph = ({ className, children, isCenter }: ParagraphProps) => {
  return (
    <p
      className={cn(
        "text-base font-normal leading-[1.75rem] tracking-wide",
        isCenter ? "text-center" : "",
        className
      )}
    >
      {children}
    </p>
  );
};
