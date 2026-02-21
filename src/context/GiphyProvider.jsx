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
        }}
      >
        {children}
      </GiphyContext.Provider>
    </>
  );
};
