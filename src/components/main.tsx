import type { ChildrenProps } from "@types";
import { tw } from "~lib/helpers";

type MainProps = ChildrenProps & {
  className: string;
};

export default function Main({ children, className }: MainProps) {
  return (
    <main
      className={tw("container mx-auto max-w-2xl tracking-wide", className)}
    >
      {children}
    </main>
  );
}
