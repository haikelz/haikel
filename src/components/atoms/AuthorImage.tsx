import Image from "next/image";
import { memo } from "react";

export const AuthorImage = memo(() => {
  return (
    <Image
      src="https://github.com/haikelz.png"
      className="mr-2 rounded-full"
      width={23}
      height={23}
      alt="Github Profile Picture"
      onError={(event) => (event.currentTarget.src = "/img/default-author.jpeg")}
    />
  );
});

AuthorImage.displayName = "AuthorImage";
