import { GiphyContext } from "./GiphyContext";

import { useGiphy } from "../hooks/useGiphy";

export const GiphyProvider = ({ children }) => {
  console.log("--GiphyProvider--");
  const { searchValue, setSearchValue, dataApi, setDataApi, gifUrls } =
    useGiphy();

  return (
    <>
      <GiphyContext.Provider
        value={{ searchValue, setSearchValue, dataApi, setDataApi, gifUrls }}
      >
        {children}
      </GiphyContext.Provider>
    </>
  );
};
