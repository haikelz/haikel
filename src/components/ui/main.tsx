import { cxm } from "~lib/helpers";
import { ChildrenProps } from "~models";

interface MainProps extends ChildrenProps {
  className: string;
}

export default function Main({ children, className }: MainProps) {
  return (
    <main className={cxm("container mx-auto max-w-3xl tracking-wide", className)}>{children}</main>
  );
}
