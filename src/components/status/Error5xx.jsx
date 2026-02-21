import { motion } from "motion/react";
import error5xx from "../../assets/500-error.svg";

export const Error5xx = (containerAnimator, childrenAnimator, statusFetch) => {
  return (
    <motion.div
      className="basic-alight"
      key="error-5xx"
      variants={containerAnimator}
      initial="hidden"
      animate="visible"
      exit="out"
    >
      <motion.img
        variants={childrenAnimator}
        initial="hidden"
        animate="visible"
        src={error5xx}
        className="imgs-speakers"
      />
      <motion.span
        variants={childrenAnimator}
        initial="hidden"
        animate="visible"
        className="font-bold"
      >
        Error: {statusFetch}
      </motion.span>
    </motion.div>
  );
};
