import { cxm } from "~lib/helpers/cxm";
import { ChildrenProps } from "~models";

type MainProps = ChildrenProps & {
  className: string;
};

export default function Main({ children, className }: MainProps) {
  return (
    <main className={cxm("container mx-auto max-w-3xl tracking-wide", className)}>{children}</main>
  );
}
