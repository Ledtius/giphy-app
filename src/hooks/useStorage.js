import { useEffect, useState } from "react";

<<<<<<< HEAD
export const useStorage = (searchValue, gifUrlIds) => {
  console.log("--useStorage--");

=======
export const useStorage = (searchValue) => {
>>>>>>> refactor
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

<<<<<<< HEAD
      setSearchValueList([
        ...noRepeatSearchValueList,
        { value: searchValue, id: crypto.randomUUID()},
      ]);

      console.log("--creating/replacing localStorage--");
      localStorage.setItem(
        "searchValueStList",
        JSON.stringify([
          ...noRepeatSearchValueList,
          { value: searchValue, id: crypto.randomUUID()},
        ]),
=======
      localStorage.setItem(
        "searchValueStList",
        JSON.stringify([...noRepeatSearchValueList, storageElement]),
>>>>>>> refactor
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
