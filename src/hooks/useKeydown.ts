import { NextRouter, useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { Keydown, KeydownEvent } from "@/types";

export const useKeydown = <T extends Keydown>({ isCtrlKey, previousUrl, nextUrl }: T) => {
  const router: NextRouter = useRouter();

  const handleKeydown = useCallback(
    <T extends KeydownEvent>(event: T) => {
      if (event.ctrlKey === isCtrlKey) {
        if (event.key === "ArrowRight") router.push(nextUrl);
        else if (event.key === "ArrowLeft") router.push(previousUrl);
      }
    },
    [isCtrlKey, previousUrl, nextUrl, router]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, true);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);
};
