export const matchSearch = (search: string) => {
  return search
    .toLowerCase()
    .match(/[A-Za-z0-9]\s*/gi)
    ?.join("");
};
