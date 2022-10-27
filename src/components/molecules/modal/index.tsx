import { ShowedModal } from "@/interfaces";
import { showedModalAnimation } from "@/utils/animation";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ isShowed, setIsShowed }: ShowedModal) => {
  return (
    <AnimatePresence mode="wait">
      {isShowed && (
        <motion.div
          {...showedModalAnimation}
          className="fixed inset-0 z-20 flex max-w-full items-center justify-center p-4 backdrop-blur-md"
        >
          <div className="w-96 rounded-md bg-white text-black shadow-md dark:bg-gray-800 dark:text-white">
            <div className="space-y-2 p-5 leading-relaxed tracking-wide">
              <h3 className="text-2xl font-bold">Tips:</h3>
              <p>
                Use <code>Ctrl + Arrow Right/Arrow Left</code> for move to next/previous page
              </p>
              <div className="flex items-center justify-end">
                <button
                  className="rounded-md bg-blue-500 px-4 py-1 font-semibold text-white transition-all duration-200 ease-in-out hover:bg-blue-600"
                  onClick={() => setIsShowed(!isShowed)}
                >
                  Okay!
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
