import word from "reading-time";

export const getReadingTime = (content: string) => {
  return word(content).text;
};
