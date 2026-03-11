import { GiphyContext } from "./GiphyContext";

import { useGiphy } from "../hooks/useGiphy";

export const GiphyProvider = ({ children }) => {
  const {
    searchValue,
    setSearchValue,
    dataApi,
    setDataApi,
    gifUrlIds,
    searchValueList,
    setSearchValueList,
    valueClicked,
    setValueClicked,
    deleteAll,
    deleteOne,
    fetchActive,
    setFetchActive,
    statusFetch,
    setStatusFetch,
    searchObject,
    setSearchObject,
    clickedPaginationItem,
    setClickedPaginationItem,
    paginationValue,
    setPaginationValue,
    arrFrag,
    setArrFrag,
  } = useGiphy();

  return (
    <>
      <GiphyContext.Provider
        value={{
          searchValue,
          setSearchValue,
          dataApi,
          setDataApi,
          gifUrlIds,
          searchValueList,
          setSearchValueList,
          valueClicked,
          setValueClicked,
          deleteAll,
          deleteOne,
          fetchActive,
          setFetchActive,
          statusFetch,
          setStatusFetch,
          searchObject,
          setSearchObject,
          clickedPaginationItem,
          setClickedPaginationItem,
          paginationValue,
          setPaginationValue,
          arrFrag,
          setArrFrag,
        }}
      >
        {children}
      </GiphyContext.Provider>
    </>
  );
};
