import { cn } from "@/helpers/cn";
import { Loading } from "@/types";
import Image from "next/image";

export const AboutImage = ({ isLoading, loadingProcess }: Loading) => {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-full border-[6px] border-light shadow-allaround dark:border-gray-800">
      <Image
        src="https://avatars.githubusercontent.com/u/77146709?v=4"
        width={270}
        height={270}
        alt="Github Image"
        className={cn(
          "cursor-pointer rounded-full duration-700 ease-in-out",
          isLoading
            ? "scale-110 rounded-full blur-2xl grayscale"
            : "scale-100 rounded-full blur-0 grayscale-0"
        )}
        priority
        onLoad={loadingProcess}
      />
    </div>
  );
};
