import { useContext, useEffect } from "react";

import { GiphyContext } from "../context/GiphyContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from "motion/react";

export const GifHistoryList = () => {
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
      {/* {autoAnimate()} */}
      <section className="flex flex-col items-center mb-10 w-ful">
        <h2 className="text-xm font-bold text-slate-400 mt-5 mb-5">
          HISTORIAL DE BÚSQUEDA
        </h2>

        <ul
          className="flex justify-center items-center gap-5 mb-10 flex-wrap min-h-10 min-w-100 sm:min-w-200 max-w-300"
          ref={parent}
        >
          {searchValueList.map(({ value, id }) => {
            return (
              <motion.li
                className={`search-list-shape  element-shape   ${
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
                  className={`search-list-x lucide lucide-x-icon stroke-black lucide-x g roup-hover ${valueClicked === value ? "stroke-white group-hover:stroke-black" : ""} `}
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
        </ul>

        <motion.button
          className="search-list-delete"
          onClick={handleClickDeletedAll}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.6, y: 1 }}
          whileFocus={{ backgroundColor: "red" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            duration: 0.4,
          }}
        >
          Vaciar historial
        </motion.button>
      </section>
    </>
  );
};
