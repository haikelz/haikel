import { imageKitLoader } from "@/helpers/imageKitLoader";
import { LazyLoadImageProps } from "@/types";
import Image from "next/image";

export const LazyLoadImage = ({ src, alt }: LazyLoadImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      placeholder="blur"
      blurDataURL={src}
      loader={imageKitLoader}
    />
  );
};
