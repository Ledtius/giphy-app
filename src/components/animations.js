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

  return { loaderAnimator, childrenAnimator, containerAnimator };
};
