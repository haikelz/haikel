import { ChildrenProps } from "~interfaces";
import { tw } from "~lib/helpers";

interface HeadingProps extends ChildrenProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export function Heading({ children, as, className }: HeadingProps) {
  return (
    <>
      {as === "h1" ? (
        <h1 className={tw("text-4xl font-bold", className)}>{children}</h1>
      ) : as === "h2" ? (
        <h2 className={tw("text-3xl font-bold", className)}>{children}</h2>
      ) : as === "h3" ? (
        <h3 className={tw("text-2xl font-bold", className)}>{children}</h3>
      ) : as === "h4" ? (
        <h4 className={tw("text-xl font-bold", className)}>{children}</h4>
      ) : as === "h5" ? (
        <h5 className={tw("text-lg font-bold", className)}>{children}</h5>
      ) : as === "h6" ? (
        <h6 className={tw("text-base font-bold", className)}>{children}</h6>
      ) : null}
    </>
  );
}
