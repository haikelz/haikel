import { cxm } from "~lib/helpers";
import { IconClassNameProps } from "~models";

export function WorkIcon({ className }: IconClassNameProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cxm("icon icon-tabler icon-tabler-list-details", className)}
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
      <path d="M13 5h8"></path>
      <path d="M13 9h5"></path>
      <path d="M13 15h8"></path>
      <path d="M13 19h5"></path>
      <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
      <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
    </svg>
  );
}