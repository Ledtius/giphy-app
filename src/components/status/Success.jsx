import { motion } from "motion/react";
import noGif from "../../assets/no-gif.png";

export const Success = (gifUrlIds, containerAnimation, childrenAnimation) => {
  return (
    <motion.ul
      key="results"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="out"
      className="columns-2 sm:columns-3 md:columns-4 gap-4"
    >
      {gifUrlIds.map(({ id, url }) => (
        <motion.li
          variants={childrenAnimation}
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
