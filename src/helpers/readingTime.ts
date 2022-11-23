/** Thanks to: https://bvgsoftware.com/blog/read-time-feature-for-react-markdown-blog */
export const readingTime = (content: string) => {
  const WPS: number = 275 / 60;
  const regex: RegExp = /\w/;

  let images: number = 0;
  let imageSecs: number = 0;
  let imageFactor: number = 12;

  const words: number = content.split(" ").filter((word) => {
    if (word.includes("<img")) images += 1;
    return regex.test(word);
  }).length;

  const imageAdjust: number = images * 4;

  while (images) {
    imageSecs += imageFactor;

    if (imageFactor > 3) imageFactor -= 1;
    images -= 1;
  }

  const minutes: number = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);
  return minutes;
};
