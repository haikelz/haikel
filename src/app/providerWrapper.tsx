"use client";

import { Provider } from "jotai";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ChildrenProps } from "~models";

export default function ProviderWrapper({ children }: ChildrenProps) {
  return (
    <SessionProvider>
      <Provider>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
