import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";
import { GiphyUrls } from "./GiphyUrls";

const APIKEY = import.meta.env.VITE_API_KEY;

export const GiphyFetch = () => {
  const {
    searchValue,
    setDataApi,
    valueClicked,
    setFetchActive,s
    setStatusFetch,
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

        setStatusFetch(status);

        setDataApi(data);
        setFetchActive(false);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  function conditionToFetch(valueToFetch) {
    if (valueToFetch) {
      setTimeout(() => {
        setFetchActive(false);
      }, 1000);

      setFetchActive(true);

      queryApi(valueToFetch);
    }
  }

  useEffect(() => {
    conditionToFetch(searchValue);
    conditionToFetch(valueClicked);
  }, [searchValue, valueClicked]);
};
