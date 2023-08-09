import { cxm } from "~lib/helpers";
import Main from "~ui/main";

export default function Loading() {
  return (
    <Main className={cxm("flex flex-col items-start justify-start", "py-8")}>
      <div className="w-44 h-10 animate-pulse bg-gray-200 dark:bg-base-1"></div>
      <div className="h-6 w-80 animate-pulse bg-gray-200 dark:bg-base-1 mt-4"></div>
      <div className="my-4 h-14 animate-pulse bg-gray-200 dark:bg-base-1 w-72"></div>
      <div>
        <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1"></div>
        <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1 mt-4"></div>
      </div>
      <div className="mt-10">
        <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1"></div>
        <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1 mt-4"></div>
      </div>
      <div className="mt-10">
        <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1"></div>
        <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1 mt-4"></div>
      </div>
      <div className="mt-10">
        <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1"></div>
        <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1 mt-4"></div>
      </div>
      <div className="mt-10">
        <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1"></div>
        <div className="h-6 w-64 animate-pulse bg-gray-200 dark:bg-base-1 mt-4"></div>
      </div>
    </Main>
  );
}
