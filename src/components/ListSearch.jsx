import { useContext, useEffect, useState } from "react";

import { GiphyContext } from "../context/GiphyContext";
import { GiphyFetch } from "../services/GiphyFetch";

export const ListSearch = () => {
  console.log("--ListSearch--");

  const { searchValueList, setValueClicked, searchValue } =
    useContext(GiphyContext);

  console.log(searchValueList);

  const [stateValueClicked, setStateValueClicked] = useState("");

  const handleClick = (e) => {
    const eventValueText = e.target.textContent;

    console.log(eventValueText);
    setValueClicked(eventValueText);
    setStateValueClicked(eventValueText);
  };

  useEffect(() => {
    if (searchValue) setValueClicked("");
  }, [searchValue]);

  console.log(stateValueClicked);
  return (
    <>
      <h2 className="text-xl font-bold">Historial de busqueda</h2>

      <ul className="flex justify-center gap-3">
        {searchValueList.map(({ value, id }) => {
          return (
            <li
              className={`rounded-2xl p-2 cursor-pointer hover:bg-gray-500 ${
                stateValueClicked === value
                  ? "text-white bg-black"
                  : "text-black bg-red-400"
              }`}
              key={id}
              onClick={handleClick}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
};
