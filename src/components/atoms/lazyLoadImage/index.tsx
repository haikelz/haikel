import { cn } from "@/helpers/cn";
import { imageKitLoader } from "@/helpers/imageKitLoader";
import { isLoadingAtom } from "@/store";
import { LazyLoadImageProps } from "@/types";
import { useAtom } from "jotai";
import Image from "next/image";

export const LazyLoadImage = ({ src, alt }: LazyLoadImageProps) => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  return (
    <Image
      className={cn(
        "duration-700 ease-in-out",
        isLoading ? "grayscale blur-2xl" : "grayscale-0 blur-0"
      )}
      onLoadingComplete={() => setIsLoading(false)}
      src={src}
      alt={alt}
      width={500}
      height={500}
      placeholder="blur"
      blurDataURL={src}
      loader={imageKitLoader}
      loading="lazy"
    />
  );
};
