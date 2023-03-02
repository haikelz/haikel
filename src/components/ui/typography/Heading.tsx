import { memo } from "react";
import { twMerge } from "tailwind-merge";
import { ChildrenProps } from "~types";

type HeadingProps = ChildrenProps & {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

export const Heading = ({ children, as, className }: HeadingProps) => {
  return (
    <>
      {as === "h1" ? (
        <h1 className={twMerge("text-4xl font-bold", className)}>{children}</h1>
      ) : as === "h2" ? (
        <h2 className={twMerge("text-3xl font-bold", className)}>{children}</h2>
      ) : as === "h3" ? (
        <h3 className={twMerge("text-2xl font-bold", className)}>{children}</h3>
      ) : as === "h4" ? (
        <h4 className={twMerge("text-xl font-bold", className)}>{children}</h4>
      ) : as === "h5" ? (
        <h5 className={twMerge("text-lg font-bold", className)}>{children}</h5>
      ) : as === "h6" ? (
        <h6 className={twMerge("text-base font-bold", className)}>{children}</h6>
      ) : null}
    </>
  );
};

memo(Heading);
