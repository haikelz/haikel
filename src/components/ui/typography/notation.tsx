"use client";

import { ChildrenProps } from "@types";
import { useTheme } from "next-themes";
import { RoughNotation, RoughNotationProps } from "react-rough-notation";

type NotationProps = RoughNotationProps &
  ChildrenProps & {
    lightModeColor: string;
    darkModeColor: string;
  };

export function Notation(
  { children, lightModeColor, darkModeColor, type, ...props }: NotationProps
) {
  const { theme } = useTheme();

  return (
    <RoughNotation
      type={type}
      show
      color={theme === "dark" ? darkModeColor : lightModeColor}
      multiline={true}
      {...props}
    >
      {children}
    </RoughNotation>
  );
}
