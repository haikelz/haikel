import { scrollAtom } from "@/store";
import { useAtom } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback, useEffect } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useAtom(scrollAtom);

  const handleScroll = useAtomCallback(
    useCallback(() => {
      const position: number = window.pageYOffset;
      setScroll(position);
    }, [setScroll])
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return [scroll] as const;
};
