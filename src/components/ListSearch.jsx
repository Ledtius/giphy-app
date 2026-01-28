import { useContext, useEffect } from "react";

import { GiphyContext } from "../context/GiphyContext";

export const ListSearch = () => {
  console.log("--ListSearch--");
  //   console.log("");
  const { searchValueList =[], searchValue } = useContext(GiphyContext);

  // useEffect(() => {
  //   console.log("**useEffect of ListSearch**");
  //   console.log(searchValue);
  // }, [searchValue]);

  console.log(searchValueList);
  return (
    <>
      <h2 className="text-xl font-bold">Historial de busqueda</h2>

      <ul className="flex justify-center gap-3">
        {searchValueList.map((value) => (
          <li
            className="border-2 border-yellow-400 rounded-2xl text-white bg-black p-2"
            key={crypto.randomUUID()}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};
