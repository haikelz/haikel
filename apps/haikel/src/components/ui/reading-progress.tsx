"use client";

import { useWidth } from "~hooks";
import { cxm } from "~lib/helpers";

export default function ReadingProgress() {
  const width = useWidth();

  return (
    <div
      style={{ width: width + "%" }}
      className={cxm("fixed z-10 h-0.5 bg-rose-400", "dark:bg-blue-500")}
    ></div>
  );
}
