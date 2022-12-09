import { UnderlineSpanProps } from "@/types";

export const UnderlineSpan = ({ children, toggleLanguage }: UnderlineSpanProps) => {
  return (
    <span
      className="cursor-pointer font-bold decoration-2 underline underline-offset-[3px] hover:text-texthover"
      onClick={toggleLanguage}
    >
      {children}
    </span>
  );
};
