import { createContext } from "react";

interface link {
  linkPreview: string | undefined;
  linkGithub: string | undefined;
}

export const LinkContext = createContext<link | string>("");
