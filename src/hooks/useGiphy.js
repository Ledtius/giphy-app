import { useState } from "react";
import { GiphyUrls } from "../services/GiphyUrls";

export const useGiphy = () => {
  console.log("--useGiphy--");

  const [searchValue, setSearchValue] = useState("");

  const [dataApi, setDataApi] = useState({});

  const data = dataApi?.data || [];

  const gifUrls = GiphyUrls(data);

  if (gifUrls.length > 0) console.log("..urls filled..");

  return { searchValue, setSearchValue, dataApi, setDataApi, gifUrls };
};
