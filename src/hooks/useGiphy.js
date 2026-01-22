import { useState } from "react";

export const useGiphy = () => {
  const [searchValue, setSearchValue] = useState("");

  return { searchValue, setSearchValue };
};
