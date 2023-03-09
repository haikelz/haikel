import { SetStateAction } from "jotai";
import { memo } from "react";
import { twJoin } from "tailwind-merge";

type MessageBarProps = {
  message: string;
  setMessage: (update: SetStateAction<string>) => void;
};

export const MessageBar = ({ message, setMessage }: MessageBarProps) => {
  return (
    <div className="my-6 w-full">
      <input
        className={twJoin(
          "block w-full border-[2.5px] border-black bg-white outline-none",
          "py-1.5 px-4 font-medium transition-all ease-in-out",
          "hover:shadow-light",
          "dark:border-white dark:bg-raisinblack dark:hover:shadow-dark"
        )}
        type="text"
        name="message"
        placeholder="Add your message...."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
    </div>
  );
};

memo(MessageBar);
