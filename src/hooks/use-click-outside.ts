"use client";

import { SetStateAction } from "jotai";
import { Dispatch, RefObject, useCallback, useEffect } from "react";

/**
 * A custom hook to detect if we click outside of the element.
 * @param {RefObject<HTMLDivElement>} ref reference to `<div>` element
 * @param {string} href href
 */
export function useClickOutside(
  set: Dispatch<SetStateAction<boolean>>,
  ref: RefObject<HTMLDivElement>
): void {
  const handleClickOutside = useCallback(
    (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        set(false);
      }
    },
    [ref, set]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);
}
