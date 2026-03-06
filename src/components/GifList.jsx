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
    arrFrag,
  } = useContext(GiphyContext);

  return (
    <>
      <motion.div
        variants={listGifAnimation}
        initial="hidden"
        animate="visible"
        className="relative min-h-96 min-w-fit"
      >
        <Conditional
          searchValue={searchValue}
          valueClicked={valueClicked}
          statusFetch={statusFetch}
          gifUrlIds={gifUrlIds}
          arrFrag={arrFrag}
        />
        <UpArrow />
      </motion.div>
    </>
  );
};
