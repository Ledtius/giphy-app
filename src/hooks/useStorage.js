import { useEffect, useState } from "react";

export const useStorage = (searchValue) => {
  console.log("--useStorage--");

  const [searchValueList, setSearchValueList] = useState(() => {
    return JSON.parse(localStorage.getItem("searchValueStList")) || [];
  });

  console.log({ searchValue, searchValueList });

  useEffect(() => {
    console.log("**useEffect of useStorage**");
    console.log({ searchValueList });

    if (searchValue) {
      console.log("**useEffect of useStorage by searchValue**");

      console.log("--useStorage setSearchValueList--");
      setSearchValueList([
        ...searchValueList,
        { value: searchValue, id: crypto.randomUUID() },
      ]);

      console.log("--creating/recreating localStorage--");
      localStorage.setItem(
        "searchValueStList",
        JSON.stringify([
          ...searchValueList,
          { value: searchValue, id: crypto.randomUUID() },
        ]),
      );
    }
  }, [searchValue]);

  return { searchValueList, setSearchValueList };
};
