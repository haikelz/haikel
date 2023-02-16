import Image from "next/image";
import { memo } from "react";
import { imageKitLoader } from "~lib/helpers/imageKitLoader";

const AuthorImage = () => {
  return (
    <Image
      src="others/profile.jpeg"
      alt="Profile Picture"
      loader={imageKitLoader}
      className="mr-2 rounded-full"
      width={23}
      height={23}
      draggable={false}
    />
  );
};

export default memo(AuthorImage);
