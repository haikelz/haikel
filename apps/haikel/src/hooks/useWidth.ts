"use client";

import { atom, useAtom } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback, useEffect } from "react";

const widthAtom = atom<number>(0);

/**
 * A custom hook that get width in percent, based on user's scroll height
 */
export function useWidth(): number {
  const [width, setWidth] = useAtom(widthAtom);

  const handleScroll = useAtomCallback(
    useCallback(() => {
      const el = document.documentElement;

      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight || document.body.scrollHeight;

      const percent = (scrollTop / (scrollHeight - el.clientHeight)) * 100;

      setWidth(percent);
    }, [setWidth])
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return width;
}
