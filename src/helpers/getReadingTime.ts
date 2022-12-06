/** Thanks to: https://bvgsoftware.com/blog/read-time-feature-for-react-markdown-blog */
export const getReadingTime = (content: string) => {
  // words per second
  const wps: number = 275 / 60;
  const regex: RegExp = /\W/;

  let images: number = 0;
  let imageSecs: number = 0;
  let imageFactor: number = 12;

  const words = content.split(" ").filter((word) => {
    if (word.includes("<img")) images += 1;
    return regex.test(word);
  }).length;

  const imageAdjust: number = images * 4;

  while (images) {
    imageSecs += imageFactor;

    if (imageFactor > 3) imageFactor -= 1;
    imageFactor -= 1;
  }

  const minutes: number = Math.ceil(((words - imageAdjust) / wps + imageSecs) / 60);
  return minutes;
};
