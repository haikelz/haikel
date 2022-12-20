import { useScroll } from "@/hooks/useScroll";
import { backToTopAnimation } from "@/utils/animation";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

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
    <LazyMotion features={domAnimation}>
      <AnimatePresence key={height} mode="wait">
        {scroll > height && (
          <m.div {...backToTopAnimation} className="fixed bottom-20 right-3 md:bottom-4 md:right-4">
            <button
              aria-label="back to top"
              className="rounded-md bg-underline-light p-2.5 transition duration-300 hover:bg-red-500 dark:bg-underline-dark dark:hover:bg-blue-700"
              onClick={handleClick}
            >
              <FaChevronUp className="text-white" size={20} />
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};
