import { motion } from "motion/react";
import searchStart from "../../assets/search-start.svg";

export const Start = (containerAnimator, childrenAnimator) => {
  return (
    <motion.div
      className="basic-alight"
      variants={containerAnimator}
      initial="hidden"
      animate="visible"
      exit="out"
    >
      <motion.img
        className="imgs-speakers"
        src={searchStart}
        key="start"
        variants={childrenAnimator}
        initial="hidden"
        animate="visible"
        exit="out"
      />
    </motion.div>
  );
};
