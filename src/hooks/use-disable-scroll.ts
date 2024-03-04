"use client";

import { useEffect } from "react";

export function useDisableScroll(status: boolean) {
  useEffect(() => {
    document.body.style.overflow = status ? "hidden" : "unset";
  }, [status]);
}
