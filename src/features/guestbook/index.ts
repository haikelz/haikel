import { GuestbookProps } from "@types";
import { eq, sql } from "drizzle-orm";
import { guestbook } from "drizzle/schema";
import db from "~lib/utils/db";

type GetGuestbookProps = GuestbookProps & { created_at: string };

export async function getGuestbook(): Promise<GetGuestbookProps[] | undefined> {
  try {
    const response = await db
      .select({
        id: guestbook.id,
        message: guestbook.message,
        email: guestbook.email,
        username: guestbook.username,
        created_at: guestbook.createdAt,
      })
      .from(guestbook)
      .orderBy(sql`${guestbook.id} desc`);

    return response;
  } catch (err) {
    console.error(err);
  }
}

type PostGuestbookProps = Omit<GuestbookProps, "id" | "created_at">;

export async function postGuestbook(input: PostGuestbookProps): Promise<void> {
  try {
    const { message, email, username } = input;

    await db
      .insert(guestbook)
      .values({ message: message, email: email, username: username });
  } catch (err) {
    console.error(err);
  }
}

export async function deleteGuestbook(input: { id: number }): Promise<void> {
  try {
    await db.delete(guestbook).where(eq(guestbook.id, input.id));
  } catch (err) {
    console.error(err);
  }
}

export async function patchGuestbook(
  input: {
    message: string;
    id: number;
  }
): Promise<void> {
  try {
    await db
      .update(guestbook)
      .set({ message: input.message })
      .where(eq(guestbook.id, input.id));
  } catch (err) {
    console.error(err);
  }
}
