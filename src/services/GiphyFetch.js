import { useContext, useEffect } from "react";
import { GiphyContext } from "../context/GiphyContext";

const APIKEY = import.meta.env.VITE_API_KEY;

export const GiphyFetch = () => {
  console.log("--GiphyFetch--");
  const { searchValue, setData } = useContext(GiphyContext);

  const queryApi = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${searchValue}`,
      );
      
      console.log(response);

      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(`Fetch error: ${e}`);
    }
  };

  useEffect(() => {
    if (searchValue) {
      queryApi();
    }
  }, [searchValue]);
};
