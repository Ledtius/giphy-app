import { GiphyContext } from "./GiphyContext";

import { useGiphy } from "../hooks/useGiphy";

export const GiphyProvider = ({ children }) => {
  console.log("--GiphyProvider--");
  const { searchValue, setSearchValue } = useGiphy();

  return (
    <>
      <GiphyContext.Provider value={{ searchValue, setSearchValue }}>
        {children}
      </GiphyContext.Provider>
    </>
  );
};
