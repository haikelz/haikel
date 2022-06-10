import Image from "next/image";

const NotFoundImage = () => {
  return (
    <Image width="200px" height="200px" src="/img/taken.svg" alt="Error" />
  );
};

export default NotFoundImage;
