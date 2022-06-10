import { cn } from "@/src/className";
import { components } from "@/src/types";
import Image from "next/image";

const AboutImage = ({ isLoading, loadingProsess }: components) => {
  return (
    <div className="overflow-hidden rounded-md">
      <Image
        src="https://avatars.githubusercontent.com/u/77146709?v=4"
        width="250px"
        height="250px"
        alt="Profile"
        className={cn(
          "cursor-pointer absolute rounded-md hover:opacity-75 duration-700 ease-in-out",
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        )}
        onLoadingComplete={loadingProsess}
      />
    </div>
  );
};

export default AboutImage;
