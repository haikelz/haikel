import Link from "next/link";
import { LinkHTMLAttributes } from "react";
import { tw } from "~lib/helpers";

type UnderlineLinkProps = LinkHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function UnderlineLink({
  children,
  href,
  className,
  ...props
}: UnderlineLinkProps) {
  return (
    <Link
      href={href}
      className={tw(
        "w-fit cursor-pointer text-left font-bold",
        "text-base leading-[1.75] underline decoration-dashed underline-offset-[5px]",
        "hover:text-blue-500 hover:decoration-blue-500",
        "md:leading-[1.7777778]",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
