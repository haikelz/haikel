import { FaChevronUp } from "react-icons/fa";
import { useScroll } from "@/hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";
import { backToTopAnimation } from "@/utils/animation";

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
        <motion.div
          {...backToTopAnimation}
          className="fixed bottom-20 right-3 md:bottom-4 md:right-4"
        >
          <button
            className="p-2.5 rounded-md bg-lightUnderline dark:bg-darkUnderline hover:bg-red-500 dark:hover:bg-blue-700 duration-300 transition"
            onClick={handleClick}
          >
            <FaChevronUp className="text-white" size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
