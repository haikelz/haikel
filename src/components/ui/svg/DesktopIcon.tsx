import { cxm } from "~lib/helpers";

export function DesktopIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cxm("icon icon-tabler icon-tabler-device-desktop", className)}
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
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path>
      <path d="M7 20h10"></path>
      <path d="M9 16v4"></path>
      <path d="M15 16v4"></path>
    </svg>
  );
}
