import { useState } from "react";
import { GiphyUrls } from "../services/GiphyUrls";
import { useStorage } from "../hooks/useStorage";

export const useGiphy = () => {
  const [searchValue, setSearchValue] = useState("");

  const [searchObject, setSearchObject] = useState({
    value: "",
    id: "",
    response: [],
  });

  const [dataApi, setDataApi] = useState({});

  let gifUrlIds = [];

  const [statusFetch, setStatusFetch] = useState(200);

  if (statusFetch === 200) {
    if (Object.keys(dataApi).length) {
      gifUrlIds = GiphyUrls(dataApi);
    }
  }

  const { searchValueList, setSearchValueList, deleteAll, deleteOne } =
<<<<<<< HEAD
    useStorage(searchValue, gifUrlIds);
=======
    useStorage(searchValue, searchObject);
>>>>>>> refactor

  const [valueClicked, setValueClicked] = useState("");

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
    statusFetch,
    setStatusFetch,
    searchObject,
    setSearchObject,
  };
};
