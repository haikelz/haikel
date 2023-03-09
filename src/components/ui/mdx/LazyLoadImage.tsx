import Image from "next/image";
import { memo } from "react";
import { imageKitLoader } from "~lib/helpers/imageKitLoader";

type LazyLoadImageProps = {
  src: string;
  alt: string;
};

const LazyLoadImage = ({ src, alt, ...props }: LazyLoadImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      placeholder="blur"
      blurDataURL={src}
      loading="lazy"
      loader={imageKitLoader}
      {...props}
    />
  );
};

export default memo(LazyLoadImage);
