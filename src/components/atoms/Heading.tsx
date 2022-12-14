import { cn } from "@/helpers/cn";
import { HeadingProps } from "@/types";

export const Heading = ({ children, as, className }: HeadingProps) => {
  return (
    <>
      {as === "h1" ? (
        <h1 className={cn("text-3xl font-bold md:text-4xl", className)}>{children}</h1>
      ) : as === "h2" ? (
        <h2 className={cn("text-3xl font-bold", className)}>{children}</h2>
      ) : as === "h3" ? (
        <h3 className={cn("text-2xl font-bold", className)}>{children}</h3>
      ) : as === "h4" ? (
        <h4 className={cn("text-xl font-bold", className)}>{children}</h4>
      ) : as === "h5" ? (
        <h5 className={cn("text-lg font-bold", className)}>{children}</h5>
      ) : as === "h6" ? (
        <h6 className={cn("text-base font-bold", className)}>{children}</h6>
      ) : null}
    </>
  );
};
