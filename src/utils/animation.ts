export const appAnimation = {
  transition: { duration: 0.4 },
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export const backToTopAnimation = {
  transition: { duration: 0.3 },
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export const whileTap = { scale: 0.95, rotate: 15 };

export const darkModeIconAnimation = {
  transition: { type: "spring", stiffness: 200, damping: 10 },
  initial: { opacity: 0.6, rotate: 90 },
  animate: { opacity: 1, rotate: 0 },
  whileTap: { scale: 0.95, rotate: 15 },
};
