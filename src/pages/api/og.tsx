/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "Haikel";

    return new ImageResponse(
      (
        <div tw="flex w-full h-full flex-col justify-end bg-slate-200 items-stretch">
          <img
            tw="flex-1 w-full h-full"
            style={{ objectFit: "cover", objectPosition: "center" }}
            src={`${process.env.NEXT_PUBLIC_URL_ENDPOINT}/blog/og-image/malam.jpeg`}
            alt="Open Graph"
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (err: any) {
    console.log(err.message);
    return new Response("Failed to generate the image", { status: 500 });
  }
}
