import type { ChildrenProps } from "@types";
import { tw } from "~lib/helpers";

export function UnderlineSpan({ children }: ChildrenProps) {
  return (
    <span
      className={tw(
        "cursor-pointer font-bold",
        "text-base leading-[1.75] underline decoration-dashed underline-offset-[5px]",
        "hover:text-blue-500 hover:decoration-blue-500",
        " md:leading-[1.7777778]"
      )}
    >
      {children}
    </span>
  );
}
