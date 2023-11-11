"use client";

import {
  BookMarkedIcon,
  ListIcon,
  LucideIcon,
  ScrollTextIcon,
  TagsIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tw } from "~lib/helpers";

const topNavList = [
  { id: 1, route: "/works", icon: ListIcon },
  { id: 2, route: "/notes", icon: ScrollTextIcon },
  { id: 3, route: "/tags", icon: TagsIcon },
  { id: 4, route: "/guestbook", icon: BookMarkedIcon },
];

export function Navigationlink() {
  const pathname = usePathname();

  return (
    <>
      {topNavList.map((item) => {
        const Icon: LucideIcon = item.icon;
        return (
          <Link key={item.id} href={item.route}>
            <button
              type="button"
              aria-label={item.route}
              className={tw(
                "rounded-sm p-1 font-bold",
                pathname.includes(item.route)
                  ? "bg-gray-200 dark:bg-base-2"
                  : ""
              )}
            >
              <Icon size={22} />
            </button>
          </Link>
        );
      })}
    </>
  );
}
