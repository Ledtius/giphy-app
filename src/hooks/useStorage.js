import { useEffect, useState } from "react";

export const useStorage = (searchValue) => {
  const [searchValueList, setSearchValueList] = useState(() => {
    return JSON.parse(localStorage.getItem("searchValueStList")) || [];
  });
  useEffect(() => {
    if (searchValue) {
      const storageElement = { value: searchValue, id: crypto.randomUUID() };

      const noRepeatSearchValueList = searchValueList.filter(
        ({ value }) => value !== searchValue,
      );

      setSearchValueList([...noRepeatSearchValueList, storageElement]);

      localStorage.setItem(
        "searchValueStList",
        JSON.stringify([...noRepeatSearchValueList, storageElement]),
      );
    }
  }, [searchValue]);

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
