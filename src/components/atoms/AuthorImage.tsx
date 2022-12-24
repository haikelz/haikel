import Image from "next/image";

type AuthorImageProps = {
  src: string;
  alt: string;
};

export const AuthorImage = ({ src, alt }: AuthorImageProps) => {
  return <Image src={src} className="mr-2 rounded-full" width={23} height={23} alt={alt} />;
};
