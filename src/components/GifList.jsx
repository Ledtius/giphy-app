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
        className="relative min-h-60"
      >
        <Conditional
          searchValue={searchValue}
          valueClicked={valueClicked}
          statusFetch={statusFetch}
          gifUrlIds={gifUrlIds}
        />
        <UpArrow />
      </motion.div>
    </>
  );
};
