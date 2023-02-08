import readingTime from "reading-time";

export const getReadingTime = (content: string) => {
  const time: number = readingTime(content).minutes;
  const timeToStr: string = time.toString();

  /**
   * Logikanya: Jika hasilnya dibawah 50 detik, ubah formatnya ke detik, dari semula 0.xx ke xx
   * Masalahnya adalah ada format yang waktunya kayak gini: 0.xxx
   *
   * Untuk menyelesaikan hal tersebut:
   *
   * - Kita ubah timenya ke string, terus slice dari index ke-2 sampai 4
   * - Abis itu tambahin dengan bilangan index ke-5
   * - Setelah ditambahkan, maka ubah lagi tipe datanya ke number, dan bulatkan ke bilangan terdekat dengan Math.round
   */
  return time < 0.5
    ? `${
        timeToStr.slice(2).length >= 3
          ? Math.round(Number(`${timeToStr.slice(2, 4)}.${timeToStr.slice(4)}`))
          : timeToStr.slice(2)
      } Sec`
    : `${Math.round(time)} Min`;
};
