import { twJoin } from "tailwind-merge";
import { ChildrenProps } from "~types";

export const UnderlineSpan = ({ children }: ChildrenProps) => {
  return (
    <span
      className={twJoin(
        "cursor-pointer font-bold",
        "underline decoration-dashed underline-offset-[5px]",
        "hover:text-blue-500 hover:decoration-blue-500"
      )}
    >
      {children}
    </span>
  );
};
