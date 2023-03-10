/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle: boolean = searchParams.has("title");
    const title: string | undefined = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Dynamic OG Image";

    return new ImageResponse(
      (
        <div
          tw="flex items-center h-[600px] w-full px-5 py-2"
          style={{
            opacity: 1,
            backgroundSize: "cover",
            backgroundImage:
              "url('https://ik.imagekit.io/haikelz/blog/og-image/haikelz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678430627569')",
          }}
        >
          <div tw="w-1/2 h-full flex flex-col justify-between"></div>
          <div tw="w-1/2 h-full flex items-end flex-col justify-between">
            <p tw="font-bold text-4xl text-white">{title}</p>
            <div tw="flex items-center">
              <img
                tw="w-8 mr-3 h-8 rounded-full"
                src="https://avatars.githubusercontent.com/u/77146709?v=4"
                alt="github profile"
              />
              <p tw="font-bold text-2xl text-white">https://haikel.my.id</p>
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 600 }
    );
  } catch (err) {
    return new Response("Failed to generate OG Image", {
      status: 500,
      statusText: "Failed to generate OG Image",
    });
  }
}
