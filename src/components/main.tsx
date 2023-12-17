import { HTMLAttributes } from "react";
import { tw } from "~lib/helpers";

type MainProps = HTMLAttributes<HTMLDivElement>;

export default function Main({ children, className, ...props }: MainProps) {
  return (
    <main
      className={tw("container mx-auto max-w-2xl tracking-wide", className)}
      {...props}
    >
      {children}
    </main>
  );
}
