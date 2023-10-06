"use client";

import { useWidth } from "~hooks";
import { tw } from "~lib/helpers";

export default function ReadingProgress() {
  const width = useWidth();

  return (
    <div
      style={{ width: width + "%" }}
      className={tw("fixed z-50 h-0.5 bg-rose-400", "dark:bg-blue-500")}
    ></div>
  );
}
