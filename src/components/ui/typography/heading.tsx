import { HTMLAttributes } from "react";
import { tw } from "~lib/helpers";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as: "h1" | "h2" | "h3" | "h4";
};

export function Heading({ children, as, className, ...props }: HeadingProps) {
  return (
    <>
      {as === "h1" ? (
        <h1 className={tw("text-3xl font-extrabold", className)} {...props}>
          {children}
        </h1>
      ) : as === "h2" ? (
        <h2 className={tw("text-2xl font-extrabold", className)} {...props}>
          {children}
        </h2>
      ) : as === "h3" ? (
        <h3 className={tw("text-xl font-extrabold", className)} {...props}>
          {children}
        </h3>
      ) : as === "h4" ? (
        <h4 className={tw("text-lg font-extrabold", className)} {...props}>
          {children}
        </h4>
      ) : null}
    </>
  );
}
