"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ChildrenProps } from "@types";
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
            <ReactLenis
              root
              options={{
                easing: (x: number) => 1 - Math.cos((x * Math.PI) / 2),
                direction: "vertical",
                gestureDirection: "vertical",
                smooth: true,
                smoothTouch: true,
                touchMultiplier: 2,
                smoothWheel: true,
              }}
            >
              {children}
            </ReactLenis>
          </ThemeProvider>
        </Provider>
      </JotaiProvider>
    </SessionProvider>
  );
}
