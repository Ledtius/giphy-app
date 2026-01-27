import { useContext, useState } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const Form = () => {
  console.log("--Form--");

  const { setSearchValue } = useContext(GiphyContext);

  const [inputValue, setInputValue] = useState("");

  const handleInput = (input) => {
    const inputLV = input.target.value;

    setInputValue(inputLV);
  };

  const handleClick = () => {
    console.log("--Form-- setSearchValue");
    setSearchValue(inputValue);

    setInputValue("");
  };

  return (
    <>
      <section>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleInput}
        />
        <button className="search-btn" onClick={handleClick}>
          Buscar
        </button>
      </section>
    </>
  );
};
