import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

import { AnimatePresence } from "motion/react";

import { Conditional } from "./status/Conditional";

export const GifList = () => {
  const {
    gifUrlIds,
    statusFetch,
    searchValue,
    valueClicked,
    searchObject,
    searchValueList,
  } = useContext(GiphyContext);
  console.log(searchObject);
  return (
    <>
      <AnimatePresence>
        {Conditional(
          searchValue,
          valueClicked,
          statusFetch,
          gifUrlIds,
          searchObject,
          searchValueList,
        )}
      </AnimatePresence>
    </>
  );
};
