import { useEffect, useState } from "react";

export const useStorage = (searchValue) => {
  const [searchValueList, setSearchValueList] = useState(() => {
    return JSON.parse(localStorage.getItem("searchValueStList")) || [];
  });

  useEffect(() => {
    if (searchValue) {
      const noRepeatSearchValueList = searchValueList.filter(
        ({ value }) => value !== searchValue,
      );

      setSearchValueList([
        ...noRepeatSearchValueList,
        { value: searchValue, id: crypto.randomUUID() },
      ]);

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
