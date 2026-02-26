export const animations = () => {
  const loaderAnimation = {
    hidden: { opacity: 0, transform: "scale(0.4)", y: 5 },
    visible: {
      opacity: 1,
      transform: "scale(1)",
      y: 0,
      transition: { duration: 1 },
    },

    out: { opacity: 0 },
  };
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    out: { opacity: 0 },
  };
  const childrenAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const emptyHistoryBtnAnimation = {
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

  const searchBtnAnimation = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.9, y: 1 },
    transition: { type: "spring", stiffness: 300, damping: 15 },
  };

  const componentsAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 5 },
    out: { y: 0 },
  };
  return {
    loaderAnimation,
    childrenAnimation,
    containerAnimation,
    searchBtnAnimation,
    emptyHistoryBtnAnimation,
    componentsAnimation,
  };
};
