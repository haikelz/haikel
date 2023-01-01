import clsx from "clsx";

const SMA = () => {
  return (
    <div className="relative flex pb-12">
      <div
        className={clsx(
          "relative inline-flex h-6 w-6 flex-shrink-0 items-center justify-center",
          "rounded-full bg-[#F05454] text-white dark:bg-[#2563EB]"
        )}
      >
        <div className="h-3 w-3 rounded-full bg-white"></div>
      </div>
      <div className="flex-grow pl-4">
        <h2 className="title-font text-xl font-medium tracking-wider">SMAN 1 Pangkalpinang</h2>
        <p className="my-1">Natural Science</p>
      </div>
    </div>
  );
};

export default SMA;
