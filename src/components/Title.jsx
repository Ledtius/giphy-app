import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const Title = () => {
  return (
    <>
      <h1 className="font-bold text-3xl mb-5 text-gray-950">
        Buscador de Gifs
      </h1>
    </>
  );
};
