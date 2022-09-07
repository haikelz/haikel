const SMA = () => {
  return (
    <div className="flex relative pb-12">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-lightUnderline dark:bg-darkUnderline pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F05454] dark:bg-[#2563EB] inline-flex items-center justify-center text-white relative">
        <div className="rounded-full bg-white w-3 h-3"></div>
      </div>
      <div className="flex-grow pl-4">
        <h2 className="font-medium title-font text-xl tracking-wider">SMAN 1 Pangkalpinang</h2>
        <p className="my-1">Natural Science</p>
      </div>
    </div>
  );
};

export default SMA;
