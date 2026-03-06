import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";

const APIKEY = import.meta.env.VITE_API_KEY;

export const GiphyFetch = () => {
  const {
    searchValue,
    setDataApi,
    valueClicked,
    setFetchActive,
    setStatusFetch,
    clickedPaginationItem,
  } = useContext(GiphyContext);
  // const { limit, offset } = paginationValue;
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
        setTimeout(() => {
          setStatusFetch(status);

          setDataApi(data);
          setFetchActive(false);
        }, 500);
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  function conditionToFetch(valueToFetch) {
    if (valueToFetch) {
      setTimeout(() => {
        setFetchActive(false);
      }, 500);

      setFetchActive(true);

      queryApi(valueToFetch);
    }
  }

  useEffect(() => {
    console.log({ valueClicked });
    conditionToFetch(searchValue);
    conditionToFetch(valueClicked);
  }, [searchValue, valueClicked]);
};
