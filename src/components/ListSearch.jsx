import { useContext, useEffect } from "react";

import { GiphyContext } from "../context/GiphyContext";

export const ListSearch = () => {
  console.log("--ListSearch--");

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
      <section className="flex flex-col items-center mb-10 md:max-w-md">
        <h2 className="text-xm font-bold text-slate-400 mt-5 mb-5">
          HISTORIAL DE BÚSQUEDA
        </h2>

        <ul className="flex justify-center gap-5 flex-wrap">
          {searchValueList.map(({ value, id }) => {
            return (
              <li
                className={`rounded-2xl  flex items-center justify-center text-center w-fit max-h-30 cursor-pointer p-2 gap-2 bg-slate-200  hover:bg-white`}
                key={id}
                onClick={handleClick}
              >
                <span className=" text-wrap max-w-80 overflow-x-clip">
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
                  onClick={() => handleClickDeleteOne(value)}
                  className="w-6 stroke-black hover:bg-slate-400 pt-1 pb-1 pl-1 pr-1 rounded-2xl transition-all cursor-pointer lucide lucide-x-icon lucide-x"
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

        <button
          className="rounded-md p-2 text-red-400 font-medium w-fit cursor-pointer hover:bg-red-100 transition-all mt-4"
          onClick={handleClickDeletedAll}
        >
          Vaciar historial
        </button>
      </section>
    </>
  );
};
