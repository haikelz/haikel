"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { tw } from "~lib/helpers";

type MenuProps = {
  menuIcon: ReactNode;
  list: ReactNode;
  contentClassName?: string;
};

export default function Menu({ menuIcon, list, contentClassName }: MenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger data-cy="menu" asChild>
        {menuIcon}
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className={tw(
            "z-50 mt-2 right-0 -translate-y-4 -translate-x-12 rounded-md bg-white",
            "p-2 drop-shadow-md",
            "dark:bg-base-1 dark:text-gray-100",
            contentClassName
          )}
        >
          {list}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}