"use client";

import { atom, useAtom } from "jotai";
import { RefObject, useCallback, useEffect } from "react";

const showAtom = atom<boolean>(true);
const scrollAtom = atom<number>(0);

export function useScroll<T extends HTMLElement>(ref: RefObject<T>) {
  const [show, setShow] = useAtom(showAtom);
  const [scroll, setScroll] = useAtom(scrollAtom);

  const handleScroll = useCallback(() => {
    const position = document.documentElement.scrollTop;
    const elementHeight = ref.current?.offsetHeight as number;

    if (position > scroll && scroll > elementHeight) {
      setShow(false);
    } else if (position < scroll) {
      setShow(true);
    }

    setScroll(position <= 0 ? 0 : position);
  }, [setScroll, scroll, setShow]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { show, scroll };
}
