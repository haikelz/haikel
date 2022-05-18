import Link from "next/link";
import { useColorModeValue, Box } from "@chakra-ui/react";

const Footer = () => {
  const today = new Date();
  const bg = useColorModeValue("#f1f5f9", "#191724");
  const color = useColorModeValue("black", "white");

  return (
    <Box
      bg={bg}
      color={color}
      className="body-font tracking-widest pb-4 text-center"
    >
      <p className="text-xs pb-1">©2020-{today.getFullYear()} Haikel.</p>
      <p className="text-xs">
        Built with{" "}
        <Link href="https://nextjs.org" passHref>
          <span className="cursor-pointer font-bold hover:underline">
            NextJS
          </span>
        </Link>
        , Hosted on{" "}
        <Link href="https://vercel.com" passHref>
          <span className="cursor-pointer hover:underline font-bold">
            Vercel
          </span>
        </Link>
      </p>
    </Box>
  );
};

export default Footer;
