import { cxm } from "~lib/helpers";
import { IconClassNameProps } from "~models";

export function GuestbookIcon({ className }: IconClassNameProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cxm("icon icon-tabler icon-tabler-address-book", className)}
      width={28}
      height={28}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path>
      <path d="M10 16h6"></path>
      <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M4 8h3"></path>
      <path d="M4 12h3"></path>
      <path d="M4 16h3"></path>
    </svg>
  );
}
