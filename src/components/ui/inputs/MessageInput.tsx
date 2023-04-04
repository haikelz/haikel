"use client";

import { forwardRef } from "react";
import { cxm } from "~lib/helpers/cxm";

export const MessageInput = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="my-6 w-full">
      <input
        ref={ref}
        className={cxm(
          "block w-full border-[2.5px] border-black bg-white outline-none",
          "px-4 py-1.5 font-medium transition-all ease-in-out",
          "hover:shadow-light",
          "dark:border-white dark:bg-raisinblack dark:hover:shadow-dark"
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
