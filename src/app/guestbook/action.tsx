"use client";

import { signIn, signOut } from "next-auth/react";
import { cxm } from "~lib/helpers/cxm";
import { GithubIcon } from "~ui/icons";

export function SignOutButton() {
  return (
    <button
      className={cxm(
        "cursor-pointer font-bold",
        "underline decoration-dashed underline-offset-[5px]",
        "hover:text-blue-500 hover:decoration-blue-500"
      )}
      type="button"
      aria-label="sign out"
      onClick={() => signOut()}
    >
      here
    </button>
  );
}

export function SignInButton() {
  return (
    <button
      type="button"
      aria-label="sign in"
      className={cxm(
        "flex items-center justify-center space-x-3 rounded-md",
        "bg-zinc-800",
        "px-3.5 py-2",
        "font-semibold text-white",
        "hover:bg-zinc-700"
      )}
      onClick={() => signIn("github")}
    >
      <GithubIcon />
      <span className="text-base md:text-lg">Sign In with Github</span>
    </button>
  );
}
