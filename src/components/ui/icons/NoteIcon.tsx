import { cxm } from "~lib/helpers/cxm";
import { IconClassNameProps } from "~models";

export function NoteIcon({ className }: IconClassNameProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cxm("icon icon-tabler icon-tabler-notes", className)}
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
      <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
      <path d="M9 7l6 0"></path>
      <path d="M9 11l6 0"></path>
      <path d="M9 15l4 0"></path>
    </svg>
  );
}
