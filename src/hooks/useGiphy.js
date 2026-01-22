import { useState } from "react";

export const useGiphy = () => {
  console.log("--useGiphy--");

  const [searchValue, setSearchValue] = useState("");

  const [data, setData] = useState({});

  return { searchValue, setSearchValue, data, setData };
};
