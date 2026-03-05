import { useState } from "react";
import { GiphyUrls } from "../services/GiphyUrls";
import { useStorage } from "../hooks/useStorage";
import { useEffect } from "react";

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
    useStorage(searchValue, searchObject);

  const [valueClicked, setValueClicked] = useState("");

  const [fetchActive, setFetchActive] = useState(false);

  const [clickedPaginationItem, setClickedPaginationItem] = useState(1);

  const [paginationValue, setPaginationValue] = useState({
    limit: 10,
    offset: 0,
  });

  const [arrFrag, setArrFrag] = useState();

  useEffect(() => {
    console.log({ arrFrag });
  }, [valueClicked, searchValue]);

  console.log({ arrFrag });
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
    clickedPaginationItem,
    setClickedPaginationItem,
    paginationValue,
    setPaginationValue,
    arrFrag,
    setArrFrag,
  };
};
