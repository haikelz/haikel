import { format } from "date-fns/esm";
import { UnderlineLink } from "~components/ui/typography";
import { cxm } from "~lib/helpers";
import { spaceGrotesk } from "~lib/utils/fonts";

const socialMediaList = [
  { id: 1, name: "Email", route: "mailto:halo@haikel.my.id" },
  { id: 2, name: "Facebook", route: "https://facebook.com/kelgfx" },
  { id: 3, name: "Github", route: "https://github.com/haikelz" },
  { id: 4, name: "Linkedin", route: "https://www.linkedin.com/in/haikel" },
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
          "md:py-3 md:dark:border-t-gray-500"
        )}
      >
        <p className="text-center text-base font-bold md:text-left">2020-{currentYear} Haikel</p>
        <ul className="mt-0.5 flex items-center justify-center space-x-3 md:mt-0">
          {socialMediaList.map((item) => (
            <li key={item.id}>
              <UnderlineLink className="md:text-base" href={item.route}>
                {item.name}
              </UnderlineLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
