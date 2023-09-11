import { format } from "date-fns/esm";
import { tw } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";

import { Paragraph } from "../typography";

type GuestsListProps = {
  guestbook: {
    id: string;
    message: string;
    email: string;
    username: string;
    created_at: string;
  }[];
};

export function GuestsList({ guestbook }: GuestsListProps) {
  return (
    <>
      {guestbook.map((guest) => (
        <div id="guest-item" key={guest.id} className="h-full">
          <div>
            <span
              className={tw(
                "cursor-pointer text-xl font-bold",
                "hover:text-blue-500",
                ibmPlexSans.className
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
