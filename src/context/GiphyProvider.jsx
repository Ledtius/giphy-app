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
        }}
      >
        {children}
      </GiphyContext.Provider>
    </>
  );
};
