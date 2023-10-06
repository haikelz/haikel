export function randomize<T>(arr: Array<T>): Array<T> {
  for (let i = arr.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    const currentData = arr[i];
    const dataToSwap = arr[swapIndex];

    arr[i] = dataToSwap;
    arr[swapIndex] = currentData;
  }

  return arr;
}
