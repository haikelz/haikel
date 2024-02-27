import Link from "next/link";
import { tw } from "~lib/helpers";

import { Paragraph } from "../typography";

export function TagsList({ tagsList }: { tagsList: string[] }) {
  return (
    <>
      {tagsList.map((item) => (
        <Link data-cy="tag-item" key={item} href={`/tags/${item}`}>
          <button
            type="button"
            aria-label={`tag ${item}`}
            className={tw(
              "px-4 py-1 transition-all",
              "hover:scale-110",
              "bg-base-5 dark:bg-base-2"
            )}
          >
            <Paragraph className="text-center font-medium">{item}</Paragraph>
          </button>
        </Link>
      ))}
    </>
  );
}
