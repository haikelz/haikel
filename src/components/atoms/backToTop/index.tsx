import { scrollAtom } from "@/src/store";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { useScroll } from "@/src/hooks/useScroll";

const BackToTop = () => {
  const [scroll] = useScroll();

  return (
    <>
      {scroll > 50 && (
        <div className="fixed hidden md:flex bottom-4 right-4 z-10">
          <Link href="" passHref>
            <button className="p-2.5 rounded-md bg-[#F05454] hover:bg-red-500 dark:bg-[#2563EB] dark:hover:bg-blue-700 duration-300 transition">
              <FaArrowUp className="text-white" size="20" />
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default BackToTop;
