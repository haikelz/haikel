import { GuestbookProps } from "@types";
import { eq, sql } from "drizzle-orm";
import db from "drizzle/db";
import { guestbook } from "drizzle/db/schema";

export async function getGuestbook(): Promise<GuestbookProps[] | undefined> {
  try {
    const response = await db
      .select({
        id: guestbook.id,
        message: guestbook.message,
        email: guestbook.email,
        username: guestbook.username,
        created_at: guestbook.created_at,
      })
      .from(guestbook)
      .orderBy(sql`${guestbook.id} desc`)
      .all();

    return response;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

type PostGuestbookProps = Omit<GuestbookProps, "id" | "created_at">;

export async function postGuestbook(input: PostGuestbookProps): Promise<void> {
  try {
    const { message, email, username } = input;

    await db
      .insert(guestbook)
      .values({ message: message, email: email, username: username });
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function deleteGuestbook(input: { id: number }): Promise<void> {
  try {
    await db.delete(guestbook).where(eq(guestbook.id, input.id));
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function patchGuestbook(input: {
  message: string;
  id: number;
}): Promise<void> {
  try {
    await db
      .update(guestbook)
      .set({ message: input.message })
      .where(eq(guestbook.id, input.id));
  } catch (err: any) {
    throw new Error(err.message);
  }
}
