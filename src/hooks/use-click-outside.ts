"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { RefObject, useCallback, useEffect } from "react";

/**
 * A custom hook to detect if we click outside of the element. Only for /tags page
 * @param {RefObject<HTMLDivElement>} ref reference to `<div>` element
 * @param {AppRouterInstance} router router
 */
export function useClickOutside<T>(
  ref: RefObject<HTMLDivElement>,
  router: AppRouterInstance
) {
  const handleClickOutside = useCallback(
    (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        router.replace("tags");
      }
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);
}
