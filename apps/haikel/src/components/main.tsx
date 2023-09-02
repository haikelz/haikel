import { tw } from "~lib/helpers";
import type { ChildrenProps } from "~types";

interface MainProps extends ChildrenProps {
  className: string;
}

export default function Main({ children, className }: MainProps) {
  return (
    <main className={tw("container mx-auto max-w-3xl tracking-wide", className)}>{children}</main>
  );
}
