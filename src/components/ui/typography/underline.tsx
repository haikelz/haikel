import { tw } from "~lib/utils/tw";

export function Underline() {
  return (
    <div
      className={tw(
        "mb-2 w-full rounded-full",
        "border-b-[3px] border-base-0",
        "dark:border-base-5"
      )}
    ></div>
  );
}
