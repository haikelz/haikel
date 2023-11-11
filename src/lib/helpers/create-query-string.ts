"use client";

import { ReadonlyURLSearchParams } from "next/navigation";
import { useCallback } from "react";

export function createQueryString(
  searchParams: ReadonlyURLSearchParams,
  name: string,
  value: string
) {
  const callback = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return callback(name, value);
}
