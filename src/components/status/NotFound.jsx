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
      key="empty"
      variants={containerAnimation}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
      }}
      exit={{ opacity: 0 }}
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
