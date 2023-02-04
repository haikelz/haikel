import Image from "next/image";
import { memo } from "react";

type WorkImageProps = {
  src: string;
  alt: string;
};

const WorkImage = ({ src, alt, ...props }: WorkImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      placeholder="blur"
      blurDataURL={src}
      loading="lazy"
      {...props}
    />
  );
};

export default memo(WorkImage);
