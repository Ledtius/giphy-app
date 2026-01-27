import { useContext, useEffect, useState } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const useStorage = (searchValue) => {
  console.log("__GiphyStorage__");

  const [searchValueList, setSearchValueList] = useState(() => {
    return JSON.parse(localStorage.getItem("searchValueStList")) || [];
  });

  console.log({ searchValue, searchValueList });

  useEffect(() => {
    console.log(searchValueList);
    if (searchValue) setSearchValueList([...searchValueList, searchValue]);
    localStorage.setItem(
      "searchValueStList",
      JSON.stringify([...searchValueList, searchValue]),
    );
  }, [searchValue]);

  // useEffect(() => {
  //   console.log("**useEffect of GiphyStorage**");
  //   if (Object.keys(dataApi).length) {
  //     console.log("**useEffect of GiphyStorage dataApi**");
  //     localStorage.setItem(
  //       "searchValueStList",
  //       JSON.stringify([...searchValueList, searchValue]),

  //       setSearchValueList(
  //         JSON.parse(localStorage.getItem("searchValueStList")) || [],
  //       ),
  //     );
  //   }
  // }, [dataApi]);

  return { searchValueList };
};
