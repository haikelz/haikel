import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function ogHandler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0) : "Haikel's OG Image";

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {title}
        </div>
      ),
      {
        width: 1200,
        height: 640,
      }
    );
  } catch (err) {
    return new Response("Failed to generate OG Image", {
      status: 500,
      statusText: "Seems like the server is error",
    });
  }
}
