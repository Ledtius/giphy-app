import { motion, AnimatePresence } from "motion/react";
import noGif from "../../assets/no-gif.png";
import { animations } from "../animations";

export const Success = (
  gifUrlIds,
  containerAnimation,
  childrenAnimation,
  valueClicked,
) => {
  const { emptyHistoryBtnAnimation, componentsAnimation, listGifAnimation } =
    animations();
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 2 }}
      className="columns-2 sm:columns-3 md:columns-4 gap-4"
    >
      {gifUrlIds.map(({ id, url }) => (
        <motion.li variants={componentsAnimation} key={id}>
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
