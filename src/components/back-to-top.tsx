"use client";

import { tw } from "~lib/helpers";

export default function BackToTop() {
  return (
    <button
      type="button"
      aria-label="back to top"
      className={tw(
        "w-fit cursor-pointer font-bold",
        "text-base leading-[1.75] underline decoration-dashed underline-offset-[5px]",
        "hover:text-blue-500 hover:decoration-blue-500",
        "md:leading-[1.7777778]"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Back to top
    </button>
  );
}
