"use client";

import { Session } from "next-auth";
import { SyntheticEvent, useRef } from "react";
import supabase from "~lib/utils/supabase";
import { MessageInput } from "~ui/inputs";

export default function Form({ session }: { session: Session }) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    try {
      const { error } = await supabase.from("guestbook").insert([
        {
          message: ref.current?.value,
          username: session?.user?.name,
          email: session?.user?.email,
        },
      ]);

      if (error) throw error;
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <MessageInput ref={ref} />
    </form>
  );
}
