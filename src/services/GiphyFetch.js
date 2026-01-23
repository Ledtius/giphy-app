import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";

const APIKEY = import.meta.env.VITE_API_KEY;

export const GiphyFetch = () => {
  console.log("__GiphyFetch__");

  const { searchValue, setDataApi } = useContext(GiphyContext);

  const queryApi = async () => {
    try {
      console.log("..feching..");
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${searchValue}`,
      );

      const data = await response.json();

      setDataApi(data);
    } catch (e) {
      console.error(`Fetch error: ${e}`);
    }
  };

  useEffect(() => {
    console.log("**useEffect of GiphyFetch**");

    if (searchValue) {
      queryApi();
    }
  }, [searchValue]);
};
