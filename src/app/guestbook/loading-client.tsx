import Main from "~components/main";
import { tw } from "~lib/helpers";

export default function LoadingClient() {
  const array = [1, 2, 3, 4, 5];

  return (
    <Main className={tw("flex flex-col items-start justify-start", "py-8")}>
      <div className="h-14 mb-4 animate-pulse bg-gray-200 dark:bg-base-1 w-72"></div>
      {array.map((item) => (
        <div key={item} className={tw(item === 1 ? "" : "mt-10")}>
          <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1"></div>
          <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1 mt-4"></div>
        </div>
      ))}
    </Main>
  );
}
