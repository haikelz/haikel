import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconRss,
} from "@tabler/icons-react";
import Link from "next/link";
import { tw } from "~lib/helpers";
import { ibmPlexSans } from "~lib/utils/fonts";

const socialMediaList = [
  { id: 1, icon: IconMail, route: "mailto:halo@haikel.app" },
  { id: 2, icon: IconRss, route: "https://haikel.app/rss.xml" },
  { id: 3, icon: IconBrandFacebook, route: "https://facebook.com/kelgfx" },
  { id: 4, icon: IconBrandInstagram, route: "https://instagram.com/ekel.tsx" },
  { id: 5, icon: IconBrandGithub, route: "https://github.com/haikelz" },
  { id: 6, icon: IconBrandLinkedin, route: "https://www.linkedin.com/in/haikel" },
];

export default function Footer() {
  return (
    <footer
      className={tw(
        "flex w-full flex-col items-center justify-center",
        "p-3 text-center tracking-widest",
        "md:px-4 md:py-0",
        ibmPlexSans.className
      )}
    >
      <div
        className={tw(
          "mx-auto flex w-full max-w-3xl flex-col items-center justify-between",
          "md:flex-row md:border-t-[1.5px] md:border-t-gray-300",
          "md:py-3 md:dark:border-t-gray-700"
        )}
      >
        <p className="text-center text-sm font-bold md:text-left md:text-base">Crafted by Haikel</p>
        <ul className="mt-3 flex items-center justify-center space-x-4 md:mt-0">
          {socialMediaList.map((item) => {
            const Icon = item.icon;
            return (
              <li className="transition-all hover:-translate-y-0.5" key={item.id}>
                <Link href={item.route} target="_blank">
                  <button
                    type="button"
                    className={tw(
                      "rounded-sm",
                      "p-1",
                      "hover:bg-gray-200",
                      "active:bg-gray-300",
                      "dark:hover:bg-base-2 dark:active:bg-base-1"
                    )}
                    aria-label={`Icon ${item.id.toString()}`}
                  >
                    <Icon size={22} />
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
