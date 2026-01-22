import { GiphyContext } from "./GiphyContext";

import { useGiphy } from "../hooks/useGiphy";

export const GiphyProvider = ({ children }) => {
  const { searchValue, setSearchValue } = useGiphy();

  return (
    <>
      <GiphyContext.Provider value={{ searchValue, setSearchValue }}>
        {children}
      </GiphyContext.Provider>
    </>
  );
};
