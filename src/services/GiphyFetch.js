import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { GiphyUrls } from "./GiphyUrls";

const APIKEY = import.meta.env.VITE_API_KEY;

export const GiphyFetch = () => {
  const {
    searchValue,
    setDataApi,
    valueClicked,
    setFetchActive,
    statusFetch,
    searchObject,
    setSearchObject,
    setStatusFetch,
    gifUrlIds,
  } = useContext(GiphyContext);

  const queryApi = async (value) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${value}`,
      );

      let { status } = response;

      // status = 500;
      if ((status >= 400 && status < 500) || status >= 500) {
        setStatusFetch(status);
        setFetchActive(false);
      } else {
        const data = await response.json();

        setSearchObject({ ...searchObject, response: GiphyUrls(data) });
        setStatusFetch(status);

        setDataApi(data);
        setFetchActive(false);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    if (!searchValue) return;

    console.log({ searchValue });

    setTimeout(() => {
      setFetchActive(false);
    }, 1000);

    setFetchActive(true);
    queryApi(searchValue);

    console.log("Fetchhhhh!!!");
    if (valueClicked) {
      // queryApi(valueClicked);
    }
  }, [searchValue, valueClicked]);
};
