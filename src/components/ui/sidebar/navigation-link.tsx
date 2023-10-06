"use client";

import { IconAddressBook, IconListDetails, IconNotes, IconTags } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tw } from "~lib/helpers";

const topNavList = [
  { id: 1, route: "/works", icon: IconListDetails },
  { id: 2, route: "/notes", icon: IconNotes },
  { id: 3, route: "/tags", icon: IconTags },
  { id: 4, route: "/guestbook", icon: IconAddressBook },
];

export function Navigationlink() {
  const pathname = usePathname();

  return (
    <>
      {topNavList.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.id} href={item.route}>
            <button
              type="button"
              aria-label={item.route}
              className={tw(
                "rounded-sm p-1 font-bold",
                pathname.includes(item.route) ? "bg-gray-200 dark:bg-base-2" : ""
              )}
            >
              <Icon size={23} />
            </button>
          </Link>
        );
      })}
    </>
  );
}
