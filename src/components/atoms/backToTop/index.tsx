import { FaArrowUp } from "react-icons/fa";
import { useScroll } from "@/src/hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";
import { backToTopAnimation } from "@/src/utils/animation";

const BackToTop = () => {
  const [scroll] = useScroll();

  const handleClick: () => void = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  const height: number = 50;

  return (
    <AnimatePresence key={height} exitBeforeEnter>
      {scroll > height && (
        <motion.div {...backToTopAnimation} className="fixed hidden md:flex bottom-4 right-4 z-10">
          <button
            className="p-2.5 rounded-md bg-[#F05454] hover:bg-red-500 dark:bg-[#2563EB] dark:hover:bg-blue-700 duration-300 transition"
            onClick={handleClick}
          >
            <FaArrowUp className="text-white" size="20" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
