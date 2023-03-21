import { ImageLoaderProps } from "next/image";

export const imageKitLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const params: string[] = [`w-${width}`];
  const paramsString: string = params.join(",");

  let urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT as string;

  if (src[0] === "/") src = src.slice(1);
  if (quality) params.push(`q-${quality}`);
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);

  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};
