"use client";

import { atom, useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { tw } from "~lib/helpers";

const widthAtom = atom<number>(0);

export default function ReadingProgress() {
  const [width, setWidth] = useAtom(widthAtom);

  const handleScroll = useCallback(() => {
    const el = document.documentElement;

    const scrollTop = el.scrollTop || document.body.scrollTop;
    const scrollHeight = el.scrollHeight || document.body.scrollHeight;

    const percent = (scrollTop / (scrollHeight - el.clientHeight)) * 100;

    setWidth(percent);
  }, [setWidth]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      style={{ width: width + "%" }}
      className={tw("fixed z-50 h-0.5 bg-rose-400", "dark:bg-blue-500")}
    ></div>
  );
}
