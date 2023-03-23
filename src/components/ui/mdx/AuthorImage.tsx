/* eslint-disable @next/next/no-img-element */
const AuthorImage = () => {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/77146709?v=4"
      alt="Profile"
      className="mr-2 rounded-full"
      width={26}
      height={26}
      draggable={false}
      loading="lazy"
    />
  );
};

export default AuthorImage;
