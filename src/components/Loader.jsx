import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { AnimatePresence, motion } from "motion/react";

export const Loader = () => {
  const { fetchActive, dataApi } = useContext(GiphyContext);

  return (
    <>
      <AnimatePresence>
        {fetchActive ? (
          <motion.div
            initial={{ opacity: 0, transform: "scale(4)", y: 5 }}
            animate={{ opacity: 1, transform: "scale(1)", y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 1 }}
            className="w-20 h-20 mb-2"
          >
            <svg
              className="w-20"
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
            </svg>
          </motion.div>
        ) : (
          <motion.div className="w-20 h-20 mb-2"></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
