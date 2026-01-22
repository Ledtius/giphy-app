import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const Title = () => {
  const { searchValue } = useContext(GiphyContext);

  console.log(searchValue);
  return (
    <>
      <h1 className="font-bold text-xl">Buscador de Gifs</h1>
    </>
  );
};
