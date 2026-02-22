import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

import { AnimatePresence } from "motion/react";

import { Conditional } from "./status/Conditional";

export const GifList = () => {
  const { gifUrlIds, statusFetch, searchValue, valueClicked } =
    useContext(GiphyContext);

  return (
    <>
      <AnimatePresence>
        {Conditional(searchValue, valueClicked, statusFetch, gifUrlIds)}
      </AnimatePresence>
    </>
  );
};
