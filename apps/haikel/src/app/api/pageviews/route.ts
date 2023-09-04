import { Redis } from "@upstash/redis/nodejs";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

async function handler(req: NextRequest): Promise<NextResponse> {
  if (req.method !== "POST") {
    return new NextResponse("Only POST Method are allowed!", { status: 405 });
  }

  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("must be json", { status: 400 });
  }

  const body = await req.json();

  let slug: string | undefined = undefined;

  if ("slug" in body) {
    slug = body.slug;
  }

  if (!slug) {
    return new NextResponse("Slug are not found!", { status: 400 });
  }

  const ip = req.ip;

  if (ip) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip));
    const hash = Array.from(new Uint8Array(buf))
      .map((item) => item.toString(16).padStart(2, "0"))
      .join("");

    const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
      nx: true,
      ex: 24 * 3600,
    });

    if (!isNew) {
      new NextResponse(null, { status: 202 });
    }
  }

  await redis.incr(["pageviews", "notes", slug].join(":"));
  return new NextResponse(null, { status: 202 });
}

export { handler as GET, handler as POST };
