import Image from "next/image";

const ErrorImage = () => {
  return (
    <Image
      width={200}
      height={200}
      src="others/taken.svg"
      alt="Not Found Image"
      loading="eager"
      priority
    />
  );
};

export default ErrorImage;
