import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { Loader } from "./Loader";
import error500 from "/src/assets/500-error.svg";
// import error from "/src/assets/404-error.svg";
import error from "/src/assets/bomb-9.png";

import questionSearch from "/src/assets/question-search.svg";
import searchStart from "/src/assets/search-start.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { AnimatePresence, motion } from "motion/react";

export const List = () => {
  console.log("--List--");
  const [parent] = useAutoAnimate();
  const {
    gifUrlIds,
    gifUrlIdsStorage,
    statusFetch,
    searchValue,
    valueClicked,
  } = useContext(GiphyContext);

  console.log({ gifUrlIds });

  /*   console.log("--List--");
  console.log({ gifUrlIdsStorage }); */

  /* flex w-full justify-center flex-wrap ms:flex-col gap-4 */

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
    content = (
      <motion.div
        className="basic-alight"
        key="empty"
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img src={questionSearch} className="imgs-speakers" />
        <p className="font-bold">Oops! Aqui no hay nada parecido.</p>
      </motion.div>
    );
  } else if (statusFetch === 200) {
    content = (
      <motion.ul
        key="results"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="columns-2 sm:columns-3 md:columns-4 gap-4"
      >
        {gifUrlIds.map(({ id, url }) => (
          <li key={id}>
            <img src={url} className="w-full rounded-md" />
          </li>
        ))}
      </motion.ul>
    );
  } else if (statusFetch >= 400 && statusFetch < 500) {
    content = (
      <motion.div
        className="basic-alight"
        key="error-4xx"
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img src={error} className="imgs-speakers" />
        <span className="font-bold">Error: {statusFetch}</span>
      </motion.div>
    );
  } else {
    content = (
      <motion.div
        className="basic-alight"
        key="error-5xx"
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img src={error500} className="imgs-speakers" />
        <span className="font-bold">{statusFetch}</span>
      </motion.div>
    );
  }

  return (
    <>
      <AnimatePresence>
        <motion.div exit={{ opacity: 1 }} layout>
          {content}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
