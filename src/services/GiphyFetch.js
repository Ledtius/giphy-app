import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";

const APIKEY = import.meta.env.VITE_API_KEY;

export const GiphyFetch = () => {
  const {
    searchValue,
    setDataApi,
    valueClicked,
    setFetchActive,
    statusFetch,
    setStatusFetch,
  } = useContext(GiphyContext);
  // Value por searchValue o el valor que se clickeo
  const queryApi = async (value) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${value}`,
      );

      let { status } = response;

      // status = 500;
      if (status >= 400 && status < 500) {
        setStatusFetch(status);
        setFetchActive(false);
      } else if (status >= 500) {
        setStatusFetch(status);
        setFetchActive(false);
      } else {
        const data = await response.json();

        setTimeout(() => {
          setStatusFetch(status);

          setDataApi(data);
          setFetchActive(false);
        }, 0);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    if (searchValue) {
      setFetchActive(true);
      queryApi(searchValue);
    }

    if (valueClicked) {
      queryApi(valueClicked);
    }
    // COndicional del  valor que se clickeo
  }, [searchValue, valueClicked]);
};
