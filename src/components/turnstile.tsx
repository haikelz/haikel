"use client";

import { Turnstile as ReactTurnstile } from "@marsidev/react-turnstile";
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
      className="mt-3 mb-7"
      method="POST"
      action="/api/auth/turnstile"
      onSubmit={handleTurnstile}
    >
      <ReactTurnstile
        options={{ theme: "light" }}
        siteKey={NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
        onSuccess={() => setIsShowLoginGuestbookMethod(true)}
      />
    </form>
  );
}
