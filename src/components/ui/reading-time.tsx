import { useMemo } from "react";
import word from "reading-time";

export default function ReadingTime({ content }: { content: string }) {
  const memoizedReadingTime: string = useMemo(() => word(content).text, [content]);
  return <time>{memoizedReadingTime}</time>;
}
