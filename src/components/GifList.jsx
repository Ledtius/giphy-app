import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

import { motion } from "motion/react";

import { Conditional } from "./status/Conditional";

import { animations } from "./animations";
import { UpArrow } from "./UpArrow";

export const GifList = () => {
  const { listGifAnimation } = animations();

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
      <motion.div
        variants={listGifAnimation}
        initial="hidden"
        animate="visible"
        className="relative"
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
        <UpArrow />
      </motion.div>
    </>
  );
};
