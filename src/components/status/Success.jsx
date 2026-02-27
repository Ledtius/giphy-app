import { motion } from "motion/react";
import noGif from "../../assets/no-gif.png";

export const Success = ({ gifUrlIds }) => {
  return (
    <motion.ul className="columns-2 sm:columns-3 md:columns-4 gap-4">
      {gifUrlIds.map(({ id, url }) => (
        <motion.li key={id}>
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
