import { useContext, useDebugValue, useEffect, useState } from "react";

import { GiphyContext } from "../context/GiphyContext";
import { useDeleteStorage } from "../hooks/useDeleteStorage";

export const ListSearch = () => {
  console.log("--ListSearch--");

  const {
    searchValueList,
    setSearchValueList,
    setValueClicked,
    valueClicked,
    searchValue,
  } = useContext(GiphyContext);

  const handleClick = (e) => {
    const eventValueText = e.target.textContent;

    console.log(eventValueText);
    if (eventValueText !== "x") setValueClicked(eventValueText);
  };

  useEffect(() => {
    if (searchValue) {
      setValueClicked("");

      console.log(searchValue);
    }
  }, [searchValue]);

  const handleClickDeletedAll = (e, valueComponent) => {
    console.log(valueComponent);
    const eventValueText = e.target.textContent;
    console.log({ eventValueText });
    useDeleteStorage(
      eventValueText,
      valueComponent,
      searchValueList,
      setSearchValueList,
    );
  };

  const handleClickDelete = (e) => {
    const eventValueText = e.target.textContent;
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
                onClick={(e) => {
                  handleClickDeletedAll(e, value);
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
