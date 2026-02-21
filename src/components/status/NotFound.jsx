import { motion } from "motion/react";
import notFound from "../../assets/question-search.svg";

export const NotFound = (containerAnimator, childrenAnimator) => {
  console.log("Here");
  return (
    <motion.div
      className="basic-alight"
      key="empty"
      variants={containerAnimator}
      initial="hidden"
      animate="visible"
      exit="out"
    >
      <motion.img
        variants={childrenAnimator}
        initial="hidden"
        animate="visible"
        src={notFound}
        className="imgs-speakers"
      />
      <motion.p
        variants={childrenAnimator}
        initial="hidden"
        animate="visible"
        className="font-bold"
      >
        Oops! Aqui no hay nada parecido.
      </motion.p>
    </motion.div>
  );
};
