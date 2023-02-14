import Image from "next/image";
import { memo } from "react";
import { twJoin } from "tailwind-merge";
import { imageKitLoader } from "~lib/helpers/imageKitLoader";

const AboutImage = () => {
  return (
    <div
      className={twJoin(
        "shadow-smooth flex items-center justify-center overflow-hidden rounded-full",
        "border-[6px] border-brightgray dark:border-gray-800"
      )}
    >
      <Image
        loader={imageKitLoader}
        className="cursor-pointer rounded-full"
        src="/others/profile.jpeg"
        alt="About Image"
        width={270}
        height={270}
        priority={true}
      />
    </div>
  );
};

export default memo(AboutImage);
