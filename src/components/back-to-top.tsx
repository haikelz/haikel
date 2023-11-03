"use client";

import { atom, useAtom } from "jotai";
import { ArrowUpIcon } from "lucide-react";
import { useCallback, useEffect } from "react";

const scrollAtom = atom<number>(0);

export default function BackToTop() {
  const [scroll, setScroll] = useAtom(scrollAtom);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    setScroll(position);
  }, [setScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {scroll > 100 ? (
        <button
          type="button"
          aria-label="back to top"
          className="rounded-md fixed bottom-4 bg-red right-4 dark:bg-base-2 p-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon size={22} className="text-white" />
        </button>
      ) : null}
    </>
  );
}
