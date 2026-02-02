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

      const noRepeatSearchValueList = searchValueList.filter(
        ({ value }) => value !== searchValue,
      );

      console.log({ noRepeatSearchValueList });

      setSearchValueList([
        ...noRepeatSearchValueList,
        { value: searchValue, id: crypto.randomUUID() },
      ]);

      console.log("--creating/replacing localStorage--");
      localStorage.setItem(
        "searchValueStList",
        JSON.stringify([
          ...noRepeatSearchValueList,
          { value: searchValue, id: crypto.randomUUID() },
        ]),
      );
    }
  }, [searchValue]);

  const deleteAll = () => {
    console.log("--useStorage deleteAll Function--");

    console.log("--useStorage setSearchValueList--");
    setSearchValueList([]);
    console.log("--creating/replacing localStorage--");
    localStorage.setItem("searchValueStList", JSON.stringify([]));
  };

  const deleteOne = (valueComponent) => {
    console.log("--useStorage deleteAll Function--");
    const newValueList = searchValueList.filter(
      ({ value }) => valueComponent !== value,
    );
    console.log("--useStorage setSearchValueList--");
    setSearchValueList(newValueList);

    console.log("--creating/replacing localStorage--");
    localStorage.setItem("searchValueStList", JSON.stringify(newValueList));
  };

  return { searchValueList, setSearchValueList, deleteAll, deleteOne };
};
