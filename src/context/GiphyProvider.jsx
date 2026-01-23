import { GiphyContext } from "./GiphyContext";

import { useGiphy } from "../hooks/useGiphy";

export const GiphyProvider = ({ children }) => {
  console.log("--GiphyProvider--");
  const { searchValue, setSearchValue, dataApi, setDataApi, gifUrlIds } =
    useGiphy();

  return (
    <>
      <GiphyContext.Provider
        value={{ searchValue, setSearchValue, dataApi, setDataApi, gifUrlIds }}
      >
        {children}
      </GiphyContext.Provider>
    </>
  );
};
