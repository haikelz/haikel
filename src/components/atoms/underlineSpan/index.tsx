import { ChildrenProps } from "@/types";

export const UnderlineSpan = ({ children }: ChildrenProps) => {
  return (
    <span className="cursor-pointer font-bold underline decoration-2 underline-offset-[3px] hover:text-texthover">
      {children}
    </span>
  );
};
