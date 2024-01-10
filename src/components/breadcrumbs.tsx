"use client";

import htmr from "htmr";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname
    .slice(1)
    .replace("/", " <span> > </span> ")
    .split(" ");

  const clampSlug =
    pathnames.slice(0, pathnames.length - 1).join(" ") +
    `<span className="font-black">${pathnames[pathnames.length - 1].slice(
      0,
      10
    )}${pathnames[pathnames.length - 1].length < 10 ? "" : "..."}</span>`;

  return (
    <div className="bg-base-4 dark:bg-base-1 rounded-md font-semibold px-2 py-0.5 w-fit">
      <Link
        href="/"
        className="hover:font-black hover:underline hover:underline-offset-4"
      >
        Home
      </Link>{" "}
      {" > "}
      <span>{htmr(clampSlug)}</span>
    </div>
  );
}
