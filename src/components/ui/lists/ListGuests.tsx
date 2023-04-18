import format from "date-fns/format";
import { cxm } from "~lib/helpers/cxm";
import { spaceGrotesk } from "~lib/utils/fonts";
import { Paragraph } from "~ui/typography";

type ListGuestsProps =
  | {
      [x: string]: any;
    }[]
  | undefined;

export function ListGuests({ guestbook }: { guestbook: ListGuestsProps }) {
  function convertToLocalTime(time: string) {
    return format(new Date(time), "LLLL d, yyyy");
  }

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
            {guest.created_at !== "" ? `. ${convertToLocalTime(guest.created_at)}` : null}
          </Paragraph>
        </div>
      ))}
    </>
  );
}
