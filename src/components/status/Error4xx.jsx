import { motion } from "motion/react";
import error4xx from "/src/assets/404-error.svg";

export const Error4xx = (containerAnimator, childrenAnimator, statusFetch) => {
  return (
    <motion.div
      className="basic-alight"
      key="error-4xx"
      variants={containerAnimator}
      initial="hidden"
      animate="visible"
      exit="out"
    >
      <motion.img
        variants={ChildrenAnimationValue}
        initial="hidden"
        animate="visible"
        src={error4xx}
        className="imgs-speakers"
      />
      <motion.span
        variants={ChildrenAnimationValue}
        initial="hidden"
        animate="visible"
        className="font-bold"
      >
        Error: {statusFetch}
      </motion.span>
    </motion.div>
  );
};
