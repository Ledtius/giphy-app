import { useEffect } from "react";

export const useDeleteStorage = (
  eventValue,
  valueComponent,
  searchValueList,
  setSearchValueList,
) => {
  console.log("--useDeleteStorage--");
  if (eventValue === "Vaciar historial") {
    setSearchValueList([]);
    localStorage.setItem("searchValueStList", JSON.stringify([]));
  } else {
    console.log("223232");
    const newValueList = searchValueList.filter(
      ({ value }) => valueComponent !== value,
    );
    console.log({ newValueList });
    setSearchValueList(newValueList);

    localStorage.setItem("searchValueStList", JSON.stringify(newValueList));
  }
};
