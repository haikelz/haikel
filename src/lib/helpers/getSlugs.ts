import { sync } from "glob";
import { NOTES_PATH } from "@/lib/utils/NOTES_PATH";

export const getSlugs = (): string[] => {
  const paths: string[] = sync(`${NOTES_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
};
