import { useEffect, useState } from "react";
import { GiphyUrls } from "../services/GiphyUrls";

export const useGiphy = () => {
  console.log("--useGiphy--");

  const [searchValue, setSearchValue] = useState("");

  const [dataApi, setDataApi] = useState({});

  const [gifUrlIdsStorage, setGifUrlIdsStorage] = useState(
    () => JSON.parse(localStorage.getItem("gifIdStorage")) || [],
  );

  let gifUrlIds = [];

  if (Object.keys(dataApi).length) {
    const { data } = dataApi;
    gifUrlIds = GiphyUrls(data);
  }

  useEffect(() => {
    console.log("**useEffect of useGiphy**");
  }, []);

  return {
    searchValue,
    setSearchValue,
    dataApi,
    setDataApi,
    gifUrlIds,
    gifUrlIdsStorage,
    setGifUrlIdsStorage,
  };
};
