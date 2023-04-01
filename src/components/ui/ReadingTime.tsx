import { useMemo } from "react";
import word from "reading-time";

const getReadingTime = (content: string) => {
  return word(content).text;
};

export default function ReadingTime({ content }: { content: string }) {
  const memoizedReadingTime: string = useMemo(() => getReadingTime(content), [content]);
  return <span>{memoizedReadingTime}</span>;
}
