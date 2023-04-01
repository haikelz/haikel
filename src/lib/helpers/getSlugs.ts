import { sync } from "fast-glob";

export function getSlugs(path: string) {
  const paths: Array<string> = sync(`${path}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug] = fileName.split(".");

    return slug;
  });
}
