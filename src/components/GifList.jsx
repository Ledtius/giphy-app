import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

import { AnimatePresence, motion } from "motion/react";

import { Conditional } from "./status/Conditional";

import { animations } from "./animations";

export const GifList = () => {
  const { componentsAnimation, containerAnimation, listGifAnimation } =
    animations();

  const {
    gifUrlIds,
    statusFetch,
    searchValue,
    valueClicked,
    searchObject,
    searchValueList,
    fetchActive,
    setSearchValue,
  } = useContext(GiphyContext);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          variants={listGifAnimation}
          initial="hidden"
          animate="visible"
        >
          {Conditional({
            searchValue,
            valueClicked,
            statusFetch,
            gifUrlIds,
            searchObject,
            searchValueList,
            fetchActive,
            setSearchValue,
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
