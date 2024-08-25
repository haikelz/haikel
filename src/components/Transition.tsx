import { m, type MotionProps } from "framer-motion";
import { type HTMLAttributes } from "react";

type TransitionProps = MotionProps & HTMLAttributes<HTMLDivElement>;

export default function Transition({ children, ...props }: TransitionProps) {
  return <m.div {...props}>{children}</m.div>;
}
