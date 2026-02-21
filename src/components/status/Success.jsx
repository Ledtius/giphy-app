import { motion } from "motion/react";
import noGif from "../../assets/beach-12.png";

export const Success = (gifUrlIds, containerAnimator, childrenAnimator) => {
  return (
    <motion.ul
      key="results"
      variants={containerAnimator}
      initial="hidden"
      animate="visible"
      exit="out"
      className="columns-2 sm:columns-3 md:columns-4 gap-4"
    >
      {gifUrlIds.map(({ id, url }) => (
        <motion.li
          variants={childrenAnimator}
          initial="hidden"
          animate="visible"
          key={id}
        >
          <img
            src={url || noGif}
            onError={(e) => {
              e.currentTarget.src = noGif;
            }}
            className="w-full rounded-md"
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};
