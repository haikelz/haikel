import { tw } from "~lib/helpers";
import type { ChildrenProps } from "~types";

type MainProps = ChildrenProps & {
  className: string;
};

export default function Main({ children, className }: MainProps) {
  return (
    <main className={tw("container mx-auto max-w-2xl tracking-wide", className)}>{children}</main>
  );
}
