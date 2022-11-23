import { AnimationControls, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useVisible = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls: AnimationControls = useAnimation();
  const inView: boolean = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return [ref, controls] as const;
};
