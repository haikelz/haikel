/* eslint-disable @next/next/no-img-element */
import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.nextUrl);

    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "Frontend Developer";

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: 35,
              color: "white",
              fontWeight: "700",
              left: 35,
              position: "absolute",
            }}
          >
            <img
              style={{ borderRadius: "100%" }}
              width={28}
              height={28}
              src="https://avatars.githubusercontent.com/u/77146709?v=4"
              alt="Github Profile"
            />
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              haikel.app
            </span>
          </div>
          <div
            style={{
              fontWeight: 700,
              color: "#000000",
              fontSize: 30,
              padding: "0px 5px",
              fontFamily: "sans-serif",
              background: "#FFFFFF",
            }}
          >
            ハキム
          </div>
          <div
            style={{
              marginTop: 15,
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
