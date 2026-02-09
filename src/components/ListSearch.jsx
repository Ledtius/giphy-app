import { useContext, useEffect } from "react";

import { GiphyContext } from "../context/GiphyContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const ListSearch = () => {
  console.log("--ListSearch--");

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
    console.log("--ListSearch setValueClicked --");
    setValueClicked(eventValueText);
  };

  useEffect(() => {
    console.log("**useEffect of ListSearch**");
    if (searchValue) {
      console.log("--ListSearch setValueClicked by searchValue--");

      setValueClicked("");

      console.log(searchValue);
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
              <li
                className={`search-list-shape  element-shape  ${
                  valueClicked === value ? "group search-list-hover" : ""
                }`}
                key={id}
                onClick={handleClick}
              >
                <span className={`text-wrap max-w-80 overflow-x-clip `}>
                  {value}
                </span>
                {/* <span
                  className={`rounded-2xl pt-2 pb-2 pr-14 pl-2 bg-slate-200 w-fit cursor-pointer  text-center hover:bg-white flex gap-3.5 transition-all ${
                    valueClicked === value
                      ? "border-1 transition-all"
                      : "text-black bg-red-400"
                  }`}
                  onClick={handleClick}
                >
                  {value}
                </span> */}
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
                {/* <div className="w-6 hover:bg-slate-400 pt-1 pb-1 pl-1 pr-1 rounded-2xl transition-all absolute top-2 right-1 cursor-pointer"></div> */}
              </li>
            );
          })}
        </ul>

        <button className="search-list-delete" onClick={handleClickDeletedAll}>
          Vaciar historial
        </button>
      </section>
    </>
  );
};
