import Image from "next/image";

const NotFoundImage = () => {
  return (
    <Image
      width="200px"
      height="200px"
      src="https://cdn.statically.io/gh/haikelz/website/8086598b/public/img/taken.svg"
      alt="Not Found"
    />
  );
};

export default NotFoundImage;
