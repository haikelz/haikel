import { ParagraphProps } from "@/types";

export const Paragraph = ({ className, children, isCenter }: ParagraphProps) => {
  return (
    <p
      className={`${
        isCenter ? "text-center" : ""
      } text-base font-normal leading-[1.75rem] tracking-wide ${className}`}
    >
      {children}
    </p>
  );
};
