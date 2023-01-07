import { ChildrenProps } from "@/types";
import { twJoin } from "tailwind-merge";

export const UnderlineSpan = ({ children }: ChildrenProps) => {
  return (
    <span
      className={twJoin(
        "cursor-pointer font-bold",
        "underline decoration-2 underline-offset-[3px] hover:text-crayola"
      )}
    >
      {children}
    </span>
  );
};
