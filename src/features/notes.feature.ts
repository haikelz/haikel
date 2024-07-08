import { Notes, allNotes } from "contentlayer/generated";
import { eq } from "drizzle-orm";
import db from "drizzle/db";
import { pageviews, reactions } from "drizzle/db/schema";

export const sortedAllNotes: Notes[] = allNotes.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export async function postPageViews(input: { slug: string }) {
  const data = await db
    .select()
    .from(pageviews)
    .where(eq(pageviews.slug, input.slug))
    .all();
  const count = !data.length ? 0 : Number(data[0].count);

  await db
    .insert(pageviews)
    .values({
      slug: input.slug,
      count: 1,
    })
    .onConflictDoUpdate({
      target: pageviews.slug,
      set: {
        count: count + 1,
      },
    })
    .returning()
    .get();

  return {
    count: count + 1,
  };
}

export async function getReactions(input: { slug: string }) {
  const data = await db
    .select()
    .from(reactions)
    .where(eq(reactions.slug, input.slug))
    .all();

  const love = !data.length ? 0 : Number(data[0].love);

  return {
    love,
  };
}

export async function postReactions(input: { slug: string }) {
  const data = await db
    .select()
    .from(reactions)
    .where(eq(reactions.slug, input.slug))
    .all();

  const love = !data.length ? 0 : Number(data[0].love);

  await db
    .insert(reactions)
    .values({
      slug: input.slug,
      love: 1,
    })
    .onConflictDoUpdate({
      target: reactions.slug,
      set: {
        love: love + 1,
      },
    })
    .returning()
    .get();

  return {
    love: love + 1,
  };
}
