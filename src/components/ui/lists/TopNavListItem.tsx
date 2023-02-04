import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { topNavList } from "~lib/utils/data";
import { spaceGrotesk } from "~lib/utils/fonts";

const TopNavListItem = () => {
  const path = usePathname();

  return (
    <>
      {topNavList.map((nav) => (
        <Link
          role="button"
          className={twMerge(
            "cursor-pointer rounded-sm",
            "px-1 text-base font-semibold active:bg-pink-100 active:dark:bg-slate-800",
            path?.includes(nav.href)
              ? "gradient underline decoration-[#0093E9] decoration-dashed underline-offset-[5px]"
              : "",
            spaceGrotesk.className
          )}
          href={nav.href}
          key={nav.id}
          aria-label={nav.text}
        >
          {nav.text}
        </Link>
      ))}
    </>
  );
};

export default TopNavListItem;
