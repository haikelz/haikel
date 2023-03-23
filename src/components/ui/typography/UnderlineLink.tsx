import Link from "next/link";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { ChildrenProps } from "~types";

type UnderlineLinkProps = ChildrenProps &
  HTMLAttributes<HTMLAnchorElement> & {
    href: string;
    className?: string;
  };

export const UnderlineLink = ({ children, href, className, ...props }: UnderlineLinkProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "w-fit cursor-pointer text-left font-bold",
        "text-base leading-[1.75] underline decoration-dashed underline-offset-[5px]",
        "hover:text-blue-500 hover:decoration-blue-500",
        "md:text-lg md:leading-[1.7777778]",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
