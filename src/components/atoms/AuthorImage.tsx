import Image from "next/image";
import { memo } from "react";

const AuthorImage = () => {
  return (
    <Image
      src="https://avatars.githubusercontent.com/u/77146709?v=4"
      className="mr-2 rounded-full"
      width={23}
      height={23}
      alt="Github Profile Picture"
      onError={(event) => (event.currentTarget.src = "/img/default-author.jpeg")}
    />
  );
};

export default memo(AuthorImage);
