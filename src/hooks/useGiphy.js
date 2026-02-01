import { useEffect, useState } from "react";
import { GiphyUrls } from "../services/GiphyUrls";
import { useStorage } from "../hooks/useStorage";

export const useGiphy = () => {
  console.log("--useGiphy--");

  const [searchValue, setSearchValue] = useState("");

  const [dataApi, setDataApi] = useState({});

  let gifUrlIds = [];

  if (Object.keys(dataApi).length) {
    const { data } = dataApi;
    gifUrlIds = GiphyUrls(data);
  }

  const { searchValueList, setSearchValueList, deleteAll, deleteOne } =
    useStorage(searchValue);

  const [valueClicked, setValueClicked] = useState("");

  console.log({ valueClicked });

  const [fetchActive, setFetchActive] = useState(false);

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
  };
};
