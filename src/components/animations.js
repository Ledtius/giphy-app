export const animation = () => {
  const loaderAnimator = {
    hidden: { opacity: 0, transform: "scale(4)", y: 5 },
    visible: {
      opacity: 1,
      transform: "scale(1)",
      y: 0,
      transition: { duration: 1 },
    },

    out: { opacity: 0 },
  };
  const containerAnimator = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 1 } },
    out: { opacity: 0 },
  };
  const childrenAnimator = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeIn" } },
  };

  const emptyHistoryBtnAnimator = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.6, y: 1 },
    whileFocus: { backgroundColor: "red" },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      duration: 0.4,
    },
  };

  const searchBtnAnimator = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.9, y: 1 },
    transition: { type: "spring", stiffness: 300, damping: 15 },
  };

  return {
    loaderAnimator,
    childrenAnimator,
    containerAnimator,
    searchBtnAnimator,
    emptyHistoryBtnAnimator,
  };
};
