import clsx from "clsx";
import { HeadingProps } from "@/types";
import { memo } from "react";

export const Heading = memo(({ children, as, className }: HeadingProps) => {
  return (
    <>
      {as === "h1" ? (
        <h1 className={clsx("text-3xl font-bold md:text-4xl", className)}>{children}</h1>
      ) : as === "h2" ? (
        <h2 className={clsx("text-3xl font-bold", className)}>{children}</h2>
      ) : as === "h3" ? (
        <h3 className={clsx("text-2xl font-bold", className)}>{children}</h3>
      ) : as === "h4" ? (
        <h4 className={clsx("text-xl font-bold", className)}>{children}</h4>
      ) : as === "h5" ? (
        <h5 className={clsx("text-lg font-bold", className)}>{children}</h5>
      ) : as === "h6" ? (
        <h6 className={clsx("text-base font-bold", className)}>{children}</h6>
      ) : null}
    </>
  );
});

Heading.displayName = "Heading";
