"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.slice(1).split("/");

  const lastIndexPathname = pathnames[pathnames.length - 1];

  return (
    <div className="bg-base-5 dark:bg-base-1 rounded-md font-semibold px-2 py-1 w-fit">
      <Link href="/">Home</Link> <span>{" > "}</span>
      {pathnames.slice(0, pathnames.length - 1).map((item, index) => (
        <Fragment key={index + 1}>
          <Link href={`/${item}`}>{item}</Link>
          <span>{" > "}</span>
        </Fragment>
      ))}
      <Link
        href={`/${pathnames.join("/")}`}
        className="font-black underline decoration-dashed underline-offset-4"
      >
        {lastIndexPathname.length > 10
          ? lastIndexPathname.slice(0, 10) + "..."
          : lastIndexPathname}
      </Link>
    </div>
  );
}
