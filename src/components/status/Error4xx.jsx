import { motion } from "motion/react";
import error4xx from "/src/assets/4xx-error.svg";

export const Error4xx = ({
  containerAnimation,
  childrenAnimation,
  statusFetch,
}) => {
  return (
    <motion.div
      className="basic-alight"
      key="error-4xx"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="out"
    >
      <motion.img
        variants={childrenAnimation}
        initial="hidden"
        animate="visible"
        src={error4xx}
        className="imgs-speakers"
      />
      <motion.span
        variants={childrenAnimation}
        initial="hidden"
        animate="visible"
        className="font-bold dark:text-slate-300"
      >
        Error: {statusFetch}
      </motion.span>
    </motion.div>
  );
};
