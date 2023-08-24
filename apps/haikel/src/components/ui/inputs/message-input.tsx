"use client";

import { forwardRef } from "react";
import { tw } from "~lib/helpers";

export const MessageInput = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="my-6 w-full relative">
      <input
        ref={ref}
        className={tw(
          "block w-full border-2 border-base-0",
          "focus:border-blue-500 focus:ring-blue-500 focus:ring-1",
          "dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-1",
          "dark:border-base-5 bg-white dark:bg-base-0",
          "rounded-md",
          "px-4 py-1.5 font-medium outline-none"
        )}
        type="text"
        name="message"
        required
        placeholder="Add your message...."
        {...props}
      />
    </div>
  );
});

MessageInput.displayName = "MessageInput";
