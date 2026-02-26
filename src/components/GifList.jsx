import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

import { AnimatePresence, motion } from "motion/react";

import { Conditional } from "./status/Conditional";

import { animations } from "./animations";

export const GifList = () => {
  const { componentsAnimation } = animations();

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
      <AnimatePresence>
        <motion.div variants={componentsAnimation} key="form">
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
