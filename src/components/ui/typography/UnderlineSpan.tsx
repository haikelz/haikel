import { ChildrenProps } from "@/types";
import { twJoin } from "tailwind-merge";

export const UnderlineSpan = ({ children }: ChildrenProps) => {
  return (
    <span
      className={twJoin(
        "cursor-pointer font-bold",
        "underline decoration-black decoration-dashed underline-offset-[5px]",
        "hover:text-crayola hover:decoration-crayola"
      )}
    >
      {children}
    </span>
  );
};
