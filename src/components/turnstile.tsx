"use client";

import {
  Turnstile as ReactTurnstile,
  TurnstileTheme,
} from "@marsidev/react-turnstile";
import { useTheme } from "next-themes";
import { ofetch } from "ofetch";
import { Dispatch, SetStateAction, useRef } from "react";
import { env } from "~env.mjs";

const { NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY } = env;

export default function Turnstile(
  {
    setIsShowLoginGuestbookMethod,
  }: {
    setIsShowLoginGuestbookMethod: Dispatch<SetStateAction<boolean>>;
  }
) {
  const { theme } = useTheme();

  const formRef = useRef<HTMLFormElement>();

  async function handleTurnstile(): Promise<void> {
    const formData = new FormData(formRef.current);
    const token = formData.get("cf-turnstile-response");

    await ofetch("/api/auth/turnstile", {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return (
    <form
      className="mt-3 mb-6"
      method="POST"
      action="/api/auth/turnstile"
      onSubmit={handleTurnstile}
    >
      <ReactTurnstile
        options={{ theme: theme as TurnstileTheme }}
        siteKey={NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
        onSuccess={() => setIsShowLoginGuestbookMethod(true)}
      />
    </form>
  );
}
