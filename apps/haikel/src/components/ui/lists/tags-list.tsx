import Link from "next/link";
import { tw } from "~lib/helpers";

import { Paragraph } from "../typography";

export function TagsList({ tagsList }: { tagsList: string[] }) {
  return (
    <>
      {tagsList.map((item) => (
        <Link key={item} href={`/tags/${item}`}>
          <button
            type="button"
            aria-label={`tag ${item}`}
            className={tw("bg-base-5 px-4 py-1 transition-all", "hover:scale-110 dark:bg-base-1")}
          >
            <Paragraph className="text-center font-medium">{item}</Paragraph>
          </button>
        </Link>
      ))}
    </>
  );
}
