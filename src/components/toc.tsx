"use client";

import { useEffect } from "react";
import tocbot from "tocbot";

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".js-toc",
      contentSelector: ".js-toc-content",
      headingSelector: "h2, h3, h4",
      orderedList: false,
      includeTitleTags: true,
      includeHtml: true,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className="mb-10">
      <span className="font-bold text-xl">Table of Contents</span>
      <div className="js-toc mt-2"></div>
    </div>
  );
}
