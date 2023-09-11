"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { tw } from "~lib/helpers";

interface MenuProps {
  menuIcon: ReactNode;
  list: ReactNode;
  contentClassName?: string;
}

export default function Menu({ menuIcon, list, contentClassName }: MenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger data-cy="menu" asChild>
        {menuIcon}
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className={tw(
            "right-0 z-50 mt-2 -translate-x-16 rounded-md bg-white",
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
