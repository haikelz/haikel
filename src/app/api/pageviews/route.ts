import { eq } from "drizzle-orm";
import db from "drizzle/db";
import { pageviews } from "drizzle/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("must be json!", { status: 400 });
  }

  const body: any = await req.json();

  let slug: string | undefined = undefined;
  let title: string | undefined = undefined;

  if ("slug" in body) {
    slug = body.slug;
  }

  if ("title" in body) {
    title = body.title;
  }

  if (!slug && !title) {
    return new NextResponse("Slug and title are not found!", { status: 400 });
  } else if (!slug) {
    return new NextResponse("Slug are not found!", { status: 400 });
  } else if (!title) {
    return new NextResponse("Title are not found!", { status: 400 });
  }

  const data = await db
    .select()
    .from(pageviews)
    .where(eq(pageviews.slug, slug))
    .all();
  const count = !data.length ? 0 : Number(data[0].count);

  return NextResponse.json({
    count,
  });
}

export async function POST(req: NextRequest) {
  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("must be json!", { status: 400 });
  }

  const body: any = await req.json();

  let slug: string | undefined = undefined;
  let title: string | undefined = undefined;

  if ("slug" in body) {
    slug = body.slug;
  }

  if ("title" in body) {
    title = body.title;
  }

  if (!slug && !title) {
    return new NextResponse("Slug and title are not found!", { status: 400 });
  } else if (!slug) {
    return new NextResponse("Slug are not found!", { status: 400 });
  } else if (!title) {
    return new NextResponse("Title are not found!", { status: 400 });
  }

  const data = await db
    .select()
    .from(pageviews)
    .where(eq(pageviews.slug, slug))
    .all();
  const count = !data.length ? 0 : Number(data[0].count);

  await db
    .insert(pageviews)
    .values({
      slug,
      title,
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

  return NextResponse.json({
    count: count + 1,
  });
}
