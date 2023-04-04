"use client";

import { Provider } from "jotai";
import { SessionProvider } from "next-auth/react";
import { cxm } from "~lib/helpers/cxm";
import { ChildrenProps } from "~models";
import BottomNav from "~sections/BottomNav";
import Footer from "~sections/Footer";
import TopNav from "~sections/TopNav";

export default function ClientWrapper({ children }: ChildrenProps) {
  return (
    <SessionProvider>
      <Provider>
        <div
          className={cxm(
            "min-h-screen w-full bg-azure bg-fixed bg-center",
            " dark:bg-zinc-900 dark:text-gray-100"
          )}
        >
          <TopNav />
          <div className="px-4">{children}</div>
          <Footer />
          <BottomNav />
        </div>
      </Provider>
    </SessionProvider>
  );
}
