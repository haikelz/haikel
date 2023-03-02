/* eslint-disable @next/next/no-img-element */
import { memo } from "react";

const AuthorImage = () => {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/77146709?v=4"
      alt="Profile"
      className="mr-2 rounded-full"
      width={23}
      height={23}
      draggable={false}
      loading="lazy"
    />
  );
};

export default memo(AuthorImage);
