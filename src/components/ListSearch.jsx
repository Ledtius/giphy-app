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

    console.log({ eventValueText });
    setValueClicked(eventValueText);
  };

  useEffect(() => {
    if (searchValue) {
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
      <h2 className="text-xl font-bold">Historial de busqueda</h2>

      <ul className="flex justify-center gap-3">
        {searchValueList.map(({ value, id }) => {
          return (
            <li
              className={`rounded-2xl p-2 cursor-pointer hover:bg-gray-500 flex gap-3.5 ${
                valueClicked === value
                  ? "text-white bg-black"
                  : "text-black bg-red-400"
              }`}
              key={id}
            >
              <span onClick={handleClick}>{value}</span>
              <span
                onClick={() => {
                  handleClickDeleteOne(value);
                }}
              >
                x
              </span>
            </li>
          );
        })}
      </ul>

      <button
        className="rounded-2xl p-2 cursor-pointer hover:bg-gray-500 bg-blue-500"
        onClick={handleClickDeletedAll}
      >
        Vaciar historial
      </button>
    </>
  );
};
