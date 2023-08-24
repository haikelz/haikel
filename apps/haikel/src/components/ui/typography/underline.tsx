import { tw } from "~lib/helpers";

export function Underline() {
  return (
    <div
      className={tw("mb-2 w-full rounded-sm", "border-b-[3px] border-red", "dark:border-blue-500")}
    ></div>
  );
}
