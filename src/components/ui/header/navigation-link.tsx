"use client";

import { usePathname } from "next/navigation";
import { tw } from "~lib/helpers";

import { UnderlineLink } from "../typography";

const topNavList = [
  { id: 1, route: "/works", name: "Works" },
  { id: 2, route: "/notes", name: "Notes" },
  { id: 3, route: "/tags", name: "Tags" },
  { id: 4, route: "/guestbook", name: "Guestbook" },
];

export function Navigationlink() {
  const pathname = usePathname();

  return (
    <>
      <div className="space-x-4 hidden sm:block mr-4">
        {topNavList.map((item) => (
          <UnderlineLink
            className={tw(
              pathname === item.route ? "decoration-dashed" : "decoration-none"
            )}
            key={item.id}
            href={item.route}
          >
            {item.name}
          </UnderlineLink>
        ))}
      </div>
    </>
  );
}
