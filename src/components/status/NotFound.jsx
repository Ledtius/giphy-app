import { motion } from "motion/react";
import notFound from "../../assets/not-found.svg";
import { useEffect, useState } from "react";

export const NotFound = ({ childrenAnimation }) => {
  const [wait, setWait] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWait(true);
    }, 1000);

    return () => clearTimeout(timer);
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
            className="font-bold dark:text-slate-300"
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
