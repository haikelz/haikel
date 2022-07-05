import { createContext } from "react";

export const ChangeThemeContext = createContext<(() => void) | undefined>(
  undefined
);
