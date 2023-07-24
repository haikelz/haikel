"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function Comments() {
  const { theme } = useTheme();

  return (
    <div className="mt-12">
      <Giscus
        repo="haikelz/haikel"
        repoId="R_kgDOGrfJAA"
        category="Notes Comments"
        categoryId="DIC_kwDOGrfJAM4CX9zJ"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme === "dark" ? "dark" : "light"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
