import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";

const APIKEY = import.meta.env.VITE_API_KEY;

export const GiphyFetch = () => {
  console.log("__GiphyFetch__");

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
      console.log("..feching..");

      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${value}`,
      );

      let { status } = response;
      console.log({ status });

      // status = 500;
      if (status >= 400 && status < 500) {
        setStatusFetch(status);
        setFetchActive(false);
        console.log({ status });
      } else if (status >= 500) {
        setStatusFetch(status);
        setFetchActive(false);
        console.log({ status });
      } else {
        const data = await response.json();
        console.log({ status });

        console.log("__GiphyFetch__ setDataApi");

        console.log({ data });
        setTimeout(() => {
          setStatusFetch(status);

          setDataApi(data);
          setFetchActive(false);
        }, 0);
      }
    } catch (e) {
      console.error(`Fetch error: ${e}`);
      throw new error(e);
    }
  };

  useEffect(() => {
    console.log("**useEffect of GiphyFetch**");

    if (searchValue) {
      console.log("**useEffect of GiphyFetch by searchValue**");
      setFetchActive(true);
      queryApi(searchValue);
    }

    if (valueClicked) {
      queryApi(valueClicked);
    }
    // COndicional del  valor que se clickeo
  }, [searchValue, valueClicked]);
};
