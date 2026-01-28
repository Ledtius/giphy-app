import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";

const APIKEY = import.meta.env.VITE_API_KEY;

export const GiphyFetch = () => {
  console.log("__GiphyFetch__");

  const { searchValue, setDataApi, valueClicked } = useContext(GiphyContext);
  // Value por searchValue o el valor que se clickeo
  const queryApi = async (value) => {
    try {
      console.log("..feching..");
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${value}`,
      );

      const data = await response.json();

      console.log("__GiphyFetch__ setDataApi");

      setDataApi(data);
    } catch (e) {
      console.error(`Fetch error: ${e}`);
    }
  };

  useEffect(() => {
    console.log("**useEffect of GiphyFetch**");

    if (searchValue) {
      console.log("**useEffect of GiphyFetch by searchValue**");
      queryApi(searchValue);
    }

    if (valueClicked) {
      queryApi(valueClicked);
    }
    // COndicional del  valor que se clickeo
  }, [searchValue, valueClicked]);
};
