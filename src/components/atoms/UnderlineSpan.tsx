import clsx from "clsx";
import { ChildrenProps } from "@/types";
import { memo } from "react";

export const UnderlineSpan = memo(({ children }: ChildrenProps) => {
  return (
    <span
      className={clsx(
        "cursor-pointer font-bold",
        "underline decoration-2 underline-offset-[3px] hover:text-crayola"
      )}
    >
      {children}
    </span>
  );
});

UnderlineSpan.displayName = "UnderlineSpan";
