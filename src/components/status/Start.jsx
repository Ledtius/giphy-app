import { motion } from "motion/react";
import searchStart from "../../assets/start.svg";

export const Start = (containerAnimation, childrenAnimation) => {
  return (
    <motion.div
      className="basic-alight"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="out"
    >
      <motion.img
        className="imgs-speakers"
        src={searchStart}
        key="start"
        variants={childrenAnimation}
        initial="hidden"
        animate="visible"
        exit="out"
      />
    </motion.div>
  );
};
