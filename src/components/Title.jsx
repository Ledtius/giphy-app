import { motion } from "motion/react";
import { animations } from "./animations";
export const Title = () => {
  const { componentsAnimation } = animations();

  return (
    <>
      <motion.h1
        variants={componentsAnimation}
        key="title"
        className="font-bold text-3xl mb-5 text-gray-950 md:left-10 relative"
      >
        Buscador de Gifs
      </motion.h1>
    </>
  );
};
