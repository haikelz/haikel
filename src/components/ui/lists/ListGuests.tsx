import { twMerge } from "tailwind-merge";
import { spaceGrotesk } from "~lib/utils/fonts";
import { Paragraph } from "~ui/typography";

type ListGuestsProps = {
  guestbook: [{ id: string; created_at: string; email: string; username: string; message: string }];
};

const ListGuests = ({ guestbook }: ListGuestsProps) => {
  const convertToLocalTime = (format: string) => {
    return new Date(format).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <>
      {guestbook.map((guest) => (
        <div key={guest.id} className="h-full">
          <div>
            <span
              className={twMerge(
                "cursor-pointer text-xl font-bold",
                "hover:text-blue-500",
                spaceGrotesk.className
              )}
            >
              {guest.message}
            </span>
          </div>
          <Paragraph className="mt-2 font-medium tracking-wide">
            {guest.username}. {convertToLocalTime(guest.created_at)}
          </Paragraph>
        </div>
      ))}
    </>
  );
};

export default ListGuests;
