"use client";

import { cx } from "classix";
import { forwardRef } from "react";
import { cxm } from "~lib/helpers";

export const MessageInput = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="my-6 flex w-full items-center">
      <input
        ref={ref}
        className={cxm(
          "block w-full border-[2.5px] border-base-1 bg-white outline-none",
          "px-4 py-1.5 font-medium",
          "dark:border-base-5 dark:bg-base-0"
        )}
        type="text"
        name="message"
        required
        placeholder="Add your message...."
        {...props}
      />
      <button
        type="submit"
        aria-label="submit"
        className={cx(
          "border-[2.5px] border-base-1 bg-base-0 outline-none",
          "px-4 py-1.5 font-semibold text-white",
          "dark:border-base-5 dark:bg-base-5 dark:text-base-1"
        )}
      >
        Submit
      </button>
    </div>
  );
});

MessageInput.displayName = "MessageInput";
