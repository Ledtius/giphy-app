import { GiphyContext } from "./GiphyContext";

import { useGiphy } from "../hooks/useGiphy";

export const GiphyProvider = ({ children }) => {
  console.log("--GiphyProvider--");
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
        }}
      >
        {children}
      </GiphyContext.Provider>
    </>
  );
};
