import { cn } from "@/src/utils/className";
import { components } from "@/src/props";
import Image from "next/image";

const AboutImage = ({ isLoading, loadingProsess }: components) => {
  return (
    <div className="overflow-hidden rounded-full drop-shadow-sm flex justify-center items-center">
      <Image
        src="https://avatars.githubusercontent.com/u/77146709?v=4"
        width="270px"
        height="270px"
        alt="Profile"
        className={cn(
          "cursor-pointer absolute rounded-full hover:opacity-75 duration-700 ease-in-out",
          isLoading
            ? "grayscale rounded-full blur-2xl scale-110"
            : "grayscale-0 blur-0 rounded-full scale-100"
        )}
        onLoadingComplete={loadingProsess}
      />
    </div>
  );
};

export default AboutImage;
