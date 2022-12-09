import { ParagraphProps } from "@/types";

export const Paragraph = ({ className, children, isCenter }: ParagraphProps) => {
  return (
    <p
      className={`${
        isCenter ? "text-center" : ""
      } font-normal text-base leading-[1.75rem] tracking-wide ${className}`}
    >
      {children}
    </p>
  );
};
