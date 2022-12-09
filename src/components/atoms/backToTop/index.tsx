import { FaChevronUp } from "react-icons/fa";
import { useScroll } from "@/hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";
import { backToTopAnimation } from "@/utils/animation";

export const BackToTop = () => {
  const [scroll] = useScroll();

  const handleClick: () => void = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  const height: number = 50;

  return (
    <AnimatePresence key={height} mode="wait">
      {scroll > height && (
        <motion.div
          {...backToTopAnimation}
          className="fixed bottom-20 right-3 md:bottom-4 md:right-4"
        >
          <button
            className="rounded-md bg-underline-light p-2.5 transition duration-300 hover:bg-red-500 dark:bg-underline-dark dark:hover:bg-blue-700"
            onClick={handleClick}
          >
            <FaChevronUp className="text-white" size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
