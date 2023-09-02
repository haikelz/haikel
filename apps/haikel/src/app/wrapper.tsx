"use client";

import { Provider as JotaiProvider } from "jotai";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import Provider from "~lib/utils/trpc/provider";
import type { ChildrenProps } from "~types";

export default function Wrapper({ children }: ChildrenProps) {
  return (
    <SessionProvider>
      <JotaiProvider>
        <Provider>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </Provider>
      </JotaiProvider>
    </SessionProvider>
  );
}
