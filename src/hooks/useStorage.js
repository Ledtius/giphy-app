import { useEffect, useState } from "react";

export const useStorage = (searchValue, searchObject) => {
  const [searchValueList, setSearchValueList] = useState(() => {
    return JSON.parse(localStorage.getItem("searchValueStList")) || [];
  });

  const { value: valueSearchObject } = searchObject;

  useEffect(() => {
    if (valueSearchObject) {
      const noRepeatSearchValueList = searchValueList.filter(
        ({ value }) => value !== valueSearchObject,
      );
      console.log(noRepeatSearchValueList);
      setSearchValueList([...noRepeatSearchValueList, searchObject]);

      localStorage.setItem(
        "searchValueStList",
        JSON.stringify([...noRepeatSearchValueList, searchObject]),
      );
    }
  }, [searchObject]);

  const deleteAll = () => {
    setSearchValueList([]);
    localStorage.setItem("searchValueStList", JSON.stringify([]));
  };

  const deleteOne = (valueComponent) => {
    const newValueList = searchValueList.filter(
      ({ value }) => valueComponent !== value,
    );
    setSearchValueList(newValueList);

    localStorage.setItem("searchValueStList", JSON.stringify(newValueList));
  };

  return { searchValueList, setSearchValueList, deleteAll, deleteOne };
};
