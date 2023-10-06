import Link from "next/link";
import { tw } from "~lib/helpers";

import { Paragraph } from "../typography";

export function TagsList({ tagsList }: { tagsList: string[] }) {
  return (
    <>
      {tagsList.map((item, index) => (
        <Link data-cy="tag-item" key={item} href={`/tags/${item}`}>
          <button
            type="button"
            aria-label={`tag ${item}`}
            className={tw(
              "px-4 py-1 transition-all",
              "hover:scale-110",
              index % 2 === 0
                ? "bg-gray-200 dark:bg-base-2"
                : index % 5 === 0
                ? "bg-blue-300 dark:bg-blue-600"
                : "bg-base-4 dark:bg-gray-600"
            )}
          >
            <Paragraph className="text-center font-medium">{item}</Paragraph>
          </button>
        </Link>
      ))}
    </>
  );
}
