import { twJoin } from "tailwind-merge";
import { ChildrenProps } from "~types";

export const UnderlineSpan = ({ children }: ChildrenProps) => {
  return (
    <span
      className={twJoin(
        "cursor-pointer font-bold",
        "text-base leading-[1.75] underline decoration-dashed underline-offset-[5px]",
        "hover:text-blue-500 hover:decoration-blue-500",
        "md:text-lg md:leading-[1.7777778]"
      )}
    >
      {children}
    </span>
  );
};
