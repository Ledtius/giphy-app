import { useContext, useEffect } from "react";

import { GiphyContext } from "../context/GiphyContext";
import { GiphyFetch } from "../services/GiphyFetch";

export const ListSearch = () => {
  console.log("--ListSearch--");

  const { searchValueList, setValueClicked } = useContext(GiphyContext);

  console.log(searchValueList);

  const handleClick = (e) => {
    console.log(e.target.textContent);
    setValueClicked(e.target.textContent);
  };
  return (
    <>
      <h2 className="text-xl font-bold">Historial de busqueda</h2>

      <ul className="flex justify-center gap-3">
        {searchValueList.map(({ value, id }) => (
          <li
            className="border-2 border-yellow-400 rounded-2xl text-white bg-black p-2 cursor-pointer"
            key={id}
            onClick={handleClick}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};
