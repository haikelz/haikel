import { useCallback, useEffect } from "react";
import { useAtom } from "jotai";
import { scrollAtom } from "@/store/index";
import { useAtomCallback } from "jotai/utils";

type HandleScroll = () => void;

export const useScroll = () => {
  const [scroll, setScroll] = useAtom(scrollAtom);

  const handleScroll: HandleScroll = useAtomCallback(
    useCallback(() => {
      const position = window.pageYOffset;
      setScroll(position);
    }, [setScroll])
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return [scroll, setScroll] as const;
};
