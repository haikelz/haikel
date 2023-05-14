import { cxm } from "~lib/helpers/cxm";
import { ChildrenProps } from "~models";

interface HeadingProps extends ChildrenProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export function Heading({ children, as, className }: HeadingProps) {
  return (
    <>
      {as === "h1" ? (
        <h1 className={cxm("text-4xl font-bold", className)}>{children}</h1>
      ) : as === "h2" ? (
        <h2 className={cxm("text-3xl font-bold", className)}>{children}</h2>
      ) : as === "h3" ? (
        <h3 className={cxm("text-2xl font-bold", className)}>{children}</h3>
      ) : as === "h4" ? (
        <h4 className={cxm("text-xl font-bold", className)}>{children}</h4>
      ) : as === "h5" ? (
        <h5 className={cxm("text-lg font-bold", className)}>{children}</h5>
      ) : as === "h6" ? (
        <h6 className={cxm("text-base font-bold", className)}>{children}</h6>
      ) : null}
    </>
  );
}
