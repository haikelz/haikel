"use client";

import { forwardRef } from "react";
import { cxm } from "~lib/helpers";

export const MessageInput = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="my-6 w-full">
      <input
        ref={ref}
        className={cxm(
          "block w-full border-[2.5px] border-base-1 bg-white outline-none",
          "px-4 py-1.5 font-medium transition-all",
          "focus:shadow-light",
          "dark:border-white dark:bg-base-1 dark:focus:shadow-dark"
        )}
        type="text"
        name="message"
        placeholder="Add your message...."
        required
        {...props}
      />
    </div>
  );
});

MessageInput.displayName = "MessageInput";
