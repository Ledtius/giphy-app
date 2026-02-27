import { motion } from "motion/react";
import notFound from "../../assets/not-found.svg";
import { useEffect, useState } from "react";

export const NotFound = (containerAnimation, childrenAnimation) => {
  const [wait, setWait] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWait(true);
    }, 1000);
  }, []);

  return (
    <motion.div
      className="basic-alight"
      variants={childrenAnimation}
      initial="hidden"
      animate="visible"
      exit="out"
    >
      {wait ? (
        <>
          <motion.img
            variants={childrenAnimation}
            initial="hidden"
            animate="visible"
            src={notFound}
            className="imgs-speakers"
          />
          <motion.p
            variants={childrenAnimation}
            initial="hidden"
            animate="visible"
            className="font-bold"
          >
            Oops! Aqui no hay nada parecido.
          </motion.p>
        </>
      ) : (
        ""
      )}
    </motion.div>
  );
};
