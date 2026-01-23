import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const List = () => {
  console.log("--List--");
  const { gifUrls } = useContext(GiphyContext);

  console.log(gifUrls);

  return <></>;
};
