const ComingSoon = () => {
  return (
    <div className="relative flex pb-12">
      <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
        <div className="pointer-events-none h-full w-1 bg-underline-light dark:bg-underline-dark"></div>
      </div>
      <div className="relative inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#F05454] text-white dark:bg-[#2563EB]">
        <div className="h-3 w-3 rounded-full bg-white"></div>
      </div>
      <div className="flex-grow pl-4">
        <h2 className="title-font text-xl font-medium tracking-wider">Coming soon....</h2>
      </div>
    </div>
  );
};

export default ComingSoon;
