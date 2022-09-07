import { cn } from "@/src/utils/className";
import { Components } from "@/src/interfaces";
import Image from "next/image";

const AboutImage = ({ isLoading, loadingProcess }: Components) => {
  return (
    <div className="overflow-hidden rounded-full border-[6px] border-gray-100 dark:border-gray-800 drop-shadow-xl flex justify-center items-center">
      <Image
        src="https://avatars.githubusercontent.com/u/77146709?v=4"
        width="270px"
        height="270px"
        alt="Profile"
        className={cn(
          "cursor-pointer absolute rounded-full hover:opacity-80 duration-700 ease-in-out",
          isLoading
            ? "grayscale rounded-full blur-2xl scale-110"
            : "grayscale-0 blur-0 rounded-full scale-100"
        )}
        onLoadingComplete={loadingProcess}
      />
    </div>
  );
};

export default AboutImage;
