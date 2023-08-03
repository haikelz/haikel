/* eslint-disable @next/next/no-img-element */
import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.nextUrl);

    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "Frontend Crafter";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
          }}
        >
          <span
            style={{
              fontWeight: 700,
              color: "#000000",
              fontSize: 30,
              padding: "0px 5px",
              fontFamily: "sans-serif",
              marginLeft: 8,
              textAlign: "center",
              background: "#FFFFFF",
            }}
          >
            haikel.app
          </span>
          <div
            style={{
              marginTop: 10,
              fontSize: 20,
              color: "white",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            {title}
          </div>
        </div>
      ),
      { width: 800, height: 400 }
    );
  } catch (err) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
