import { format } from "date-fns/esm";
import Link from "next/link";
import { cxm } from "~lib/helpers";
import { spaceGrotesk } from "~lib/utils/fonts";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "~ui/svg";

const socialMediaList = [
  { id: 1, icon: MailIcon, route: "mailto:halo@haikel.my.id" },
  { id: 2, icon: FacebookIcon, route: "https://facebook.com/kelgfx" },
  { id: 3, icon: InstagramIcon, route: "https://instagram.com/whykelz_" },
  { id: 4, icon: GithubIcon, route: "https://github.com/haikelz" },
  { id: 5, icon: LinkedinIcon, route: "https://www.linkedin.com/in/haikel" },
];

export default function Footer() {
  const currentYear = format(new Date(), "yyyy");

  return (
    <footer
      className={cxm(
        "flex w-full flex-col items-center justify-center",
        "p-3 text-center tracking-widest",
        "md:px-4 md:py-0",
        spaceGrotesk.className
      )}
    >
      <div
        className={cxm(
          "mx-auto flex w-full max-w-3xl flex-col items-center justify-between",
          "md:flex-row md:border-t-[1.5px] md:border-t-gray-300",
          "md:py-3 md:dark:border-t-gray-700"
        )}
      >
        <p className="text-center text-sm font-bold md:text-left md:text-base">
          2020-{currentYear} Haikel
        </p>
        <ul className="mt-3 flex items-center justify-center space-x-4 md:mt-0">
          {socialMediaList.map((item) => {
            const Icon = item.icon;
            return (
              <Link href={item.route} key={item.id}>
                <li className="transition-all hover:-translate-y-0.5">
                  <Icon />
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
