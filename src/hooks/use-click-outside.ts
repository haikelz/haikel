"use client";

import { SetStateAction } from "jotai";
import { Dispatch, RefObject, useCallback, useEffect } from "react";

/**
 * A custom hook to detect if we click outside of the element
 * @param {Dispatch<SetStateAction<boolean>>} set setter
 * @param {RefObject<HTMLDivElement>} ref reference to `<div>` element
 */
export function useClickOutside<T>(
  set: Dispatch<SetStateAction<T>>,
  ref: RefObject<HTMLDivElement>,
  value: T
) {
  const handleClickOutside = useCallback(
    (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        set(value);
      }
    },
    [ref, set]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);
}
