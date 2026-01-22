import { useContext } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const Form = () => {
  const { setSearchValue } = useContext(GiphyContext);
  
  const handleClick = () => {
    setSearchValue("ss");
  };

  return (
    <>
      <section>
        <input className="input" type="text" />
        <button className="search-btn" onClick={handleClick}>
          Buscar
        </button>
      </section>
    </>
  );
};
