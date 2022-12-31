import { memo } from "react";

export const Underline = memo(() => {
  return (
    <div className="mb-2 w-full rounded-sm border-b-[3px] border-fireopal dark:border-crayola"></div>
  );
});

Underline.displayName = "Underline";
