"use client";

import { useAtom } from "jotai";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { match } from "ts-pattern";
import TransitionLayout from "~components/transition-layout";
import { useDisableScroll } from "~hooks";
import { tw } from "~lib/helpers";
import { isOpenAtom } from "~store";

import { UnderlineLink } from "../typography";

const topNavList = [
  { id: 1, route: "/works", name: "Works" },
  { id: 2, route: "/notes", name: "Notes" },
  { id: 3, route: "/tags", name: "Tags" },
  { id: 4, route: "/guestbook", name: "Guestbook" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  const pathname = usePathname();

  useDisableScroll(isOpen);

  return (
    <>
      {match({ isOpen: isOpen })
        .with({ isOpen: true }, () => (
          <TransitionLayout
            className={tw(
              "fixed flex justify-center z-50 items-center min-h-screen inset-0 w-full",
              "bg-[#EFFFFD]/80 backdrop-blur-md dark:bg-base-0/80 p-4"
            )}
            transition={{ duration: 0.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="fixed right-0 top-4">
              <OpenMenu />
            </div>
            <div
              className={tw(
                "space-x-4 z-50 flex border border-solid border-base-5 rounded-lg bg-white dark:bg-base-1",
                "shadow-sm items-center justify-center w-fit p-4"
              )}
            >
              {topNavList.map((item) => (
                <UnderlineLink
                  role="button"
                  className={tw(
                    pathname.includes(item.route)
                      ? "decoration-dashed"
                      : "decoration-none"
                  )}
                  key={item.id}
                  href={item.route}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </UnderlineLink>
              ))}
            </div>
          </TransitionLayout>
        ))
        .otherwise(() => null)}
    </>
  );
}

export function OpenMenu() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  return (
    <button
      type="button"
      aria-label="menu"
      onClick={() => setIsOpen(!isOpen)}
      className={tw(
        "rounded-md block mr-3",
        "p-1",
        "bg-base-5",
        "dark:bg-base-1 font-bold"
      )}
      title="open and close menu"
    >
      {match({ isOpen: isOpen })
        .with({ isOpen: true }, () => <XIcon />)
        .otherwise(() => (
          <MenuIcon />
        ))}
    </button>
  );
}
