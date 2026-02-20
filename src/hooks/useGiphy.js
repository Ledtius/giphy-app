import { useEffect, useState } from "react";
import { GiphyUrls } from "../services/GiphyUrls";
import { useStorage } from "../hooks/useStorage";

export const useGiphy = () => {
  console.log("--useGiphy--");

  const [searchValue, setSearchValue] = useState("");

  const [dataApi, setDataApi] = useState({});

  let gifUrlIds = [];

  const [statusFetch, setStatusFetch] = useState(200);

  console.log({ statusFetch });

  if (statusFetch === 200) {
    if (Object.keys(dataApi).length) {
      const { data } = dataApi;
      gifUrlIds = GiphyUrls(data);
    }
  }

  const { searchValueList, setSearchValueList, deleteAll, deleteOne } =
    useStorage(searchValue, gifUrlIds);

  const [valueClicked, setValueClicked] = useState("");

  console.log({ valueClicked });

  const [fetchActive, setFetchActive] = useState(false);

  console.log(statusFetch);

  return {
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
    statusFetch,
    setStatusFetch,
  };
};
