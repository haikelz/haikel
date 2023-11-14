"use client";

import { useRouter } from "next/navigation";
import { RefObject, useCallback, useEffect } from "react";

/**
 * A custom hook to detect if we click outside of the element. Devoted for `useSearchParams()`.
 * @param {RefObject<HTMLDivElement>} ref reference to `<div>` element
 * @param {string} href href
 */
export function useClickOutside<T>(
  ref: RefObject<HTMLDivElement>,
  href: string
) {
  const router = useRouter();

  const handleClickOutside = useCallback(
    (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        router.replace(href);
      }
    },
    [ref, href]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);
}
