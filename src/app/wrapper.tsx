"use client";

import { ChildrenProps } from "@types";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Provider as JotaiProvider } from "jotai";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import Provider from "~lib/utils/trpc/provider";

export default function Wrapper({ children }: ChildrenProps) {
  return (
    <SessionProvider>
      <JotaiProvider>
        <Provider>
          <ThemeProvider attribute="class">
            <LazyMotion features={domAnimation}>
              <AnimatePresence mode="wait">{children}</AnimatePresence>
            </LazyMotion>
          </ThemeProvider>
        </Provider>
      </JotaiProvider>
    </SessionProvider>
  );
}
