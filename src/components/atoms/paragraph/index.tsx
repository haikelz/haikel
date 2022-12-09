import { ReactNode } from "react";

interface ParagraphProps {
  className?: string;
  children: ReactNode;
  isCenter: boolean;
}

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
