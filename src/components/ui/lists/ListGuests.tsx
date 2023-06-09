import format from "date-fns/format";
import { cxm } from "~lib/helpers";
import { spaceGrotesk } from "~lib/utils/fonts";
import { Paragraph } from "~ui/typography";

type ListGuestsProps =
  | {
      [x: string]: any;
    }[]
  | undefined;

export function ListGuests({ guestbook }: { guestbook: ListGuestsProps }) {
  return (
    <>
      {guestbook?.map((guest) => (
        <div key={guest.id} className="h-full">
          <div>
            <span
              className={cxm(
                "cursor-pointer text-xl font-bold",
                "hover:text-blue-500",
                spaceGrotesk.className
              )}
            >
              {guest.message}
            </span>
          </div>
          <Paragraph className="mt-2 font-medium tracking-wide">
            {guest.username}
            {guest.created_at !== ""
              ? `. ${format(new Date(guest.created_at), "LLLL d, yyyy")}`
              : null}
          </Paragraph>
        </div>
      ))}
    </>
  );
}
