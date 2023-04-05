"use client";

import { Provider } from "jotai";
import { SessionProvider } from "next-auth/react";
import { ChildrenProps } from "~models";

export default function ClientWrapper({ children }: ChildrenProps) {
  return (
    <SessionProvider>
      <Provider>{children}</Provider>
    </SessionProvider>
  );
}
