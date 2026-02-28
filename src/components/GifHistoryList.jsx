import { useContext, useEffect } from "react";

import { GiphyContext } from "../context/GiphyContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion, AnimatePresence } from "motion/react";
import { animations } from "./animations";

export const GifHistoryList = () => {
  const {
    emptyHistoryBtnAnimation,
    componentsAnimation,
    containerAnimation,
    childrenAnimation,
  } = animations();
  const [parent] = useAutoAnimate();
  const {
    searchValueList,
    setValueClicked,
    valueClicked,
    searchValue,
    deleteAll,
    deleteOne,
  } = useContext(GiphyContext);

  const handleClick = (e) => {
    const eventValueText = e.target.textContent;
    setValueClicked(eventValueText);
  };

  useEffect(() => {
    if (searchValue) {
      setValueClicked("");
    }
  }, [searchValue]);

  const handleClickDeletedAll = () => {
    deleteAll();
  };

  const handleClickDeleteOne = (value) => {
    deleteOne(value);
  };

  return (
    <>
      <motion.section className="flex flex-col items-center mb-10 w-ful">
        <h2 className="text-xm font-bold text-slate-400 mt-5 mb-5">
          HISTORIAL DE BÚSQUEDA
        </h2>

        <AnimatePresence>
          <motion.ul
            className="flex justify-center items-center gap-5 flex-wrap min-h-10 min-w-50 sm:min-w-150 max-w-300"
            initial="hidden"
            animate="visible"
            variants={containerAnimation}
            ref={parent}
          >
            {searchValueList.map(({ value, id }) => {
              return (
                <motion.li
                  variants={containerAnimation}
                  className={`search-list-shape  element-shape  ${
                    valueClicked === value ? "group search-list-hover" : ""
                  }`}
                  key={id}
                  onClick={handleClick}
                >
                  <span className={`text-wrap max-w-80 overflow-x-clip `}>
                    {value}
                  </span>

                  <svg
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClickDeleteOne(value);
                    }}
                    className={`search-list-x lucide lucide-x-icon stroke-black lucide-x group-hover ${valueClicked === value ? "stroke-white group-hover:stroke-black" : ""} `}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </motion.li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
        <motion.button
          className="search-list-delete"
          onClick={handleClickDeletedAll}
          variants={emptyHistoryBtnAnimation}
          whileHover="whileHover"
          whileTap="whileTap"
          whileFocus="whileFocus"
          transition="transition"
        >
          Vaciar historial
        </motion.button>
      </motion.section>
    </>
  );
};
