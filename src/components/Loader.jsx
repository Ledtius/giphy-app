import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { AnimatePresence, motion } from "motion/react";
import { animations } from "./animations";

export const Loader = () => {
  const { fetchActive } = useContext(GiphyContext);
  const { loaderAnimation } = animations();
  return (
    <>
      <AnimatePresence>
        {fetchActive ? (
          <motion.div
            className="w-30 h-fit mb-2 flex items-center gap-2 "
            variants={loaderAnimation}
            initial="hidden"
            animate="visible"
            exit="out"
          >
            <motion.span className="font-semibold text-md dark:text-slate-300">
              Cargando...
            </motion.span>

            <motion.svg
              className="w-5 dark:stroke-blue-600"
              fill="#2B8CF0FF"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />

              <rect x="11" y="6" rx="1" width="2" height="7">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  dur="9s"
                  values="0 12 12;360 12 12"
                  repeatCount="indefinite"
                />
              </rect>

              <rect x="11" y="11" rx="1" width="2" height="9">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  dur="0.75s"
                  values="0 12 12;360 12 12"
                  repeatCount="indefinite"
                />
              </rect>
            </motion.svg>
          </motion.div>
        ) : (
          <motion.div className="w-fit h-6 flex items-center gap-2 "></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
