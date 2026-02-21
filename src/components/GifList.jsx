import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

import searchStart from "/src/assets/search-start.svg";
import { AnimatePresence, motion } from "motion/react";

import { Error5xx } from "./status/Error5xx";
import { Error4xx } from "./status/Error4xx";
import { NotFound } from "./status/NotFound";
import { Success } from "./status/Success";

const containerAnimator = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 1 } },
  out: { opacity: 0 },
};
const childrenAnimator = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeIn" } },
};

export const GifList = () => {
  const { gifUrlIds, statusFetch, searchValue, valueClicked } =
    useContext(GiphyContext);

  let content;

  if (!searchValue && !valueClicked) {
    content = (
      <motion.div className="basic-alight">
        <img
          src={searchStart}
          key="start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="imgs-speakers"
        />
      </motion.div>
    );
  } else if (statusFetch === 200 && gifUrlIds.length === 0) {
    content = NotFound(containerAnimator, childrenAnimator);
  } else if (statusFetch === 200) {
    content = Success(gifUrlIds, containerAnimator, childrenAnimator);
  } else if (statusFetch >= 400 && statusFetch < 500) {
    content = Error4xx(containerAnimator, childrenAnimator, statusFetch);
  } else {
    content = Error5xx(containerAnimator, childrenAnimator, statusFetch);
  }

  return (
    <>
      <AnimatePresence>{content}</AnimatePresence>
    </>
  );
};
