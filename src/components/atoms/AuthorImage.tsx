import Image from "next/image";
import { memo } from "react";

type AuthorImageProps = {
  username: string;
  alt: string;
};

export const AuthorImage = memo(({ username, alt }: AuthorImageProps) => {
  return (
    <Image
      src={`https://github.com/${username}.png`}
      className="mr-2 rounded-full"
      width={23}
      height={23}
      alt={alt}
      onError={(event) => (event.currentTarget.src = "/img/default-author.jpeg")}
    />
  );
});

AuthorImage.displayName = "AuthorImage";
