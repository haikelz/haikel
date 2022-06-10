import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <Image width="200px" height="200px" src="/img/taken.svg" alt="Error" />
      <div className="mt-6 flex flex-col items-center">
        <h2 className="text-xl font-bold sm:text-2xl">Oops....</h2>
        <p className="text-xs sm:text-base">
          Halaman yang anda cari tidak ditemukan!
        </p>
      </div>
    </>
  );
};

export default NotFound;
