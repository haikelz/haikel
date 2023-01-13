import Image from "next/image";
import { memo } from "react";
import { twJoin } from "tailwind-merge";

const AboutImage = () => {
  return (
    <div
      className={twJoin(
        "shadow-smooth flex items-center justify-center overflow-hidden rounded-full",
        "border-[6px] border-brightgray dark:border-gray-800"
      )}
    >
      <Image
        className="cursor-pointer rounded-full"
        src="https://avatars.githubusercontent.com/u/77146709?v=4"
        alt="About Image"
        width={270}
        height={270}
        priority={true}
      />
    </div>
  );
};

export default memo(AboutImage);
