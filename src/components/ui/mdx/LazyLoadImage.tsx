import { atom, useAtom } from "jotai";
import Image from "next/image";
import { memo } from "react";
import { twJoin } from "tailwind-merge";
import { imageKitLoader } from "~lib/helpers/imageKitLoader";

type LazyLoadImageProps = {
  src: string;
  alt: string;
};

const isLoadingAtom = atom<boolean>(true);

const LazyLoadImage = ({ src, alt }: LazyLoadImageProps) => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  return (
    <Image
      className={twJoin(
        "duration-700 ease-in-out group-hover:opacity-75",
        isLoading ? "blur-lg grayscale" : "blur-0 grayscale-0"
      )}
      src={src}
      alt={alt}
      width={500}
      height={500}
      loading="lazy"
      loader={imageKitLoader}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default memo(LazyLoadImage);
