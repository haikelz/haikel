import { Turnstile as ReactTurnstile } from "@marsidev/react-turnstile";
import { useRef, type Dispatch, type SetStateAction } from "react";
import { env } from "~lib/utils/constants";

const { PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY } = env;

export default function Turnstile({
  setIsShowLoginGuestbookMethod,
}: {
  setIsShowLoginGuestbookMethod: Dispatch<SetStateAction<boolean>>;
}) {
  const formRef = useRef<HTMLFormElement>();

  async function handleTurnstile(): Promise<void> {
    const formData = new FormData(formRef.current);
    const token = formData.get("cf-turnstile-response");

    await fetch("/api/auth/turnstile", {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
        siteKey={PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
        onSuccess={() => setIsShowLoginGuestbookMethod(true)}
      />
    </form>
  );
}
