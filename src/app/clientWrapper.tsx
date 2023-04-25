"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { Provider } from "jotai";
import { SessionProvider } from "next-auth/react";
import { ChildrenProps } from "~models";

export default function ClientWrapper({ children }: ChildrenProps) {
  return (
    <SessionProvider>
      <Provider>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </Provider>
    </SessionProvider>
  );
}
