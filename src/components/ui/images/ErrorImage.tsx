import Image from "next/image";
import { imageKitLoader } from "~lib/helpers/imageKitLoader";

const ErrorImage = () => {
  return (
    <Image
      loader={imageKitLoader}
      width={200}
      height={200}
      src="others/taken.svg"
      alt="Not Found Image"
      priority
    />
  );
};

export default ErrorImage;
