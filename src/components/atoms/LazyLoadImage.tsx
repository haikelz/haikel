import { imageKitLoader } from "@/helpers/imageKitLoader";
import { LazyLoadImageProps } from "@/types";
import Image from "next/image";
import { memo } from "react";

export const LazyLoadImage = memo(({ src, alt }: LazyLoadImageProps) => {
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
});

LazyLoadImage.displayName = "LazyLoadImage";
