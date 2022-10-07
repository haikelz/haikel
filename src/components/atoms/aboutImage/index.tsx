import { cn } from "@/utils/className";
import { Components } from "@/src/interfaces";
import Image from "next/image";

const AboutImage = ({ isLoading, loadingProcess }: Components) => {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-full border-[6px] border-gray-100 shadow-allAround dark:border-gray-800">
      <Image
        src="https://avatars.githubusercontent.com/u/77146709?v=4"
        width="270px"
        height="270px"
        alt="Profile"
        className={cn(
          "absolute cursor-pointer rounded-full duration-700 ease-in-out hover:opacity-80",
          isLoading
            ? "scale-110 rounded-full blur-2xl grayscale"
            : "scale-100 rounded-full blur-0 grayscale-0"
        )}
        onLoadingComplete={loadingProcess}
      />
    </div>
  );
};

export default AboutImage;
