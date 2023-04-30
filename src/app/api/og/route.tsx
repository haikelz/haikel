/* eslint-disable @next/next/no-img-element */
import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.nextUrl);

    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "Haikel's Website";

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
            backgroundColor: "#fff",
            fontSize: 32,
            fontWeight: 600,
            backgroundImage:
              "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ borderRadius: "100%" }}
              width={24}
              height={24}
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
              haikel.my.id
            </span>
          </div>
          <div style={{ fontWeight: 600 }}>ハキム</div>
          <div
            style={{
              marginTop: 10,
              backgroundColor: "black",
              color: "white",
              padding: "3px 10px 3px 10px",
              textAlign: "center",
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
