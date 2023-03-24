import Image from "next/image";

const AuthorImage = () => {
  return (
    <Image
      src="https://avatars.githubusercontent.com/u/77146709?v=4"
      alt="avatar"
      className="mr-2 rounded-full"
      width={26}
      height={26}
      draggable={false}
      loading="lazy"
    />
  );
};

export default AuthorImage;
