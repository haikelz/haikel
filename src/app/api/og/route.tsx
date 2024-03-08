/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { CONDITION } from "~lib/utils/constants";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.nextUrl);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Frontend Web Developer";

    const interBold = fetch(
      new URL(
        `${
          CONDITION === "development"
            ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL
            : process.env.NEXT_PUBLIC_PRODUCTION_URL
        }/fonts/Inter/Inter-Bold.ttf`,
        import.meta.url
      )
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          data-cy="opengraph"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url('${
              CONDITION === "development"
                ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL
                : process.env.NEXT_PUBLIC_PRODUCTION_URL
            }/img/gradient.png')`,
            padding: 60,
            color: "#ECF2F8",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 60,
              top: 100,
              fontSize: 70,
              fontWeight: "bolder",
            }}
          >
            {title}
          </span>
          <span
            style={{
              position: "absolute",
              left: 60,
              bottom: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/77146709?v=4"
              alt="Haikel's profile"
              style={{
                width: 100,
                height: 100,
                borderRadius: "100%",
                marginRight: 18,
              }}
            />
            <span style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 40,
                  textAlign: "center",
                }}
              >
                Haikel Ilham Hakim
              </div>
              <div
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "normal",
                  marginTop: 5,
                }}
              >
                https://haikel.app
              </div>
            </span>
          </span>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter Bold",
            data: await interBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (err) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
