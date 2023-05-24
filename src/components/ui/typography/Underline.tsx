import { cxm } from "~lib/helpers/cxm";

export function Underline() {
  return (
    <div
      className={cxm("mb-2 w-full rounded-sm", "border-b-[3px] border-red", "dark:border-blue-500")}
    ></div>
  );
}
